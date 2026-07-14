import { Link } from "react-router-dom";
import { config } from "../config";
import "./ClientWork.css";

const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&waitUntil=networkidle2`;

const ClientWork = () => {
  const { webApps, mobileApps } = config.clientWork;

  return (
    <div className="clientwork-page">
      <div className="clientwork-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <p className="clientwork-eyebrow">Selected Client Work</p>
        <h1>
          Web &amp; Mobile <span>Portfolio</span>
        </h1>
        <p className="clientwork-sub">
          A collection of production websites and mobile apps I've designed
          and built for real clients — from e-commerce and healthcare to
          hospitality and B2B catalogues.
        </p>
      </div>

      {/* Web Apps */}
      <section className="clientwork-section">
        <div className="clientwork-section-head">
          <h2>Web Applications</h2>
          <span className="clientwork-count">{webApps.length} projects</span>
        </div>

        <div className="clientwork-grid">
          {webApps.map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cw-card"
              key={project.id}
              data-cursor="disable"
            >
              <div className="cw-card-number">0{index + 1}</div>
              <div className="cw-card-image">
                <img
                  src={shot(project.url)}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div className="cw-card-overlay">
                  <span>Visit Website ↗</span>
                </div>
              </div>
              <div className="cw-card-info">
                <div className="cw-card-top">
                  <h3>{project.title}</h3>
                  <span className="cw-card-category">{project.category}</span>
                </div>
                <p className="cw-card-description">{project.description}</p>
                <div className="cw-card-tags">
                  {project.tags.map((tag) => (
                    <span className="cw-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Mobile Apps */}
      <section className="clientwork-section">
        <div className="clientwork-section-head">
          <h2>Mobile Applications</h2>
          <span className="clientwork-count">{mobileApps.length} apps</span>
        </div>

        <div className="cw-mobile-grid">
          {mobileApps.map((app) => (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cw-mobile-card"
              key={app.id}
              data-cursor="disable"
            >
              <div className="cw-mobile-image">
                <img src={app.image} alt={app.title} loading="lazy" />
              </div>
              <div className="cw-mobile-info">
                <span className="cw-mobile-platform">{app.platform}</span>
                <h3>{app.title}</h3>
                <span className="cw-card-category">{app.category}</span>
                <p className="cw-card-description">{app.description}</p>
                <div className="cw-card-tags">
                  {app.tags.map((tag) => (
                    <span className="cw-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="cw-mobile-cta">View App ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientWork;
