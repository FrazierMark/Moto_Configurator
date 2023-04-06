import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
  decals: [
    "decals/004",
    "decals/011",
    "decals/021",
    "decals/030",
    "decals/031",
    "decals/033",
    "decals/036",
  ],
  selectedColor: "#EFBD4E",
});

export { state };
