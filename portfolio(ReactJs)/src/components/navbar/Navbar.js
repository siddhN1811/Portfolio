import "./Navbar.css";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../images/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" href=""/>
      </div>
      <div
        className={`mobile-menu   ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`hamburger  ${isMenuOpen ? "active" : ""}`}></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
        {/* <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
          >
            
          </Link> */}
          <a href="#circle-section">About me</a>
        </li>
        {/* <li>
          <a href="#">Skills</a>
        </li> */}
        <li>
          <a href="#design-section">Projects</a>
        </li>
        <li>
          <a href="#design-Porfolio">Design Portfolio</a>
        </li>
        {/* <li>
          <a href="#">Contact</a>
        </li> */}
        <li>
          // <a href="https://drive.google.com/file/d/1QkOaxcnuwioBfWpklhccLSiE/view?usp=sharing" className="resume-button" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
