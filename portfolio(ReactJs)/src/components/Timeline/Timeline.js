import React from "react";
import "./Timeline.css"; // Import your CSS file

const Timeline = () => {
  return (
    <section id="design-section" className="design-section">
      <h2>My Projects</h2>

      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content t1">
          <h3>Yu-Gi-Oh essentials</h3>
          <p>
            Yu-Gi-Oh essentials is a{" "}
            <a
              href="https://yugioh-essentials.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              website{" "}
            </a>{" "}
            made using react which has usefull ulitites for playing the card
            game Yu-Gi-Oh. It uses the{" "}
            <a
              href="https://ygoprodeck.com/api-guide/"
              target="_blank"
              rel="noreferrer"
            >
              ygopro api{"  "}
            </a>
            to fetch and display card data and has tools for rolling dice,
            tossing coin and counting life points along with displaying card
            information of the searched card.
            <a
              href="https://github.com/siddhN1811/FLMS"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Link to the Repository
            </a>
          </p>
        </div>
        <div className="timeline-component timeline-content t2">
          <h3>Portfolio Website</h3>
          <p>
            A Website made Using ReactJs.
            <a
              href="https://github.com/siddhN1811/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Link to the Repository
            </a>
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content t3">
          <h3>FLMS</h3>
          <p>
            FLMS stands for Flood Location management and solution and it's a
            proof of concept project to make better alerting systems for areas
            affected by floods repeatedly. It uses GIS, HTML, CSS, Django Python
            and Machine Learning.
            <a
              href="https://github.com/siddhN1811/FLMS"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Link to the Repository
            </a>
          </p>
        </div>

        <div className="timeline-component timeline-content t2">
          <h3>EDT</h3>
          <p>
            Expiry Date Tracker, for tracking expiry date of food products in
            order to reduce wastage. Uses Android studio, Java.
            <a
              href="https://github.com/siddhN1811/Expiry_date_tracker"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Link to the Repository
            </a>
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content t3">
          <h3>Dawn Of Survival</h3>
          <p>
            An 3D Escape the island mobile game made using Unreal Engine 4 and
            uploaded on itch.io.
            <a
              href="https://gitlab.com/siddhN1811/teknack"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp; Link to the Repository
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
