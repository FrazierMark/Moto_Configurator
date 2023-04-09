import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "../Store";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Backdrop() {
  const shadows = useRef();
  const snap = useSnapshot(state);

  // transition color of shadows based on state
  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      snap.parts[0].color,
      0.25,
      delta
    )
  );

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={40}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={3}
        radius={9}
        intensity={0.45}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}
