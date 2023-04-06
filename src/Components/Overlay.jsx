import { Logo } from "./Logo";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";

export default function Overlay() {
  return <Customizer />;
}

function Intro() {
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </header>

      <section key="main">
        <div className="section--container">
          <div>
            <h1>LET'S RIDE.</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
                Create your unique and exclusive cafe racer with our brand-new
                3D customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own ride.
              </p>
              <button style={{ background: "black" }}>
                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Customizer() {
  const colors = [
    "#ccc",
    "#EFBD4E",
    "#80C670",
    "#726DE8",
    "#EF674E",
    "#353934",
    "Purple",
  ];

  const decals = [
    "decals/003",
    "decals/004",
    "decals/011",
    "decals/021",
    "decals/030",
    "decals/031",
    "decals/033",
    "decals/036",
    "decals/044",
    "decals/052",
  ];

  return (
    <section key="custom">
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
            ></div>
          ))}
        </div>
        <div className="decals">
          <div className="decals--container">
            {decals.map((decal) => (
              <div key={decal} className="decal">
                <img src={decal + ".png"} alt="brand" />
              </div>
            ))}
          </div>
        </div>
        <button className="share" style={{ background: "black" }}>
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>
        <button className="exit" style={{ background: "black" }}>
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </section>
  );
}