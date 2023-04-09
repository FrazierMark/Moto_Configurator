import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, OrbitControls } from "@react-three/drei";
import { Center, Environment, Bounds } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import Background from "./Components/Background";
import CameraRig from "./Components/CameraRig";
import {
  EffectComposer,
  SSAO,
  Selection,
  Outline,
} from "@react-three/postprocessing";
import { useState, useRef } from "react";
import { Cloud1 } from "./Components/Cloud1";
import { state } from "./Store";
import { useEffect } from "react";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import { Cloud2 } from "./Components/Cloud2";
import {
  Stage,
  ContactShadows,
  RandomizedLight,
  useHelper,
} from "@react-three/drei";
import { Backdrop } from "@react-three/drei";
import { CameraShake } from "@react-three/drei";

const App = ({
  position = [0.0, 0.0, 1.6],
  fov = 25,
  cloudCount = 2,
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
        
        {/* <Backdrop /> */}
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
              <Moto recieveShadow={true} />

              <mesh
                castShadow={false}
                receiveShadow={true}
                position={[0, 0, -0.4]}
                rotation={[0, 0, -Math.PI * 0.5]}
              >
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial
                  color="#90EE90"
                  roughness={4}
                  metalness={0}
                />
              </mesh>
              <directionalLight
                position={[0, 1, 5]}
                intensity={0.4}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-5}
                shadow-camera-left={-5}
                penumbra={0.5}
              />
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
          receiveShadow={false}
        />
      ))}
      {Array.from({ length: cloudCount }, (_, i) => (
        <Cloud2
          key={i}
          z={-(i / cloudCount) * depth}
          speed={speed}
          scale={Math.floor(Math.random() * 3 + 0.02)}
          receiveShadow={false}
        />
      ))}
    </Canvas>
  );
};

export default App;


