import React from 'react';
import MDiv from './MDiv';
import { Zap, Download, MapPin, Clock } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    role: "Digital Marketing Director — AI & Technology Lead",
    company: "RadioVision, Inc.",
    location: "Dallas, TX",
    type: "Full-time · 40 hrs/week",
    date: "02/2022 – Present",
    points: [
      "Built and launched an AI-powered voice assistant using ChatGPT and ElevenLabs that answers customer questions and routes calls automatically.",
      "Set up automated workflows (Zapier, Make, n8n) connecting customer databases, analytics, and AI services — saving hours of manual work weekly.",
      "Used AI tools to analyze customer data, find conversion patterns, and adjust campaigns — 25% increase in qualified leads within 90 days.",
      "Wrote custom tracking code to measure campaign performance and feed data into AI optimization tools.",
      "Ran hands-on training sessions teaching teams how to use ChatGPT, Claude, Gemini, Midjourney, and RunwayML responsibly.",
      "When Apple's privacy changes broke ad tracking, found workarounds using modeled data and offline signals to keep AI-driven campaigns performing."
    ]
  },
  {
    role: "Co-Owner / Technology & Production Lead",
    company: "A Nomadic Love",
    location: "Dallas, TX",
    type: "Part-time · 20 hrs/week",
    date: "01/2016 – Present",
    points: [
      "Built AI-assisted advertising and search systems, including automated ad optimization and multivariant testing.",
      "Drove a 30% increase in customer inquiries over 24 months through AI-powered campaign optimization."
    ]
  },
  {
    role: "Senior Partner / Digital Marketing Director",
    company: "Pollaro Media",
    location: "Dallas, TX",
    type: "Full-time · 40 hrs/week",
    date: "05/2006 – 01/2017",
    points: [
      "Managed a $15M/year account (Choctaw Nation) for 10 years — oversaw digital advertising, search optimization, analytics, and video production.",
      "Drove a 25% ROI increase and up to 35% revenue growth.",
      "Advised enterprise clients (Baylor Scott & White, Texas Land & Cattle) on technology strategy and data-driven decision making.",
      "Built reporting dashboards that turned raw data into clear visuals for leadership."
    ]
  }
];

const skills = {
  "AI Platforms": "ChatGPT/OpenAI, Claude, Gemini, Google Antigravity, xAI/Grok, Ollama, Midjourney, RunwayML, ElevenLabs, Heygen, Suno, Cursor",
  "Automation": "Zapier, Make, n8n; JavaScript tracking; API integrations",
  "Data & Reporting": "Google Analytics, Search Console, Agency Analytics, SEMrush",
  "Other Tools": "WordPress, VSCode, Adobe Creative Suite, CDK Global, DriveCentric, ELeadCRM"
};

const Timeline = () => {
  return (
    <section className="timeline-section" id="experience">
      <div className="container">
        <MDiv 
          className="timeline-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <span className="mono accent-amber">// PROFESSIONAL HISTORY</span>
            <h2 className="section-title">EXPERIENCE LOG</h2>
          </div>
          <a 
            href="/media/Elliot_Pollaro_Resume_2026.pdf" 
            download 
            className="resume-download mono"
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </a>
        </MDiv>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <MDiv 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-node">
                <div className="node-core"></div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="mono date">{exp.date}</span>
                </div>
                <div className="company-row">
                  <span className="company mono"> <Zap size={14} className="inline-icon" /> {exp.company}</span>
                  <span className="company-meta mono"><MapPin size={12} /> {exp.location}</span>
                  <span className="company-meta mono"><Clock size={12} /> {exp.type}</span>
                </div>
                <ul className="points-list">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </MDiv>
          ))}
        </div>

        {/* Technical Skills Summary */}
        <MDiv
          className="skills-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="skills-title mono">TECHNICAL SKILLS</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list], i) => (
              <div key={i} className="skill-group">
                <span className="skill-cat mono accent-amber">{category}</span>
                <span className="skill-list">{list}</span>
              </div>
            ))}
          </div>
        </MDiv>

      </div>
    </section>
  );
};

export default Timeline;
