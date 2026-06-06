import "./styles/Publications.css";

interface Publication {
  title: string;
  venue: string;
  year: string;
  link: string;
  tag: string;
}

const publications: Publication[] = [
  {
    title: "Fake News Detector for Combatting Misinformation in Digital Age",
    venue: "Springer — Machine Vision & Augmented Intelligence (Scopus Indexed)",
    year: "2024",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-4359-9_59",
    tag: "Springer",
  },
  {
    title: "Synthetic Data Generation for Enhanced Model Efficiency: A GAN-Based Approach to Tabular Data",
    venue: "IEEE Xplore — ICCTDC Conference",
    year: "2024",
    link: "",
    tag: "IEEE",
  },
  {
    title: "Intelligent Robot — Using Wall Following Algorithm",
    venue: "IJIRT",
    year: "2024",
    link: "https://ijirt.org/Article?manuscript=161950",
    tag: "Journal",
  },
  {
    title: "Smart Entry Access Control System using Number Plate Recognition and QR Code Integration",
    venue: "Dastavej Research Journal",
    year: "2024",
    link: "https://dastavej.net/wp-content/uploads/27.DRJ24C600.pdf",
    tag: "Journal",
  },
];

const Publications = () => {
  return (
    <section className="publications-section" id="publications">
      <span className="pub-deco" aria-hidden="true">★</span>
      <div className="pub-container">
        <h2 className="pub-heading">
          Research & <span>Publications</span>
        </h2>
        <p className="pub-subheading">peer-reviewed · scopus indexed · published</p>
        <div className="pub-grid">
          {publications.map((pub, i) => (
            <div className="pub-card" key={i}>
              <div className="pub-torn-top" />
              <div className="pub-card-inner">
                <span className="pub-tag">{pub.tag}</span>
                <p className="pub-venue">{pub.venue}</p>
                <h3 className="pub-title">{pub.title}</h3>
                <div className="pub-footer">
                  <span className="pub-year">{pub.year}</span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      data-cursor="disable"
                    >
                      Read paper →
                    </a>
                  )}
                </div>
              </div>
              <div className="pub-torn-bottom" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
