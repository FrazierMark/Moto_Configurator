import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "../Store";

function CameraRig({ children }) {
  const group = useRef();

  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      snap.intro
        ? [0, state.viewport.width * 0.02, 2.5]
        : [0, -state.viewport.width / 8, 1.6],
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
  return <group ref={group}>{children}</group>;
}

export default CameraRig;
