import React from 'react';
import MDiv from './MDiv';
import { Zap, Download, MapPin, Clock, Rocket } from 'lucide-react';
import './Timeline.css';

const experiences = [
  {
    role: "Digital Marketing Director — AI & Technology Lead",
    company: "RadioVision, Inc.",
    location: "Dallas, TX",
    date: "02/2022 – Present",
    points: [
      "AI Integration: Built and launched an AI-powered voice assistant (ChatGPT API + ElevenLabs) that answers queries and routes calls automatically, scaling inbound handling.",
      "Automation Pipelines: Architected automated lifecycle workflows (Zapier, Make, n8n) connecting CRM databases (DriveCentric, CDK Global), analytics tools, and AI services to automate data handling.",
      "Data & Tracking: Rebuilt campaign measurement using custom JavaScript tracking, modeled data, and offline signals when privacy changes disrupted digital attribution.",
      "Growth Strategy: Managed strategy, budget allocation, and vendor accountability across SEO, Paid Search, and Social. Directed a digital overhaul for Ted B. Lyon & Associates, doubling organic traffic. Drove a 25% increase in qualified leads in 90 days.",
      "Team Enablement: Led hands-on training for cross-functional teams on responsible use of AI tools including ChatGPT, Claude, Gemini, Midjourney, and RunwayML.",
      "Marketing Operations: Evaluated external vendors, monitored campaign KPIs, and prioritized marketing investments based on performance data, lead quality, and ROI.",
      "Funnel Development: Built and optimized lead-generation funnels across client websites, integrating forms, tracking, CRM workflows, and campaign reporting.",
      "Creative + Technical Bridge: Partnered across creative, production, leadership, and technical teams to turn campaign ideas into measurable acquisition systems."
    ]
  },
  {
    role: "Senior Partner / Director of Digital Marketing",
    company: "PollaroMedia.",
    location: "Dallas, TX",
    date: "05/2006 – 01/2017",
    points: [
      "Enterprise Scale: Managed a $15M/year account (Choctaw Nation) for 10 years, overseeing campaign strategy, digital advertising, video production, and analytics.",
      "Revenue Optimization: Executed rigorous channel optimizations and A/B testing that drove a 25% ROI increase and up to 35% overall top-line revenue growth.",
      "Consulting: Advised enterprise brands (Baylor Scott & White, Texas Land & Cattle) on technology strategy, audience segmentation, website systems, and building executive reporting dashboards."
    ]
  },
  {
    role: "Co-Owner / Technology & Creative Lead",
    company: "A Nomadic Love",
    location: "Dallas, TX",
    date: "01/2016 – 08/2025",
    points: [
      "Hands-On Execution: Built the brand from scratch, implementing core performance marketing strategies spanning Meta ads, Google Search, web design, and SEO, driving a 30% increase in customer inquiries over 24 months.",
      "Brand Development: Built the visual identity, positioning, web presence, and customer experience for a cinematic destination wedding photography brand.",
      "Content & Conversion: Created ad campaigns, landing pages, social content, and SEO-driven web systems designed to attract high-intent couples and convert inquiries.",
      "Client Experience: Developed a high-touch client communication process, guiding couples through planning, creative direction, timelines, lighting, location strategy, and visual storytelling."
    ]
  }
];

const dynastyDealer = {
  role: "Creator / Product Builder",
  project: "Dynasty Dealer",
  location: "Dallas, TX",
  date: "01/2025 – Present",
  links: { web: "dynastydealer.com", ios: "App Store", android: "Google Play" },
  summary: "Independently conceived, designed, and shipped a full-stack fantasy sports platform using AI-assisted development tools (Cursor, Claude) to rapidly learn the stack and accelerate implementation. Deeply integrated with the Sleeper API.",
  points: [
    "Growth & Engagement: Acquired 9,400+ active users generating 358,000+ interactions in 90 days with $0 in ad spend (45% of traffic driven organically). Achieved a 16.5-minute average session duration (iOS users average 25+ minutes).",
    "Scale & Logic: Platform drives 16,400+ trade calculations, analyzes 42,500+ assets, and processes 8,100+ AI trade finder requests per quarter.",
    "Product Scope: Designed a 37-screen mobile app and 63 web components. Features include an AI-driven Fair Trade Finder, real-time trade database, and a community-powered Elo ranking system.",
    "Tech Stack: React Native (Expo SDK 54), React 18, Node.js/Express, PostgreSQL (Supabase), TiDB, Redis, Vercel, EAS Build, Firebase Analytics, GitHub Actions."
  ]
};

