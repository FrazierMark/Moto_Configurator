import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "../Store";
import { CameraShake } from "@react-three/drei";

function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);
  const config = {
    maxYaw: 0.1, // Max amount camera can yaw in either direction
    maxPitch: 0.1, // Max amount camera can pitch in either direction
    maxRoll: 0, // Max amount camera can roll in either direction
    yawFrequency: 0, // Frequency of the the yaw rotation
    pitchFrequency: 0, // Frequency of the pitch rotation
    rollFrequency: 0, // Frequency of the roll rotation
    intensity: 0.8, // initial intensity of the shake
    decay: false, // should the intensity decay over time
    decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
    controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
  };

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      snap.intro
        ? [0, state.viewport.width * 0.02, 2.5]
        : [0, -state.viewport.width / 8, 1.6],
      0.9,
      delta
    );
    easing.dampE(
      state.camera.rotation,
      snap.intro ? [0.1, 0, Math.PI * -0.5] : [0.18, 0, 0],
      0.9,
      delta
    );
    // Mouse/camera movement
    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 4, state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return (
    <group ref={group}>
      {children} <CameraShake {...config} />
    </group>
  );
}

export default CameraRig;
