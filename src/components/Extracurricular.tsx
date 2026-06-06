import { useState } from "react";
import "./styles/Extracurricular.css";

interface ExtraItem {
  title: string;
  note: string;
  tag: string;
  emoji: string;
}

const extras: ExtraItem[] = [
  { emoji: "🏆", title: "Uptiq AI Hackathon", note: "1st Runner-Up. Multi-agent vulnerability scanner with CrewAI.", tag: "Winner" },
  { emoji: "🏆", title: "DevClash @ DY Patil", note: "Winner. MediClear — LLM-powered health platform.", tag: "Winner" },
  { emoji: "🚀", title: "Inspiron 4.0 @ COEP", note: "Top 30/200+. NL to optimized SQL using multi-agent RAG.", tag: "Top 30" },
  { emoji: "🌍", title: "TE Connectivity AI Cup", note: "International Finalist. MBD model annotation with CV.", tag: "Finalist" },
  { emoji: "🇮🇳", title: "Smart India Hackathon", note: "Water quality AI for Ganga River Basin.", tag: "Selected" },
  { emoji: "💡", title: "Hult Prize @ MIT-WPU", note: "Sustainable & ethical clothing platform.", tag: "Competitor" },
  { emoji: "⚡", title: "IEEE Project Head", note: "Shipped app on Play Store & App Store. AI workshop for 200+.", tag: "2024–25" },
  { emoji: "⚡", title: "IEEE Exec Committee", note: "Hackathons, DevOps workshops, PR & outreach.", tag: "2023–24" },
  { emoji: "🎨", title: "Design Coordinator", note: "Posters & digital content for Abhivriddhi SDC.", tag: "2022–23" },
  { emoji: "🤝", title: "Eaton Changing Gears", note: "Mentored 15 first-year students.", tag: "Mentor" },
  { emoji: "🎙️", title: "Director VPMUN 2025", note: "Chaired 40+ delegates. AI-generated media.", tag: "Director" },
  { emoji: "🎙️", title: "Director VPMUN 2024", note: "Chaired 40+ delegates. Gender digital divide.", tag: "Director" },
  { emoji: "🎙️", title: "USG — VIT Pune MUN", note: "250+ participants across 7 committees.", tag: "2023–24" },
  { emoji: "🌐", title: "PICT MUN — Japan", note: "Honorable Mention. Xenophobia in Europe.", tag: "🏅 Honors" },
  { emoji: "🌐", title: "SIMS MUN — Iraq", note: "Verbal Mention. UNSC reforms.", tag: "Mention" },
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
                        <span className="cube-emoji">{item.emoji}</span>
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
