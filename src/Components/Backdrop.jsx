import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export default function Backdrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI * 0.5, Math.PI * 0.5, 0]}
      position={[0, 0, -0.14]}
    >
          <RandomizedLight
            
          />
    </AccumulativeShadows>
  );
}
