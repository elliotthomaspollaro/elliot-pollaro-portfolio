import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Film } from 'lucide-react';
import './ShortFilmFeature.css';

const awards = [
  { 
    role: "OFFICIAL SELECTION", 
    festival: "TELLURIDE FILM FESTIVAL" 
  },
  { 
    role: "BEST CINEMATOGRAPHY", 
    festival: "NEW ORLEANS HORROR FILM FESTIVAL" 
  },
  { 
    role: "WINNER", 
    festival: "TYLER TEXAS FILM FESTIVAL" 
  }
];

const ShortFilmFeature = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="short-film-section" id="film">
      <div className="container">
        <MDiv 
          className="film-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// AWARD-WINNING CINEMATOGRAPHY</span>
          <h2 className="massive-film-title">SLEEP NOW IN THE FIRE</h2>
          <p className="film-credit mono text-muted">Writer & Cinematographer — Elliot Pollaro</p>
        </MDiv>

        <div className="laurels-bar">
          {awards.map((award, index) => (
            <MDiv 
              key={index} 
              className="laurel-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="laurel-leaves">
                {/* Minimalist SVG Laurel */}
                <svg width="40" height="auto" viewBox="0 0 100 100" className="laurel-svg">
                  <path d="M50 10 C30 10 10 30 10 60 C10 80 20 95 30 100 C20 80 20 40 40 20" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <path d="M50 10 C70 10 90 30 90 60 C90 80 80 95 70 100 C80 80 80 40 60 20" stroke="currentColor" fill="none" strokeWidth="2"/>
                  <circle cx="50" cy="80" r="5" fill="currentColor"/>
                </svg>
              </div>
              <div className="laurel-text">
                <span className="laurel-role">{award.role}</span>
                <span className="laurel-festival">{award.festival}</span>
              </div>
            </MDiv>
          ))}
        </div>

        <MDiv 
          className="film-player-container glass-panel"
          style={{ y: yParallax }}
        >
          <div className="status-overlay mono">
            <Film size={14} /> [SYS] MASTER_FILE // 21:00
          </div>
          
          <video 
            src="/media/sleep-web.mp4" 
            controls 
            preload="metadata"
            className="film-video"
            poster="/media/sleep-poster.jpg"
          ></video>
        </MDiv>
      </div>
    </section>
  );
};

export default ShortFilmFeature;
