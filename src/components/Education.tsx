import "./styles/Education.css";
import { MdSchool } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Vishwakarma Institute of Technology, Pune",
    period: "2022 – 2026",
    grade: "CGPA: 8.74",
    note: "Specializing in AI, ML, deep learning, and full-stack development.",
    icon: <MdSchool />
  },
  {
    degree: "HSC — Science",
    institution: "Arham School and Jr College",
    period: "2022",
    grade: "75.50%",
    note: "Maharashtra State Board.",
    icon: <FiBook />
  },
  {
    degree: "ICSE — Grade 10",
    institution: "Hume Mchenry Memorial High School and Jr College",
    period: "2020",
    grade: "92.6%",
    note: "Council for the Indian School Certificate Examinations.",
    icon: <MdEdit />
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <span className="edu-bg-text" aria-hidden="true">LEARN.</span>
      <span className="edu-doodle-star" aria-hidden="true">✦</span>
      <span className="edu-doodle-circle" aria-hidden="true">◯</span>
      <div className="edu-container">
        <h2 className="edu-heading">
          Education <span>&</span> Background
        </h2>
        <p className="edu-subheading">where it all started ↓</p>
        <div className="edu-list">
          {education.map((item, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">{item.icon}</div>
              <div className="edu-card-body">
                <div className="edu-card-top">
                  <div>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <p className="edu-institution">{item.institution}</p>
                  </div>
                  <div className="edu-right">
                    <span className="edu-grade">{item.grade}</span>
                    <span className="edu-period">{item.period}</span>
                  </div>
                </div>
                <p className="edu-note">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
