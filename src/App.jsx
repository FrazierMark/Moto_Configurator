import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Center, Environment, Bounds } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import { AmbientLight } from "three";
import Backdrop from "./Components/Backdrop";
import CameraRig from "./Components/CameraRig";
import { Suspense } from "react";
import Loader from "./Components/Loader";
import {
  EffectComposer,
  SSAO,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { useState } from "react";

const App = ({ position = [0.0, 0.0, 2], fov = 25 }) => {
  const [radius, setRadius] = useState(0);
  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <ambientLight intensity={0.9} />
      <Environment preset="sunset" />
      <OrbitControls />

      {/* <CameraRig> */}
      <Backdrop />
      <Center>
        <Selection>
          <EffectComposer autoClear={false}>
            <SSAO
              radius={radius}
              intensity={150}
              luminanceInfluence={0.5}
              color="black"
            />
            <Outline
              visibleEdgeColor="orange"
              hiddenEdgeColor="orange"
              blur
              edgeStrength={80}
            />
          </EffectComposer>
          <Bounds
            fit
            clip
            margin={1.2}
            damping={0}
            onFit={(e) => setRadius(e.distance / 4000)}
          >
            <Moto />
          </Bounds>
        </Selection>
      </Center>
      {/* </CameraRig> */}
    </Canvas>
  );
};

export default App;


