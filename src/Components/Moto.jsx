
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Moto(props) {
    
  const { nodes, materials } = useGLTF("/CafeRacer.glb");
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI * -0.5, 0]}
      scale={5}
    >
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tanksCombined-Purple_Glossy"].geometry}
          material={materials["Purple Glossy"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["tanksCombined-Purple_Glossy_1"].geometry}
          material={materials["Purple Glossy"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder177_Cylinder264_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder062_Cylinder222_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder153_Cylinder221_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_Cube034_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031_Cube033_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder053_Cylinder026_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029_Cube031_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_Cube011_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012_Plane002_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_Plane_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame_Mesh008_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve041_Mesh028_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve057_Mesh020_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve042_Mesh021_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve045_Mesh030_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve043_Mesh022_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve040_Mesh027_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder180_Cylinder267_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder039_Cylinder055_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder038_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036_Cube016_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012_Cube009_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder275_Cylinder431_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder272_Cylinder427_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder212_Cylinder338_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder270_Cylinder425_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder251_Cylinder384_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder280_Cylinder436_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder271_Cylinder426_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve055_Mesh039_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder255_Cylinder390_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve053_Mesh005_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder234_Cylinder361_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_Cylinder001_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder105_Cylinder136_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024_Cylinder003_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012_Cylinder141_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027_Cylinder008_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011_Cylinder014_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001_Mesh002_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve026_Mesh016_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve015_Mesh007_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder043_Cylinder046_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_Cylinder005_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder179_Cylinder266_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder178_Cylinder265_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder173_Cylinder259_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033_Cylinder041_remesh.geometry}
        material={nodes.Cylinder033_Cylinder041_remesh.material}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve019_Mesh013_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_Cube005_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve052_Mesh038_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Cube002_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve051_Mesh037_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve047_Mesh033_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Cube007_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve049_Mesh034_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve038_Mesh029_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve033_Mesh025_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030_Cube036_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder109_Cylinder063_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035_Cube014_remesh.geometry}
        material={nodes.Cube035_Cube014_remesh.material}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_Cube019_remesh.geometry}
        material={materials["Leather 01"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019_Cube047_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_Cube018_remesh.geometry}
        material={materials["Leather 01"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015_Cylinder020_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder051_Cylinder025_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023_Cube004_remesh.geometry}
        material={materials["Purple Glossy"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032_Cube038_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder250_Cylinder383_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder244_Cylinder376_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018_Plane017_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder253_Cylinder388_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder247_Cylinder380_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder277_Cylinder433_remesh.geometry}
        material={materials.Glass}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder276_Cylinder432_remesh.geometry}
        material={materials.Glass}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder278_Cylinder434_remesh.geometry}
        material={materials.Glass}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder156_Cylinder232_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_Plane005_remesh.geometry}
        material={materials.Glass}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder156_Cylinder232_remesh_1.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder155_Cylinder231_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016_Plane020_remesh.geometry}
        material={materials.Glass}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder143_Cylinder208_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder283_Cylinder439_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder124_Cylinder184_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011_Plane012_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_Cylinder012_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Plane016_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_Cube013_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame002_Mesh010_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame001_Mesh009_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026_Cylinder029_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021_Cylinder011_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame004_Mesh017_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Cube026_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder175_Cylinder262_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame003_Mesh011_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_Cylinder028_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder072_Cylinder091_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder059_Cylinder043_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder137_Cylinder201_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013_Cylinder022_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder216_Cylinder342_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve036_Mesh024_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder206_Cylinder321_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder220_Cylinder346_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017_Cylinder031_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder214_Cylinder340_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_Cylinder021_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder264_Cylinder418_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder224_Cylinder350_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder203_Cylinder317_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve024_Mesh003_remesh.geometry}
        material={materials["Car Paint - Black Solid"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder221_Cylinder347_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve034_Mesh023_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder227_Cylinder353_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder213_Cylinder339_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_Cylinder006_remesh.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025_Cylinder006_remesh_1.geometry}
        material={materials["Rubber - Black"]}
        position={[0, 0, -0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder295_Cylinder458_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder164_Cylinder239_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder169_Cylinder253_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009_Cylinder013_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_Cylinder009_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder192_Cylinder280_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder108_Cylinder037_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder107_Cylinder004_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder142_Cylinder207_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere000_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031_Cylinder010_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029_Cylinder052_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_Sphere002_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder170_Cylinder255_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder281_Cylinder437_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder285_Cylinder441_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder267_Cylinder421_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030_Cylinder023_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder042_Cylinder030_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder172_Cylinder258_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014_Cylinder047_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_Cylinder017_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder174_Cylinder261_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022_Cylinder049_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035_Cylinder019_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002_Sphere001_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_Cylinder002_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020_Cylinder024_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder049_Cylinder050_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder183_Cylinder271_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder058_Cylinder103_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder198_Cylinder312_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028_Cylinder015_remesh.geometry}
        material={materials.Chrome}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/CafeRacer.glb");