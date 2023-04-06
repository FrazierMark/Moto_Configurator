import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, SpotLight } from "@react-three/drei";
import { Center, Environment } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import { AmbientLight } from "three";
import Backdrop from "./Components/Backdrop";
import CameraRig from "./Components/CameraRig";

const App = ({ position = [0.5, 0.2, 1.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <ambientLight intensity={0.9} />
      <Environment preset="sunset" />

      <CameraRig>
        <Center>
          <Moto position={[0, -0.06, 0]} />
          <Backdrop />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default App;


