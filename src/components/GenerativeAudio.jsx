import React, { useState, useRef, useEffect } from 'react';
import MDiv from './MDiv';
import { Play, Pause, Disc3, Radio } from 'lucide-react';
import './GenerativeAudio.css';

const audioTracks = [
  { title: "Sun-Flecked Chorus", file: "/audio/Sun-Flecked Chorus.mp3" },
  { title: "IVER Test Sequence", file: "/audio/Iver test.mp3" },
  { title: "I'll Find You In Autumn", file: "/audio/Ill find you in autumn.mp3" },
  { title: "Neural Cover A", file: "/audio/FDownload.app-1860562924861544-(320kbps) (Cover) (3).mp3" },
  { title: "Neural Cover B", file: "/audio/FDownload.app-1860562924861544-(320kbps) (Cover) (2).mp3" }
];

const GenerativeAudio = () => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // Real-time Audio Visualizer Refs
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);

  const initAudioEngine = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048; // Huge FFT for smooth fluid oscilloscope curve
      sourceRef.current = audioCtxRef.current.createMediaElementSource(audioRef.current);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioCtxRef.current.destination);
    }
  };

  const currentVolumeRef = useRef(0);

  const drawFluidWave = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Responsive dynamic high-DPI scaling
    if (canvas.width !== canvas.offsetWidth) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    
    const width = canvas.width;
    const height = canvas.height;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    // Switch to FrequencyData to get absolute volume energy instead of noisy time domain
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Calculate average volume to drive the mathematical amplitude
    let sum = 0;
    for(let i=0; i<dataArray.length; i++) {
        sum += dataArray[i];
    }
    const rawVolume = (sum / dataArray.length) / 255.0; // 0.0 to 1.0
    
    // Lerp (smooth) the volume so the waves don't jitter, they pulse fluidsly
    currentVolumeRef.current += (rawVolume - currentVolumeRef.current) * 0.15;
    // ensure volume is at least 0.05 so the waves idle slightly even when silent
    const vol = Math.max(0.05, currentVolumeRef.current); 

    const time = performance.now() / 1000;

    // Siri/OpenAI Style overlapping smooth generative waves
    const waves = [
      { color: 'rgba(0, 240, 255, 1)',   speed: 2.0,  freq: 0.015, amp: 1.0, width: 3, blur: 15 }, // Rapid Cyan Core
      { color: 'rgba(255, 176, 0, 0.8)', speed: -1.5, freq: 0.010, amp: 0.8, width: 4, blur: 20 }, // Reverse Amber
      { color: 'rgba(255, 255, 255, 0.9)', speed: 3.0, freq: 0.025, amp: 0.5, width: 2, blur: 10 }, // Plasma Center Wire
      { color: 'rgba(0, 240, 255, 0.2)', speed: 1.0,  freq: 0.005, amp: 1.2, width: 10, blur: 40}  // Thick ambient glow
    ];

    waves.forEach(w => {
      ctx.beginPath();
      ctx.strokeStyle = w.color;
      ctx.lineWidth = w.width;
      ctx.shadowBlur = w.blur;
      ctx.shadowColor = w.color;
      
      // Draw smooth sine curve across canvas width
      for(let x = 0; x <= width; x += 5) {
         const normalizedX = x / width;
         // Bell curve envelope so the waves taper to 0 at the left & right edges
         const envelope = Math.sin(normalizedX * Math.PI); 
         
         // Generate smooth math-based sine wave offset by volume and time
         const yOffset = Math.sin(x * w.freq + time * w.speed) * (vol * (height/2.5) * w.amp * envelope);
         const y = (height / 2) + yOffset;
         
         if(x === 0) ctx.moveTo(x, y);
         else ctx.lineTo(x, y);
      }
      ctx.stroke();
    });

    animationRef.current = requestAnimationFrame(drawFluidWave);
  };

  useEffect(() => {
    if (isPlaying) {
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      animationRef.current = requestAnimationFrame(drawFluidWave);
    } else {
      cancelAnimationFrame(animationRef.current);
    }
    return () => cancelAnimationFrame(animationRef.current);
  }, [isPlaying]);

  const handlePlayToggle = (index, file) => {
    initAudioEngine();
    if (activeTrack === index) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setActiveTrack(index);
      if (audioRef.current) {
        audioRef.current.src = file;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.error("Audio playback error:", err));
      }
    }
  };

  return (
    <section className="audio-section" id="audio">
      <div className="container">
        
        <MDiv 
          className="deployments-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="mono accent-amber">// GENERATIVE SOUNDSCAPES</span>
          <h2 className="section-title">AI GENERATED MUSIC</h2>
        </MDiv>

        <MDiv 
          className="oscilloscope-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Entire Background is the Fluid Canvas */}
          <canvas ref={canvasRef} className="fluid-canvas"></canvas>
          
          <div className="hud-overlay mono">
            <Radio size={14} className={isPlaying ? "icon-pulse active" : "icon-pulse"} /> 
            [SYS_AUDIO_CORE] // {isPlaying ? 'FLUID_DYNAMICS_RENDER' : 'AWAITING_INPUT'}
          </div>

          {/* Floating Glass Control Dock at the Bottom */}
          <div className="glass-control-deck">
            <div className="now-playing-hud">
              <button 
                className="master-play-btn"
                onClick={() => {
                   if(activeTrack === null) handlePlayToggle(0, audioTracks[0].file);
                   else handlePlayToggle(activeTrack, audioTracks[activeTrack].file);
                }}
              >
                {isPlaying ? <Pause size={24} color="black"/> : <Play size={24} color="black"/>}
              </button>
              <div className="master-track-info">
                <span className="mono track-lbl">NOW STREAMING</span>
                <span className="track-huge-title">
                  {activeTrack !== null ? audioTracks[activeTrack].title : "SYSTEM SILENT"}
                </span>
              </div>
            </div>

            <div className="track-pill-grid">
              {audioTracks.map((track, idx) => (
                <div 
                  key={idx} 
                  className={`track-pill ${activeTrack === idx ? 'playing' : ''}`}
                  onClick={() => handlePlayToggle(idx, track.file)}
                >
                  {activeTrack === idx && isPlaying ? <Disc3 size={14} className="spin" /> : <Play size={14} />}
                  <span className="mono pill-text">{track.title}</span>
                </div>
              ))}
            </div>
          </div>

          <audio ref={audioRef} onEnded={() => setIsPlaying(false)} crossOrigin="anonymous" />
        </MDiv>
      </div>
    </section>
  );
};

export default GenerativeAudio;
