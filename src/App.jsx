import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Center, Environment } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import { AmbientLight } from "three";
import Backdrop from "./Components/Backdrop";
import CameraRig from "./Components/CameraRig";
import { Suspense } from "react";
import Loader from "./Components/Loader";

const App = ({ position = [0.0, 0.0, 2], fov = 25 }) => {
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
            <Moto />
          </Center>
      </CameraRig>
    </Canvas>
  );
};

export default App;


