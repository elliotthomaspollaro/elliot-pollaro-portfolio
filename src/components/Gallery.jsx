import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import imagesData from '../data/images.json';
import './Gallery.css';

const GalleryImage = ({ item, index, onOpen }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '300px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Assign span class based on aspect ratio for variety
  let spanClass = '';
  if (item.ratio > 1.6) spanClass = 'span-wide';
  else if (item.ratio > 1.3) spanClass = 'span-landscape';
  else if (item.ratio < 0.7) spanClass = 'span-tall';

  return (
    <div
      ref={ref}
      className={`gallery-cell ${spanClass} ${visible ? 'gallery-cell--visible' : ''}`}
      onClick={() => visible && onOpen(item)}
    >
      {visible && (
        <img
          src={item.src}
          loading="lazy"
          alt={`AI Generation ${index + 1}`}
          draggable={false}
        />
      )}
    </div>
  );
};

const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={item.src}
        alt="Full resolution"
        className="lightbox-img"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-close" onClick={onClose}>
        <X size={24} />
      </button>
    </motion.div>
  );
};

const MassiveGallery = () => {
  const [images, setImages] = useState([]);
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    // Strategic shuffle: put wide images first for visual impact, then mix the rest
    const wide = imagesData.filter(i => i.ratio > 1.3);
    const rest = imagesData.filter(i => i.ratio <= 1.3);
    
    // Shuffle each group
    const shuffleArr = (arr) => [...arr].sort(() => 0.5 - Math.random());
    const shuffledWide = shuffleArr(wide);
    const shuffledRest = shuffleArr(rest);
    
    // Interleave: every 2nd image is wide for visual rhythm
    const interleaved = [];
    let wi = 0, ri = 0;
    while (wi < shuffledWide.length || ri < shuffledRest.length) {
      if (wi < shuffledWide.length) interleaved.push(shuffledWide[wi++]);
      if (ri < shuffledRest.length) interleaved.push(shuffledRest[ri++]);
      if (ri < shuffledRest.length) interleaved.push(shuffledRest[ri++]);
    }
    
    setImages(interleaved);
  }, []);

  return (
    <section className="massive-gallery-section" id="gallery">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// GENERATIVE ARCHIVE : {images.length} ASSETS</span>
          <h2 className="section-title">THE NEURAL DATABASE</h2>
          <p className="gallery-subtitle text-muted">
            Prompt-engineered across Midjourney V5–V6. Click any generation for full resolution.
          </p>
        </motion.div>

        <div className="cinema-grid">
          {images.map((img, index) => (
            <GalleryImage
              key={index}
              item={img}
              index={index}
              onOpen={setLightboxItem}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MassiveGallery;
