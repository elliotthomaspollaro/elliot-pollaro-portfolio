import React, { useState, useEffect, useRef } from 'react';
import MDiv from './MDiv';
import { AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import imagesData from '../data/images.json';
import './Gallery.css';

const IMAGES_PER_PAGE = 24;

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
    <MDiv
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <img
        src={item.src}
        alt="Full resolution"
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button className="lightbox-close" onClick={onClose}>
        <X size={24} />
      </button>
    </MDiv>
  );
};

const MassiveGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const wide = imagesData.filter(i => i.ratio > 1.3);
    const rest = imagesData.filter(i => i.ratio <= 1.3);
    
    const shuffleArr = (arr) => [...arr].sort(() => 0.5 - Math.random());
    const shuffledWide = shuffleArr(wide);
    const shuffledRest = shuffleArr(rest);
    
    const interleaved = [];
    let wi = 0, ri = 0;
    while (wi < shuffledWide.length || ri < shuffledRest.length) {
      if (wi < shuffledWide.length) interleaved.push(shuffledWide[wi++]);
      if (ri < shuffledRest.length) interleaved.push(shuffledRest[ri++]);
      if (ri < shuffledRest.length) interleaved.push(shuffledRest[ri++]);
    }
    
    setImages(interleaved);
  }, []);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
  const pageImages = images.slice(page * IMAGES_PER_PAGE, (page + 1) * IMAGES_PER_PAGE);

  const goToPage = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="massive-gallery-section" id="gallery">
      <div className="container">
        <MDiv
          className="gallery-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// GENERATIVE ARCHIVE : {images.length} ASSETS</span>
          <h2 className="section-title">THE NEURAL DATABASE</h2>
          <p className="gallery-subtitle text-muted">
            Prompt-engineered across Grok Imagine and Midjourney. Click any generation for full resolution.
          </p>
        </MDiv>

        {/* Page navigation top */}
        <div className="gallery-nav" ref={gridRef}>
          <button 
            className="gallery-nav-btn" 
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="gallery-nav-info mono">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`gallery-dot ${i === page ? 'active' : ''}`}
                onClick={() => goToPage(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            className="gallery-nav-btn" 
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages - 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="cinema-grid">
          {pageImages.map((img, index) => (
            <GalleryImage
              key={`${page}-${index}`}
              item={img}
              index={page * IMAGES_PER_PAGE + index}
              onOpen={setLightboxItem}
            />
          ))}
        </div>

        {/* Page navigation bottom */}
        <div className="gallery-nav gallery-nav--bottom">
          <button 
            className="gallery-nav-btn" 
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <span className="gallery-page-label mono">
            Page {page + 1} of {totalPages}
          </span>
          <button 
            className="gallery-nav-btn" 
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages - 1}
          >
            <ChevronRight size={20} />
          </button>
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
