import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Link } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-card glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="profile-wrapper">
            <img src="/media/profileimage.jpg" alt="Elliot Pollaro" className="profile-avatar" />
          </div>
          <h2 className="title glow-text">SYSTEM READY FOR DEPLOYMENT</h2>
          <p className="subtitle">
            Currently available for cross-domain engineering, AI strategy, and performance media operations.
          </p>
          
          <div className="contact-links">
            <a href="mailto:elliotthomaspollaro@gmail.com" className="contact-button mono glass-panel">
              <Mail size={18} className="icon" /> EMAIL_DIRECT
            </a>
            <a href="https://github.com/elliotthomaspollaro" target="_blank" rel="noreferrer" className="contact-button mono glass-panel">
              <Link size={18} className="icon" /> GITHUB_SOURCE
            </a>
            <a href="https://linkedin.com/in/elliotpollaro" target="_blank" rel="noreferrer" className="contact-button mono glass-panel">
              <Link size={18} className="icon" /> LINKEDIN_CORE
            </a>
            <a href="/media/Elliot_Pollaro_Resume_2026.pdf" download className="contact-button mono glass-panel resume-btn">
              <FileText size={18} className="icon" /> RESUME_PDF
            </a>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer mono">
        <div className="footer-status">
          <span className="status-dot"></span>
          <span>SYSTEM_STATUS: ACTIVE</span>
        </div>
        <p>&copy; {new Date().getFullYear()} ELLIOT POLLARO // SHIPPED FROM DALLAS, TX</p>
      </footer>
    </section>
  );
};

export default Contact;
