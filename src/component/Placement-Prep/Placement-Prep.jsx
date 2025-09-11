import { useState } from "react";
import "./Placement-Prep.css";

export default function PlacementPrep() {
  const [activeIndex, setActiveIndex] = useState(null);

  const strategies = [
    { 
      range: "4-6 LPA", 
      checklist: [
        "C++ Basic",
        "Array Easy",
        "Array Medium",
        "String Easy",
        "String Medium"
      ]
    },
    { 
      range: "6-8 LPA", 
      checklist: [
        "Strengthen medium-level DSA (stack, queue, linked list, trees)",
        "Revise DBMS, OS, CN for interviews",
        "Practice system design basics",
        "Build intermediate-level projects"
      ]
    },
    { 
      range: "8-12 LPA", 
      checklist: [
        "Solve medium-hard DSA questions daily",
        "Participate in coding contests (LeetCode/Codeforces)",
        "Revise CS subjects in depth",
        "Work on impactful real-world projects"
      ]
    },
    { 
      range: "12-18 LPA", 
      checklist: [
        "Focus on advanced algorithms (DP, graphs, trees)",
        "Do mock interviews & timed practice",
        "Have 2-3 standout projects/internships",
        "Revise system design concepts"
      ]
    },
    { 
      range: "20-28 LPA", 
      checklist: [
        "Strong low-level + high-level system design",
        "Master advanced DSA (hard problems)",
        "Specialize in one domain (AI, ML, Web, Systems)",
        "Build a strong resume with projects/research"
      ]
    },
    { 
      range: "30+ LPA", 
      checklist: [
        "Contest-level problem solving (Codeforces Div 1 / ICPC level)",
        "Stronghold on distributed system design",
        "Open-source contributions or published research papers",
        "Target global product companies"
      ]
    }
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <p className="Title">Placement Preparation Strategy</p>
      <ul className="accordion-list">
        {strategies.map((item, index) => (
          <li key={index} className="accordion-item">
            <div 
              className={`accordion-title ${activeIndex === index ? "active" : ""}`} 
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.range}</span>
              <span>{activeIndex === index ? "▾" : "▸"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <ul className="checklist">
                  {item.checklist.map((point, i) => (
                    <li key={i}>
                      <input type="checkbox" /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
