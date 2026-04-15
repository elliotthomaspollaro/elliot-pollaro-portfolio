import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

// Return animation props that are disabled on mobile
export const useMobileMotion = () => {
  const isMobile = useIsMobile();
  
  return {
    // For section headers — fade up
    fadeUp: isMobile 
      ? {} 
      : { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" } },
    
    // For cards — fade up smaller
    fadeUpSmall: isMobile
      ? {}
      : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" } },

    // For items — slide in
    slideIn: isMobile
      ? {}
      : { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true } },

    // For scale items
    scaleIn: (delay = 0) => isMobile
      ? {}
      : { initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay }, viewport: { once: true } },

    isMobile
  };
};
