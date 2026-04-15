import React, { useState } from 'react';
import MDiv from './MDiv';
import { AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Globe, ChevronRight, ChevronLeft, Layers, Zap, Database, Code2 } from 'lucide-react';
import './DeployedSystems.css';

const webSystems = [
  { 
    name: 'RadioVision', 
    url: 'https://radiovisioninc.com', 
    role: 'B2B Lead Generation Hub',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    desc: '33-year media production company. AI-powered workflows, CTV advertising, and full-service creative studio.',
    accent: '#FFB000',
    screenshot: '/media/ss-radiovisioninc.png'
  },
  { 
    name: 'Dynasty Dealer', 
    url: 'https://dynastydealer.com', 
    role: 'AI Trade Analytics Platform',
    stack: ['React', 'Node.js', 'Supabase', 'Vercel', 'MySQL'],
    desc: 'Full-stack dynasty trade calculator with proprietary AI valuation engine, serving thousands of daily active users.',
    accent: '#00F0FF',
    screenshot: '/media/ss-dynastydealer.png'
  },
  { 
    name: 'DFW Crash Data', 
    url: 'https://dfwcrashdata.com', 
    role: 'Real-Time Data Platform',
    stack: ['Next.js', 'React', 'Vercel'],
    desc: 'Real-time crash report monitoring system processing 2,800+ active incidents across the Dallas-Fort Worth metroplex.',
    accent: '#FF3366',
    screenshot: '/media/ss-dfwcrashdata.png'
  },
  { 
    name: 'Carly Gage', 
    url: 'https://carlygage.com', 
    role: 'Photography & Booking Platform',
    stack: ['Next.js', 'React', 'Vercel'],
    desc: 'High-conversion photography brand with programmatic SEO across 10+ DFW location pages and integrated booking.',
    accent: '#A855F7',
    screenshot: '/media/ss-carlygage.png'
  },
  { 
    name: 'A Nomadic Love', 
    url: 'https://anomadiclove.com', 
    role: 'Destination Wedding Media',
    stack: ['WordPress', 'Custom CSS', 'Nginx'],
    desc: 'International destination wedding photography brand with a decade of global coverage and media delivery.',
    accent: '#10B981',
    screenshot: '/media/ss-anomadiclove.png'
  }
];

const DeployedSystems = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = webSystems[activeIdx];

  return (
    <section className="deployments-section" id="deployments">
      <div className="container">
        
        <MDiv 
          className="deployments-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// PRODUCTION SYSTEMS</span>
          <h2 className="section-title">ACTIVE DEPLOYMENTS</h2>
        </MDiv>

        {/* ── MOBILE APP HERO CARD ── */}
        <MDiv 
          className="app-hero-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="app-hero-glow"></div>
          <div className="app-hero-content">
            <div className="app-hero-text">
              <div className="app-badge mono">
                <Smartphone size={14} />
                <span>NATIVE APPLICATION</span>
              </div>
              <h3 className="app-hero-title">Dynasty Dealer</h3>
              <p className="app-hero-subtitle">iOS & Android</p>
              <p className="app-hero-desc">
                Dual-framework mobile deployment. AI-powered trade valuation 
                engines running directly on-device with real-time league sync.
              </p>
              <div className="app-hero-stats">
                <div className="stat-pill"><Zap size={14} /> <span>Real-time Sync</span></div>
                <div className="stat-pill"><Database size={14} /> <span>On-Device AI</span></div>
                <div className="stat-pill"><Layers size={14} /> <span>Expo / EAS</span></div>
              </div>
            </div>
            <div className="app-hero-device">
              <img src="/media/iphonemockup.png" alt="Dynasty Dealer Mobile App" className="floating-device" />
            </div>
          </div>
        </MDiv>

        {/* ── WEB SYSTEMS INTERACTIVE PANEL ── */}
        <MDiv 
          className="web-systems-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="panel-sidebar">
            <h4 className="panel-sidebar-title mono"><Globe size={14} /> WEB ARCHITECTURE</h4>
            {webSystems.map((sys, idx) => (
              <button 
                key={idx}
                className={`panel-tab ${idx === activeIdx ? 'panel-tab--active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                style={idx === activeIdx ? { '--tab-accent': sys.accent } : {}}
              >
                <span className="panel-tab-name">{sys.name}</span>
                <ChevronRight size={16} className="panel-tab-arrow" />
              </button>
            ))}
          </div>
          
          <div className="panel-main">
            <AnimatePresence mode="wait">
              <MDiv
                key={activeIdx}
                className="panel-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Browser Mockup with Screenshot */}
                <a href={active.url} target="_blank" rel="noreferrer" className="browser-frame">
                  <div className="browser-chrome">
                    <div className="browser-dots">
                      <span className="bdot bdot-r"></span>
                      <span className="bdot bdot-y"></span>
                      <span className="bdot bdot-g"></span>
                    </div>
                    <div className="browser-url mono">{active.url.replace('https://', '')}</div>
                  </div>
                  <div className="browser-viewport">
                    <img src={active.screenshot} alt={`${active.name} screenshot`} className="browser-ss" />
                    <div className="browser-hover-overlay">
                      <ExternalLink size={24} />
                      <span className="mono">OPEN SITE</span>
                    </div>
                  </div>
                </a>

                <div className="detail-header">
                  <div>
                    <span className="detail-role mono" style={{ color: active.accent }}>{active.role}</span>
                    <h3 className="detail-title">{active.name}</h3>
                  </div>
                </div>
                
                <p className="detail-desc">{active.desc}</p>
                
                <div className="detail-bottom-row">
                  <div className="detail-stack">
                    <span className="stack-label mono">STACK //</span>
                    <div className="stack-tags">
                      {active.stack.map((tech, i) => (
                        <span key={i} className="stack-tag" style={{ borderColor: `${active.accent}40`, color: active.accent }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="detail-status">
                    <div className="status-dot" style={{ background: active.accent }}></div>
                    <span className="mono status-text">LIVE</span>
                  </div>
                </div>
              </MDiv>
            </AnimatePresence>

            {/* Mobile site navigator */}
            <div className="mobile-site-nav">
              <button 
                className="site-nav-btn" 
                onClick={() => setActiveIdx(i => i > 0 ? i - 1 : webSystems.length - 1)}
              >
                <ChevronLeft size={20} />
              </button>
              <span className="site-nav-counter mono">
                {activeIdx + 1} / {webSystems.length}
              </span>
              <button 
                className="site-nav-btn"
                onClick={() => setActiveIdx(i => i < webSystems.length - 1 ? i + 1 : 0)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </MDiv>

      </div>
    </section>
  );
};

export default DeployedSystems;
