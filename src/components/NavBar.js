import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact={"true"} to="/" className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact={"true"}
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={"true"}
                to="/report"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Report Activity
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={"true"}
                to="/collaborate"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Collaborate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={"true"}
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact={"true"}
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