const highlights = [
  "Built multiple ventures from zero, beginning with a production company at age 18, later expanding into digital marketing, destination weddings, AI systems, and software products.",
  "Managed a $15M/year marketing ecosystem for the Choctaw Nation for 10 years, overseeing digital advertising, production, analytics, and performance optimization.",
  "Created Dynasty Dealer, a full-stack fantasy football platform live on iOS, Android, and web, reaching 9,400+ users and 358,000+ interactions in 90 days with zero ad spend.",
  "Built applied AI systems including voice assistants, CRM automations, custom tracking workflows, and AI-assisted product development pipelines.",
  "Led growth strategy across paid media, SEO, web systems, creative production, analytics, and customer acquisition for clients across automotive, legal, healthcare, hospitality, and consumer brands."
];

const skills = {
  "AI & Automation": "ChatGPT/OpenAI API, Claude, Gemini, Cursor, xAI/Grok, Ollama, Openclaw, Claude Code, ElevenLabs, Midjourney, RunwayML, Heygen, Suno, Zapier, Make, n8n, AI-assisted development, prompt engineering, workflow automation",
  "Product & Technical Execution": "React, React Native/Expo, Node.js, JavaScript, REST APIs, PostgreSQL/Supabase, TiDB, Redis, Vercel, EAS Build, Firebase Analytics, GitHub Actions, API integrations, mobile app deployment",
  "Growth & Acquisition": "Meta Ads, Google Ads/PPC, SEO, CRO, A/B testing, CPA/CPL optimization, lead-generation funnels, organic growth, customer acquisition strategy",
  "Analytics & Attribution": "GA4, Google Search Console, Agency Analytics, SEMrush, custom JavaScript tracking, modeled data workarounds, KPI dashboards, attribution modeling, CRM feedback loops",
  "CRM & Lifecycle Systems": "DriveCentric, ELeadCRM, CDK Global, customer journey mapping, audience segmentation, lead reactivation, CRM data integrity, lifecycle automation",
  "Creative & Production": "Adobe Creative Suite, video production, campaign concepting, brand strategy, content strategy, social media creative, landing page strategy"
};

const Timeline = () => {
  return (
    <section className="timeline-section" id="experience">
      <div className="container">
        <MDiv 
          className="timeline-top"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <span className="mono accent-amber">// PROFESSIONAL HISTORY</span>
            <h2 className="section-title">EXPERIENCE LOG</h2>
          </div>
          <a 
            href="/media/Elliot_Pollaro_Resume_2026.pdf" 
            download 
            className="resume-download mono"
          >
            <Download size={16} />
            DOWNLOAD RESUME
          </a>
        </MDiv>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <MDiv 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-node">
                <div className="node-core"></div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3 className="role">{exp.role}</h3>
                  <span className="mono date">{exp.date}</span>
                </div>
                <div className="company-row">
                  <span className="company mono"> <Zap size={14} className="inline-icon" /> {exp.company}</span>
                  <span className="company-meta mono"><MapPin size={12} /> {exp.location}</span>
                </div>
                <ul className="points-list">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </MDiv>
          ))}
        </div>

        {/* Independent Technical Projects */}
        <MDiv
          className="indie-projects-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="mono accent-amber">// INDEPENDENT TECHNICAL PROJECTS</span>
          <div className="indie-project glass-panel">
            <div className="timeline-header">
              <h3 className="role"><Rocket size={18} className="inline-icon" /> {dynastyDealer.project} — {dynastyDealer.role}</h3>
              <span className="mono date">{dynastyDealer.date}</span>
            </div>
            <div className="company-row">
              <span className="company-meta mono"><MapPin size={12} /> {dynastyDealer.location}</span>
              <span className="company-meta mono">dynastydealer.com · App Store · Google Play</span>
            </div>
            <p className="indie-summary">{dynastyDealer.summary}</p>
            <ul className="points-list">
              {dynastyDealer.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </MDiv>

        {/* Selected Career Highlights */}
        <MDiv
          className="highlights-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="skills-title mono">SELECTED CAREER HIGHLIGHTS</h3>
          <ul className="highlights-list">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </MDiv>

        {/* Technical Skills Summary */}
        <MDiv
          className="skills-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="skills-title mono">TECHNICAL SKILLS</h3>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, list], i) => (
              <div key={i} className="skill-group">
                <span className="skill-cat mono accent-amber">{category}</span>
                <span className="skill-list">{list}</span>
              </div>
            ))}
          </div>
        </MDiv>

      </div>
    </section>
  );
};

export default Timeline;
