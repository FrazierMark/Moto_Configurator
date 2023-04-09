import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, OrbitControls } from "@react-three/drei";
import { Center, Environment, Bounds } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import Backdrop from "./Components/Backdrop";
import CameraRig from "./Components/CameraRig";
import {
  EffectComposer,
  SSAO,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { useState } from "react";
import { Cloud1 } from "./Components/Cloud1";
import { state } from "./Store";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

const App = ({
  position = [0.0, 0.0, 1.6],
  fov = 25,
  cloudCount = 3,
  depth = 10,
}) => {
  const snap = useSnapshot(state);
  const [radius, setRadius] = useState(0);

  const [speed, setSpeed] = useState(1); // add state hook for speed

  useEffect(() => {
    if (snap.intro) {
      setSpeed(1); // update speed using the state hook
    } else {
      setSpeed(0); // update speed using the state hook
    }
  }, [state.intro]);

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
      {/* <OrbitControls /> */}

      <CameraRig>
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
      </CameraRig>
      {Array.from({ length: cloudCount }, (_, i) => (
        <Cloud1
          key={i}
          z={-(i / cloudCount) * depth}
          speed={speed}
          scale={Math.floor(Math.random() * 3 + 0.02)}
        />
      ))}
    </Canvas>
  );
};

export default App;


