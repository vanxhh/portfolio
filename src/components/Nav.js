import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("lorem1");

  const style = {
    fontSize: "1.6rem",
    opacity: "1"
  }

  return (
    <nav className="navbar">
      <ul className="navbar--list">
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("lorem1")}
            style={active == "lorem1" ? style : {}}
          >
            • lorem
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("lorem2")}
            style={active == "lorem2" ? style : {}}
          >
          • lorem
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("lorem3")}
            style={active == "lorem3" ? style : {}}
          >
          • lorem
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("lorem4")}
            style={active == "lorem4" ? style : {}}
          >
          • lorem
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

{/* <div className="nav">
      <div className="nav--division"></div>
      <div className="nav--content">
        <ul className="list">
          <li className="nav--item">
            <a href='/'>lorem</a>
          </li>
          <div className="division"></div>
          <li className="nav--item">
            <a href='/'>lorem</a>
          </li>
          <div className="division"></div>
          <li className="nav--item">
            <a href='/'>lorem</a>
          </li>
          <div className="division"></div>
          <li className="nav--item">
            <a href='/'>lorem</a>
          </li>
        </ul>
      </div>
      <div className="nav--division"></div>
    </div> */}