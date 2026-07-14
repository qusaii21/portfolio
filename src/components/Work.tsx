import "./styles/Work.css";
import { config } from "../config";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {config.projects.slice(0, 6).map((project, index) => (
            <div className={`scrap-card scrap-tint-${(index % 5) + 1}`} key={project.id}>
              {/* Tape strip decoration */}
              <div className="scrap-tape" aria-hidden="true"></div>
              
              {/* Rubber stamp number */}
              <div className="scrap-stamp">
                <span>0{index + 1}</span>
              </div>
              
              {/* Project image */}
              <div className="scrap-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              {/* Washi tape category */}
              <div className="scrap-washi">
                <span>{project.category}</span>
              </div>
              
              {/* Content */}
              <div className="scrap-body">
                <h4 className="scrap-title">{project.title}</h4>
                <p className="scrap-desc">{project.description}</p>
              </div>
              
              {/* Tech tags — hand-torn labels */}
              <div className="scrap-tags">
                {project.technologies.split(", ").slice(0, 4).map((tech, ti) => (
                  <span className="scrap-tag" key={ti}>{tech}</span>
                ))}
              </div>
              
              {/* Repo link */}
              <a
                href={(project as any).link || "https://github.com/qusaii21"}
                target="_blank"
                rel="noopener noreferrer"
                className="scrap-link"
                data-cursor="disable"
              >
                {(project as any).link?.includes("play.google.com") ? "view on play store →" : "view repo →"}
              </a>
            </div>
          ))}
        </div>
        
        {/* See All Works */}
        <div className="work-see-all">
          <Link to="/myworks" className="see-all-btn" data-cursor="disable">
            See All Works →
          </Link>
          <Link to="/client-work" className="see-all-btn see-all-btn-secondary" data-cursor="disable">
            Client Portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
