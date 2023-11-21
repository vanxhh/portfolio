const Nav = ({ active, setActive }) => {
  const style = {
    fontSize: "1.4rem",
    fontWeight: "700",
    opacity: "1"
  }

  return (
    <nav className="navbar">
      <ul className="navbar--list">
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("home")}
            style={active == "home" ? style : {}}
          >
            Home
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("about")}
            style={active == "about" ? style : {}}
          >
          About
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("projects")}
            style={active == "projects" ? style : {}}
          >
          Projects
          </div>
        </li>
        <li className="navbar--list__item">
          <div
            onClick={() => setActive("connect")}
            style={active == "connect" ? style : {}}
          >
          Connect
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