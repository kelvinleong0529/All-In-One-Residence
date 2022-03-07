import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click); // reverse the current value of 'click'
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton); // invoke 'showButton' function whenever the window is resize

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          {" "}
          {/*  Link tag essentially replaces the <a> tag */}
          Home <i className="fab fa-typo3"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/addstudent"
              className="nav-link-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/announcement"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Announcement
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn-outline">SING UP</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
