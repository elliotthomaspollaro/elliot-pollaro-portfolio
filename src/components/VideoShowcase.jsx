import React, { useState, useRef } from 'react';
import MDiv from './MDiv';
import { Play } from 'lucide-react';
import './VideoShowcase.css';

const videos = [
  { youtube: "x1EBBVGsKqQ", title: "GROK_SUPERBOWL_CAMPAIGN", meta: "Super Bowl Commercial" },
  { src: "/media/list-web.mp4", title: "LIST_ARCHITECTURE_RENDER", meta: "Web Optimized / Demo" },
  { src: "/media/more-web.mp4", title: "MORE_AUTOMATION_RENDER", meta: "Web Optimized / Demo" },
  { src: "/media/Super_funny_comedy_202508131804_8dnfg.mp4", title: "COMEDY_GENERATION_RENDER", meta: "Luma Runtime" },
  { src: "/media/A_serene_asmr_202507151202_aw7yr.mp4", title: "ASMR_ENVIRONMENT_RENDER", meta: "Luma Runtime" }
];

const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [youtubeStarted, setYoutubeStarted] = useState(false);
  const videoRef = useRef(null);

  const selectVideo = (index) => {
    setCurrentIndex(index);
    setYoutubeStarted(false);
    const vid = videos[index];
    if (!vid.youtube && videoRef.current) {
      videoRef.current.src = vid.src;
      videoRef.current.play();
    }
  };

  const current = videos[currentIndex];

  return (
    <section className="video-section cinematic-dark" id="showcase">
      <div className="container">
        <MDiv 
          className="deployments-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// MOTION GRAPHICS & GENERATIVE</span>
          <h2 className="section-title" style={{color: 'var(--text-main)'}}>VIDEO EXPERIENCES</h2>
        </MDiv>

        <div className="video-layout">
          <div className="main-player-block glass-panel">
            {current.youtube && !youtubeStarted ? (
              <div className="video-poster-wrap" onClick={() => setYoutubeStarted(true)}>
                <img 
                  src={`https://img.youtube.com/vi/${current.youtube}/maxresdefault.jpg`}
                  alt={current.title}
                  className="video-poster-img"
                />
                <div className="video-play-overlay">
                  <div className="video-play-btn">
                    <Play size={36} />
                  </div>
                </div>
              </div>
            ) : current.youtube && youtubeStarted ? (
              <iframe
                className="cinematic-video"
                src={`https://www.youtube.com/embed/${current.youtube}?autoplay=1&rel=0&modestbranding=1`}
                title={current.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video 
                ref={videoRef}
                src={current.src} 
                controls 
                preload="metadata"
                className="cinematic-video"
                autoPlay={false}
              ></video>
            )}
          </div>

          <div className="video-playlist">
            <h3 className="mono playlist-header">AVAILABLE STREAMS</h3>
            <div className="playlist-tracks">
              {videos.map((vid, idx) => (
                <div 
                  key={idx}
                  className={`playlist-item ${currentIndex === idx ? 'active' : ''}`}
                  onClick={() => selectVideo(idx)}
                >
                  <div className="play-icon-box">
                    <Play size={16} className="play-icon" />
                  </div>
                  <div className="track-info">
                    <span className="mono track-title-text">{vid.title}</span>
                    <span className="mono track-meta-text">{vid.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
