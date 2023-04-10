import { Decal, useTexture } from "@react-three/drei";

const Backdrop = () => {
  const texture1 = useTexture("decals/059.png");

  return (
    <mesh
      castShadow={false}
      receiveShadow={true}
      position={[0, 0, -0.4]}
      rotation={[0, 0, -Math.PI * 0.5]}
    >
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#FFFFF0" roughness={9} metalness={1} />
      <Decal
        position={[-0.2, -0.4, 0.35]}
        rotation={[0, 0, 0]}
        scale={1}
        opacity={1.7}
        map={texture1}
        map-anisotropy={16}
      />
    
    </mesh>
  );
};

export default Backdrop;
