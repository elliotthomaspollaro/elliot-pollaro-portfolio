import React from 'react';
import MDiv from './MDiv';
import './Manifesto.css';

const textItems = [
  "I ship software, run ads, and build with AI.",
  "Full-stack engineer. Performance marketer. AI-native creative.",
  "18 years — from $15M ad accounts to production React codebases to generative video pipelines.",
  "Most people specialize. I operate across every layer of the stack — and I'm dangerous at all of them.",
  "I don't pitch decks about AI. I deploy it."
];

const Manifesto = () => {
  return (
    <section className="manifesto-section" id="manifesto">
      <div className="sticky-container">
        <div className="manifesto-content">
          <div className="manifesto-focus-text">
            {textItems.map((text, i) => (
              <MDiv 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <p>{text}</p>
              </MDiv>
            ))}
          </div>

          <MDiv
            className="manifesto-coda"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <p>Douglas Adams wrote that the hardest problem isn't finding the answer—it's formulating the right question. To ask the right questions, humanity must expand both biological and digital consciousness.</p>
            <p className="manifesto-coda-final">We need a much bigger computer. I want to help build it.</p>
          </MDiv>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
