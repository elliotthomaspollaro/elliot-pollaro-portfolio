import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Target, TrendingUp, Brain, Cpu, Mic, 
  Image, Video, Code2, Workflow, BarChart3, Zap,
  DollarSign, Users, Eye, MousePointerClick
} from 'lucide-react';
import './Arsenal.css';

const aiTools = [
  { name: 'Grok', category: 'xAI', icon: Brain, desc: 'Reasoning & analysis' },
  { name: 'ChatGPT', category: 'OpenAI', icon: Cpu, desc: 'Strategy & automation' },
  { name: 'Claude', category: 'Anthropic', icon: Code2, desc: 'Code & architecture' },
  { name: 'Gemini', category: 'Google', icon: Brain, desc: 'Multimodal reasoning' },
  { name: 'Antigravity', category: 'Google', icon: Code2, desc: 'Agentic AI coding' },
  { name: 'Midjourney', category: 'Image Gen', icon: Image, desc: 'Visual production' },
  { name: 'Veo 3.1', category: 'Google', icon: Video, desc: 'AI video generation' },
  { name: 'ElevenLabs', category: 'Voice AI', icon: Mic, desc: 'Voice synthesis' },
  { name: 'Runway', category: 'Video Gen', icon: Video, desc: 'Motion & VFX' },
  { name: 'Cursor', category: 'AI IDE', icon: Code2, desc: 'AI-paired development' },
  { name: 'Suno', category: 'Audio Gen', icon: Mic, desc: 'Music & soundscapes' },
  { name: 'Openclaw', category: 'AI Agent', icon: Workflow, desc: 'Autonomous agents' },
];

const marketingStats = [
  { value: '$15M+', label: 'Annual Ad Spend Managed', icon: DollarSign },
  { value: '25%', label: 'Lead Increase in 90 Days', icon: TrendingUp },
  { value: '35%', label: 'Revenue Growth Driven', icon: BarChart3 },
  { value: '18+', label: 'Years in Paid Media', icon: Eye },
];

const channels = [
  { name: 'Meta Ads', desc: 'Full-funnel Facebook & Instagram campaigns with custom audience architecture and lookalike modeling.' },
  { name: 'Google Ads', desc: 'Search, display, and Performance Max campaigns with automated bid strategies and conversion tracking.' },
  { name: 'Connected TV', desc: 'OTT/CTV programmatic buys with hyper-local targeting and full-funnel attribution via Airstrike.' },
  { name: 'Programmatic', desc: 'Competitive conquesting, retargeting, and geo-fenced display across premium inventory networks.' },
];

const Arsenal = () => {
  return (
    <section className="arsenal-section" id="arsenal">
      <div className="container">

        <motion.div
          className="arsenal-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// CAPABILITIES & INTELLIGENCE STACK</span>
          <h2 className="section-title">THE ARSENAL</h2>
        </motion.div>

        {/* ── AI TOOLS GRID ── */}
        <motion.div
          className="arsenal-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="block-title">
            <Brain size={18} className="block-icon" />
            <span>AI Tools I Ship With</span>
          </h3>
          <div className="tools-grid">
            {aiTools.map((tool, i) => (
              <motion.div
                key={i}
                className="tool-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="tool-icon-wrap">
                  <tool.icon size={20} />
                </div>
                <div className="tool-info">
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-category mono">{tool.category}</span>
                </div>
                <span className="tool-desc">{tool.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── MARKETING METRICS ── */}
        <motion.div
          className="arsenal-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="block-title">
            <Megaphone size={18} className="block-icon" />
            <span>Paid Media & Performance Marketing</span>
          </h3>

          <div className="stats-row">
            {marketingStats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <stat.icon size={18} className="stat-icon" />
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label mono">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="channels-grid">
            {channels.map((ch, i) => (
              <motion.div
                key={i}
                className="channel-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="channel-name">{ch.name}</h4>
                <p className="channel-desc">{ch.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="arsenal-callout">
            <Zap size={16} />
            <span>
              When Apple's ATT update broke ad tracking in 2021, I led the pivot to offline conversion modeling — 
              preserving campaign performance while competitors lost visibility.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Arsenal;
