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
    "decals/044",
  ],
  //parts: ["all", "tank", "tail", "sidePanel"],

  parts: [
    { id: 1, label: "Body", value: false, color: "#BAA0BC" },
    { id: 2, label: "Seat", value: false, color: "#784d24" },
    { id: 3, label: "Frame and Engine", value: false, color: "#000000" },
    { id: 4, label: "Chrome", value: false, color: "#ffffff" },
  ],

  selectedColor: "#BAA0BC",
  selectedDecal: "decals/044",
});

export { state };
