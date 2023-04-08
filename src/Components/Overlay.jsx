import { Logo } from "./Logo";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "../Store";
import { motion, AnimatePresence } from "framer-motion";

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
        <div>
          <AiOutlineShopping size="3em" />
        </div>
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

  const handleCheckboxClick = (id, checked) => {
    const updatedParts = snap.parts.map((part) => {
      if (part.id === id) {
        return { ...part, value: checked };
      }
      return part;
    });
    state.parts = updatedParts;
  };

  return (
    <motion.section {...config} key="custom">
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
            ></div>
          ))}
        </div>
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
          style={{ background: snap.selectedColor }}
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
          style={{ background: snap.selectedColor }}
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

        <div className="parts">
          <div className="parts--container">
            {snap.parts.map((part, index) => (
              <div key={part.id}>
                <input
                  className="part"
                  type="checkbox"
                  checked={part.value}
                  onChange={(e) =>
                    handleCheckboxClick(part.id, e.target.checked)
                  }
                />
                <label>{part.label}</label>
              </div>

              // <div
              //   key={`part-${index}`}
              //   className="part"
              //   onClick={() => (state.parts.part = true)}
              // >
              //   <label>
              //     <input type="checkbox" />
              //     <span>{part}</span>
              //   </label>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}