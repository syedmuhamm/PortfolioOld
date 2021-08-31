import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49-176-70136141</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>syedmuhammad@uni-koblenz.de</span>
          </div>
        </div>
        <div className="right">This is right</div>
      </div>
    </div>
  );
}
