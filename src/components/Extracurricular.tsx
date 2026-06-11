import { useState } from "react";
import "./styles/Extracurricular.css";
import { MdEmojiEvents, MdOutlineRocket, MdPublic, MdLightbulb, MdFlare, MdPalette, MdPeople, MdRecordVoiceOver, MdLanguage } from "react-icons/md";
import { FiFlag } from "react-icons/fi";

interface ExtraItem {
  title: string;
  note: string;
  tag: string;
  icon: React.ReactNode;
}

const extras: ExtraItem[] = [
  { icon: <MdEmojiEvents />, title: "Uptiq AI Hackathon", note: "1st Runner-Up. Multi-agent vulnerability scanner with CrewAI.", tag: "Winner" },
  { icon: <MdEmojiEvents />, title: "DevClash @ DY Patil", note: "Winner. MediClear — LLM-powered health platform.", tag: "Winner" },
  { icon: <MdOutlineRocket />, title: "Inspiron 4.0 @ COEP", note: "Top 30/200+. NL to optimized SQL using multi-agent RAG.", tag: "Top 30" },
  { icon: <MdPublic />, title: "TE Connectivity AI Cup", note: "International Finalist. MBD model annotation with CV.", tag: "Finalist" },
  { icon: <FiFlag />, title: "Smart India Hackathon", note: "Water quality AI for Ganga River Basin.", tag: "Selected" },
  { icon: <MdLightbulb />, title: "Hult Prize @ MIT-WPU", note: "Sustainable & ethical clothing platform.", tag: "Competitor" },
  { icon: <MdFlare />, title: "IEEE Project Head", note: "Shipped app on Play Store & App Store. AI workshop for 200+.", tag: "2024–25" },
  { icon: <MdFlare />, title: "IEEE Exec Committee", note: "Hackathons, DevOps workshops, PR & outreach.", tag: "2023–24" },
  { icon: <MdPalette />, title: "Design Coordinator", note: "Posters & digital content for Abhivriddhi SDC.", tag: "2022–23" },
  { icon: <MdPeople />, title: "Eaton Changing Gears", note: "Mentored 15 first-year students.", tag: "Mentor" },
  { icon: <MdRecordVoiceOver />, title: "Director VPMUN 2025", note: "Chaired 40+ delegates. AI-generated media.", tag: "Director" },
  { icon: <MdRecordVoiceOver />, title: "Director VPMUN 2024", note: "Chaired 40+ delegates. Gender digital divide.", tag: "Director" },
  { icon: <MdRecordVoiceOver />, title: "USG — VIT Pune MUN", note: "250+ participants across 7 committees.", tag: "2023–24" },
  { icon: <MdLanguage />, title: "PICT MUN — Japan", note: "Honorable Mention. Xenophobia in Europe.", tag: "🏅 Honors" },
  { icon: <MdLanguage />, title: "SIMS MUN — Iraq", note: "Verbal Mention. UNSC reforms.", tag: "Mention" },
];

// Colors assigned in a cycle
const colors = ["orange", "teal", "green", "blue", "pink"];

const Extracurricular = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlock = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Build rows: 5, 4, 3, 2, 1 (pyramid / building shape)
  const rows = [
    extras.slice(0, 5),   // bottom row: 5 blocks
    extras.slice(5, 9),   // row 2: 4 blocks
    extras.slice(9, 12),  // row 3: 3 blocks
    extras.slice(12, 14), // row 4: 2 blocks
    extras.slice(14, 15), // top: 1 block
  ].reverse(); // top to bottom in DOM (CSS will stack them visually)

  return (
    <section className="extra-section" id="extracurricular">
      <span className="extra-bg-text" aria-hidden="true">BEYOND.</span>
      <span className="extra-doodle-circle" aria-hidden="true">◯</span>
      <span className="extra-doodle-cross" aria-hidden="true">✕</span>
      <div className="extra-header">
        <h2 className="extra-heading">
          Beyond the <span>Code</span>
        </h2>
        <p className="extra-subheading">click a cube to peek inside</p>
      </div>

      <div className="building">
        {rows.map((row, rowIdx) => {
          const startIdx = rowIdx === 0 ? 14
            : rowIdx === 1 ? 12
            : rowIdx === 2 ? 9
            : rowIdx === 3 ? 5
            : 0;
          return (
            <div className="building-row" key={rowIdx}>
              {row.map((item, colIdx) => {
                const i = startIdx + colIdx;
                const color = colors[i % colors.length];
                return (
                  <div
                    key={i}
                    className={`cube cube-${color} ${openIndex === i ? "cube-open" : ""}`}
                    onClick={() => toggleBlock(i)}
                  >
                    <div className="cube-box">
                      <div className="cube-face cube-top"></div>
                      <div className="cube-face cube-front">
                        <span className="cube-icon">{item.icon}</span>
                      </div>
                      <div className="cube-face cube-right"></div>
                    </div>
                    {/* Popup content on click */}
                    <div className="cube-popup">
                      <h3 className="cube-title">{item.title}</h3>
                      <p className="cube-note">{item.note}</p>
                      <span className="cube-tag">{item.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Extracurricular;
