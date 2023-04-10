import { Logo } from "./Logo";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "../Store";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HuePicker, CirclePicker, SliderPicker } from "react-color";

export default function Overlay() {
  const snap = useSnapshot(state);

  const transition = { type: "spring", duration: 0.8 };

  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.8, delay: 1 }}
      >
        {/* <Logo width="40" height="40" /> */}
        <img src={"decals/044.png"} width="60" height="60" alt="brand" />
        {/* <div>
          <AiOutlineShopping size="3em" />
        </div> */}
        <hr className="border-line-btm" />
      </motion.header>

      <AnimatePresence>
        {snap.intro ? (
          <Intro key="main" config={config} />
        ) : (
          <Customizer key="custom" config={config} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Intro({ config }) {
  return (
    <motion.section {...config} key="main">
      <div className="section--container">
        <div>
          <h1>Let's Ride.</h1>
        </div>
        <div className="support--content">
          <div>
            <p>
              Create your unique and exclusive cafe racer with our brand-new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own ride.
            </p>
            <button
              style={{ background: "black" }}
              onClick={() => {
                state.intro = false;
                state.parts.map((part) => {
                  part.value = true;
                });
              }}
            >
              CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Customizer({ config }) {
  const snap = useSnapshot(state);

  const handleChange = (newColor) => {
    const updatedParts = snap.parts.map((p) => {
      if (p.value) {
        return { ...p, color: newColor.hex };
      } else {
        return p;
      }
    });
    state.parts = updatedParts;
  };

  const handleCheckboxClick = (part, checked) => {
    const updatedParts = snap.parts.map((p) => {
      if (p.id === part.id) {
        return { ...part, value: checked };
      } else {
        return p;
      }
    });
    state.parts = updatedParts;
  };

  return (
    <motion.section {...config} key="custom">
      <div className="customizer">
        {/* <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
            ></div>
          ))}
        </div> */}
        <div className="decals">
          <div className="decals--container">
            {snap.decals.map((decal) => (
              <div
                key={decal}
                className="decal"
                onClick={() => (state.selectedDecal = decal)}
              >
                <img src={decal + ".png"} alt="brand" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="share"
          style={{ background: snap.parts[0].color }}
          onClick={() => {
            const link = document.createElement("a");
            link.setAttribute("download", "canvas.png");
            link.setAttribute(
              "href",
              document
                .querySelector("canvas")
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream")
            );
            link.click();
          }}
        >
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button
          className="exit"
          style={{ background: snap.parts[0].color }}
          onClick={() => {
            state.intro = true;
            state.parts.map((part) => {
              part.value = false;
            });
          }}
        >
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>

        <div className="parts" >
          <div className="parts--container">
            {snap.parts.map((part, index) => (
              <div key={part.id}>
                <input
                  className="part"
                  type="checkbox"
                  checked={part.value}
                  onChange={(e) => handleCheckboxClick(part, e.target.checked)}
                />

                <label className="part_label">{part.label}</label>
              </div>
            ))}
            <div>
              <SliderPicker color={"#ffffff"} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}