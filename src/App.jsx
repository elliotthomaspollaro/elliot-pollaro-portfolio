import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ShortFilmFeature from './components/ShortFilmFeature';
import Timeline from './components/Timeline';
import DeployedSystems from './components/DeployedSystems';
import Arsenal from './components/Arsenal';
import VideoShowcase from './components/VideoShowcase';
import GenerativeAudio from './components/GenerativeAudio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      
      <main>
        <Hero />
        <Manifesto />
        <VideoShowcase />
        <ShortFilmFeature />
        <Timeline />
        <Arsenal />
        <DeployedSystems />
        <GenerativeAudio />
        <Gallery />
        <Contact />
      </main>

      {/* Persistent contact badge */}
      <div className="floating-contact">
        <span className="fc-name">Elliot Pollaro</span>
        <span className="fc-divider"></span>
        <a href="mailto:elliotthomaspollaro@gmail.com" className="fc-email">elliotthomaspollaro@gmail.com</a>
      </div>
    </div>
  );
}

export default App;
