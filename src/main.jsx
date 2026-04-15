import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'

const isMobile = window.innerWidth <= 768;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      <App />
    </MotionConfig>
  </StrictMode>,
)
