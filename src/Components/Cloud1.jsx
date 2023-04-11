import React, { useState, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export function Cloud1({ index, z, speed, scale }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/cloud1.glb");
  const { viewport, camera, mouse } = useThree(); //Used to extract info for calculations
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    // Randomly distributing the objects along the vertical
    x: THREE.MathUtils.randFloatSpread(2), // if 6 passed in, returns value from -3 to 3
    y: THREE.MathUtils.randFloatSpread(height + 10),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(0, (data.rY += 0.003), 0);
    ref.current.position.set((data.x -= 0.019 * speed), data.y, z);
    if (data.x < -width - 0.8) {
      data.x = width / 0.46;
      data.y = data.y * Math.floor(Math.random() * 1.3) + 1;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stylized_static_cloud_004_mesh.geometry}
          material={materials.stylized_static_cloud}
          position={[0.97, 0, -0.51]}
        />
      </group>
    </mesh>
  );
}

useGLTF.preload("/cloud1.glb");
