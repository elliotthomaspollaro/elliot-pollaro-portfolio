import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import MDiv from './MDiv';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero-section cinematic-dark" id="hero">
      <div className="hero-grid-overlay"></div>
      
      <MDiv 
        className="hero-content"
        style={{ y, opacity }}
      >
        <MDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="brand-lockup mono"
        >
          <span className="accent-amber">SYS.INIT //</span> ELLIOT POLLARO
        </MDiv>

        <MDiv 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title"
        >
          <h1>ARCHITECT<br/>OF THE<br/>FUTURE.</h1>
        </MDiv>

        <MDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="hero-subtitle text-muted"
        >
          <p>Intelligence integration. Scalable systems. First-principles engineering.</p>
        </MDiv>

        <MDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.6 }}
          className="hero-contact-strip mono"
        >
          <a href="mailto:elliotthomaspollaro@gmail.com" className="hero-contact-item">
            <Mail size={14} /> elliotthomaspollaro@gmail.com
          </a>
          <a href="tel:9036243014" className="hero-contact-item">
            <Phone size={14} /> (903) 624-3014
          </a>
          <span className="hero-contact-item">
            <MapPin size={14} /> Dallas, TX
          </span>
        </MDiv>
      </MDiv>

      <MDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="scroll-indicator mono"
      >
        <span>SCROLL TO DESCEND</span>
        <div className="scroll-line"></div>
      </MDiv>
    </section>
  );
};

export default Hero;
