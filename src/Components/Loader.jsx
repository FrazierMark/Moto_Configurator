import * as React from "react";
import { useProgress, Html } from "@react-three/drei";

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <div center>{progress} % loaded</div>;
}
