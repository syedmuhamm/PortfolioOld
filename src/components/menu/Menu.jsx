import "./menu.scss";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#works">works</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
