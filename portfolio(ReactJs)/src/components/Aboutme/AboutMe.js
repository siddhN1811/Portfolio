import React from "react";
import "./AboutMe.css"; // Import your CSS file
// import myPic from "../images/myPic.jpg"; // Import your image

const AboutMeSection = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <div className="my-pic"></div>
        <div className="about-me-text">
          <h1>Hi, I am Siddhanth Naidu.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
