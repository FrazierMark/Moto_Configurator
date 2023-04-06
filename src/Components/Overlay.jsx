import { Logo } from "./Logo";
import { AiOutlineHighlight, AiOutlineShopping } from "react-icons/ai";

export default function Overlay() {
  return <Intro />;
}

function Intro() {
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <AiOutlineShopping size="3em" />
      </header>
    </div>
  );
}
