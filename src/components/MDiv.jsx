import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

// On mobile: render a plain div (no animations, no blink)
// On desktop: render motion.div with full animations
const MDiv = forwardRef((props, ref) => {
  if (isMobile) {
    // Strip all motion-specific props, pass only standard HTML/React props
    const {
      initial, animate, exit, whileInView, whileHover, whileTap,
      viewport, transition, variants, layout, layoutId,
      onAnimationStart, onAnimationComplete,
      ...htmlProps
    } = props;
    return <div ref={ref} {...htmlProps} />;
  }
  return <motion.div ref={ref} {...props} />;
});

MDiv.displayName = 'MDiv';

export default MDiv;
