import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        {/* Decorative doodles & shapes */}
        <span className="doodle doodle-star-1" aria-hidden="true">✦</span>
        <span className="doodle doodle-circle-1" aria-hidden="true">◯</span>
        <span className="doodle doodle-squiggle" aria-hidden="true">〜</span>
        <span className="doodle doodle-star-2" aria-hidden="true">✶</span>
        <span className="doodle doodle-arrow" aria-hidden="true">↗</span>
        <span className="doodle doodle-dot-1" aria-hidden="true">●</span>
        <span className="doodle doodle-dot-2" aria-hidden="true">●</span>
        <span className="doodle doodle-dot-3" aria-hidden="true">●</span>
        <span className="doodle doodle-cross" aria-hidden="true">✕</span>
        <span className="doodle doodle-ring" aria-hidden="true">◎</span>
        <div className="blob blob-1" aria-hidden="true"></div>
        <div className="blob blob-2" aria-hidden="true"></div>

        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hey, I'm</h2>
            <div className="landing-name">
              <h1 className="name-first">{firstName.toUpperCase()}</h1>
              <h1 className="name-last">{lastName.toUpperCase()}</h1>
            </div>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Engineer</div>
            </h2>
            <h2>
              {/* "Full-Stack Dev" — shortened for layout */}
              <div className="landing-h2-info">Full-Stack Dev</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          {/* TODO: Replace /public/images/mypic.jpg with Qusai's photo (remove background PNG recommended) */}
          <div className="mobile-photo">
            <img src="/images/mypic.jpg" alt="Qusai Shergardwala" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
