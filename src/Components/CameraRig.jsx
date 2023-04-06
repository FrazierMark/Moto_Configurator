import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const CameraRig = ({ children }) => {
  const group = useRef();

    useFrame((state, delta) => {
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
      )
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
