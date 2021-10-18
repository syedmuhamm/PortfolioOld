import "./intro.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Designer", "Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.JPG" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Syed Muhammad</h1>
          <h3>
            Front-End <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
