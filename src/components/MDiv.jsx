import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

// On mobile: render motion.div but override initial to prevent opacity:0 blink
// On desktop: render motion.div with full animations
const MDiv = forwardRef(({ initial, whileInView, viewport, transition, animate, style, ...rest }, ref) => {
  if (isMobile) {
    // On mobile, skip scroll-triggered animations entirely
    // BUT preserve style (for MotionValues like parallax) and animate (for entrance)
    return (
      <motion.div 
        ref={ref} 
        style={style}
        animate={animate}
        transition={transition ? { ...transition, delay: 0, duration: 0.01 } : undefined}
        {...rest} 
      />
    );
  }
  return (
    <motion.div 
      ref={ref} 
      initial={initial} 
      whileInView={whileInView} 
      viewport={viewport} 
      transition={transition}
      animate={animate}
      style={style}
      {...rest} 
    />
  );
});

MDiv.displayName = 'MDiv';

export default MDiv;
