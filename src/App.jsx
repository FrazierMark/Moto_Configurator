import { Canvas } from "@react-three/fiber";
import { AccumulativeShadows, SpotLight } from "@react-three/drei";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import { Moto } from "./Components/Moto";
import { AmbientLight } from "three";
import Backdrop from "./Components/Backdrop";

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <Center>
        <Moto />
        <Backdrop />
      </Center>
    </Canvas>
  );
};

export default App;


