import "./Navbar.css";
import React, { useState } from "react";

import logo from "../images/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className={`mobile-menu   ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`hamburger  ${isMenuOpen ? "active" : ""}`}></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#" className="resume-button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
