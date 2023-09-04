import React from "react";
import "./AboutMe.css"; // Import your CSS file
// import myPic from "../images/myPic.jpg"; // Import your image
const AboutMeSection = () => {
  return (
    <section id = "about-me-section" className="about-me-section">
      <div className="about-me-container">
        <div className="my-pic">
                 </div>
        <div className="about-me-text">
          <h1>Hi, I am Siddhanth Naidu.</h1>
          <p>
          Hello! I'm Siddhanth Naidu, a passionate and dedicated computer engineering
           student with a knack for turning ideas into digital reality.At Larsen & Toubro Infotech Ltd., I explored Model-Driven Engineering, 
           bridging the gap between abstract models and tangible software solutions. My role involved researching, testing, and documenting tools for code 
           conversion using UML, showcasing my technical prowess and analytical thinking.With Adobe Photoshop, Figma, ChatGPT, Flutter, Android Studio, HTML5, CSS, Python, Unreal Engine, and a dash of creativity, 
           I'm on a mission to create digital experiences
            that resonate. Join me on this exhilarating journey of turning visions into reality, one pixel at a time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
