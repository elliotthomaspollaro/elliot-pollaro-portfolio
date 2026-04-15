import React from 'react';
import MDiv from './MDiv';
import { FileText, Mail, Link } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <MDiv 
          className="contact-card glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="profile-wrapper">
            <img src="/media/profileimage.jpg" alt="Elliot Pollaro" className="profile-avatar" />
          </div>
          <h2 className="title glow-text">READY FOR DEPLOYMENT</h2>
          <p className="subtitle">
            Looking to integrate top-tier AI capabilities and operational automation? Let's connect.
          </p>
          
          <div className="contact-links">
            <a href="/media/Elliot_Pollaro_Resume_2026.pdf" download className="contact-button mono glass-panel">
              <FileText size={20} className="icon" /> Download Resume
            </a>
            <a href="mailto:elliotthomaspollaro@gmail.com" className="contact-button mono glass-panel">
              <Mail size={20} className="icon" /> Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-button mono glass-panel">
              <Link size={20} className="icon" /> LinkedIn
            </a>
          </div>
        </MDiv>
      </div>
      
      <footer className="footer mono">
        <p>&copy; {new Date().getFullYear()} ELLIOT POLLARO // Built with First Principles</p>
      </footer>
    </section>
  );
};

export default Contact;
