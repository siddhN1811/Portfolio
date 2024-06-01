import "./HeroSection.css";
import heroImg from "../images/heroImg.jpg";

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="text-bg">
        <div className="hero-content">
          <p
            style={{ color: "#5c735b", paddingBottom: "6px", fontSize: "40px" }}
          ></p>
          <p
            style={{ color: "#ffa500", paddingBottom: "6px", fontSize: "40px" }}
          >
            if <span style={{ color: "white" }}>(problem == </span>
            <span style={{ color: "#48ba2b" }}>True</span>
            <span style={{ color: "white" }}>)&nbsp;&nbsp;{"{"}</span>
          </p>
          <p style={{ paddingBottom: "6px", fontSize: "40px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;problem.
            <span style={{ color: "#2b85ed" }}>solve</span>
            ();
          </p>
          <p style={{ fontSize: "40px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#2b85ed" }}>beAwesome</span>
            ();
            <br />
            {"}"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
