import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <span className="about-quote-mark" aria-hidden="true">"</span>
      <span className="about-hello" aria-hidden="true">HELLO.</span>
      <div className="about-doodle-circle" aria-hidden="true"></div>
      <span className="about-doodle-arrow" aria-hidden="true">→</span>
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">
          {config.about.description}
        </p>
      </div>
    </div>
  );
};

export default About;
