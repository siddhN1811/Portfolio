import "./CircleComponent.css";
import ueLogo from "../images/ueLogo.png"; // Import your images
import githubLogo from "../images/githubLogo.png";
import shareLogo from "../images/shareLogo.png";
const CircleComponent = () => {
  return (
    <section className="circle-section">
      <div className="circle-container">
        <div className="circle">
          <div className="circle-text">
            <div className="box-shadow">My own Game!</div>
            <img src={ueLogo} alt="UE Logo" />
          </div>
          <div className="circle-text2">Back</div>
        </div>
        <div className="circle">
          <div className="circle-text">
            <div className="box-shadow">My Github</div>
            <img src={githubLogo} alt="GitHub Logo" />
          </div>
          <div className="circle-text2">Back</div>
        </div>
        <div className="circle">
          <div className="circle-text">
            <div className="box-shadow">My Socials</div>
            <img src={shareLogo} alt="Share Logo" />
          </div>
          <div className="circle-text2">Back</div>
        </div>
      </div>
    </section>
  );
};

export default CircleComponent;
