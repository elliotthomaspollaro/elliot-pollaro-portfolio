import React, { useState, useRef } from 'react';
import MDiv from './MDiv';
import { Play } from 'lucide-react';
import './VideoShowcase.css';

const videos = [
  { youtube: "x1EBBVGsKqQ", title: "GROK_SUPERBOWL_CAMPAIGN", meta: "Super Bowl Commercial" },
  { src: "/media/list-web.mp4", poster: "/media/poster-list.jpg", title: "LIST_ARCHITECTURE_RENDER", meta: "Web Optimized / Demo" },
  { src: "/media/more-web.mp4", poster: "/media/poster-more.jpg", title: "MORE_AUTOMATION_RENDER", meta: "Web Optimized / Demo" },
  { src: "/media/Super_funny_comedy_202508131804_8dnfg.mp4", poster: "/media/poster-comedy.jpg", title: "COMEDY_GENERATION_RENDER", meta: "Luma Runtime" },
  { src: "/media/A_serene_asmr_202507151202_aw7yr.mp4", poster: "/media/poster-asmr.jpg", title: "ASMR_ENVIRONMENT_RENDER", meta: "Luma Runtime" }
];

const VideoShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const selectVideo = (index) => {
    setCurrentIndex(index);
    setPlaying(false);
  };

  const startPlaying = () => {
    setPlaying(true);
    // For native videos, autoplay after state update
    const vid = videos[currentIndex];
    if (!vid.youtube) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 50);
    }
  };

  const current = videos[currentIndex];

  // Get poster image: YouTube thumbnail or extracted frame for local videos
  const posterSrc = current.youtube 
    ? `https://img.youtube.com/vi/${current.youtube}/maxresdefault.jpg`
    : current.poster || null;

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
            {!playing ? (
              /* Poster with gray play button — same for all videos */
              <div className="video-poster-wrap" onClick={startPlaying}>
                {posterSrc ? (
                  <img 
                    src={posterSrc}
                    alt={current.title}
                    className="video-poster-img"
                  />
                ) : (
                  <div className="video-poster-dark"></div>
                )}
                <div className="video-play-overlay">
                  <div className="video-play-btn">
                    <Play size={36} />
                  </div>
                  <span className="video-poster-label mono">{current.title}</span>
                </div>
              </div>
            ) : current.youtube ? (
              <iframe
                className="cinematic-video"
                src={`https://www.youtube.com/embed/${current.youtube}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
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
                autoPlay
                playsInline
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
