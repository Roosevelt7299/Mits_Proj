import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ── Kumari Images ──
import heroBanner    from './images/Kumari_/Kumari main screen.png';
import splashImg     from './images/Kumari_/kumari splash 2.png';
import bgRefImg      from './images/Kumari_/Bg_ref.png';
import nilaImg       from './images/Kumari_/Nila 3.png';
import kathirImg     from './images/Kumari_/Kathir 3.png';
import charSheet1    from './images/Kumari_/2.png';
import charSheet2    from './images/Kumari_/1.png';
import worldImg1     from './images/Kumari_/city bg1.png';
import worldImg2     from './images/Kumari_/Clouds scenery final 3.png';
import worldImg3     from './images/Kumari_/Half tower - cliff zoom out shot 4.png';
import worldImg4     from './images/Kumari_/Horse reunited 2.png';
import worldImg5     from './images/Kumari_/Horse statue bg 1.png';
import worldImg6     from './images/Kumari_/Kathir looks down 1.png';
import worldImg7     from './images/Kumari_/Screenshot (410).png';
import worldImg8     from './images/Kumari_/Tower bg establishing.png';
import processImg    from './images/Kumari_/Skills final png.png';
import bts1          from './images/Kumari_/Abi announcement 1.png';
import bts2          from './images/Kumari_/Sid announcement 1.png';
import bts3          from './images/Kumari_/Voice acting post 1.png';
import bts4          from './images/Kumari_/Voice acting post 2.png';
import drukFont      from './fonts/Druk-Bold-Trial.otf';

const GALLERY_IMAGES = [
  { src: splashImg, alt: "Kumari Splash" },
  { src: nilaImg, alt: "Nila Character Design" },
  { src: kathirImg, alt: "Kathir Character Design" },
  { src: charSheet1, alt: "Voice Acting Post — Nila" },
  { src: charSheet2, alt: "Voice Acting Post — Kathir" },
  { src: worldImg6, alt: "Kathir Looks Down" },
  { src: worldImg3, alt: "Half Tower Cliff" },
  { src: worldImg7, alt: "Screenshot 410" },
  { src: worldImg5, alt: "Horse Statue BG" },
  { src: worldImg4, alt: "Horse Reunited" },
  { src: worldImg2, alt: "Clouds Scenery" },
  { src: worldImg8, alt: "Tower BG" },
  { src: processImg, alt: "Animation Process Flow" },
  { src: bts1, alt: "Abi — Sound Designer" },
  { src: bts2, alt: "Sid — Music Director" },
  { src: bts3, alt: "Nila VA — Behind the Scenes" },
  { src: bts4, alt: "Kathir VA — Behind the Scenes" }
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Caveat:wght@700&family=Barlow:wght@300;400;500&display=swap');

  @font-face {
    font-family: 'Druk Condensed';
    src: url('${drukFont}') format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

  .kp-root {
    position: relative;
    isolation: isolate;
    background-color: #1a1a1a;
    color: #e0d6c8;
    font-family: 'Barlow', sans-serif;
    min-height: 100vh;
    min-height: 100dvh;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .kp-root::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image: var(--kumari-bg);
    background-repeat: repeat-y;
    background-position: top center;
    background-size: 100% auto;
    pointer-events: none;
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #111; }
  ::-webkit-scrollbar-thumb { background: #d4a017; border-radius: 2px; }

  /* ── NAV ── */
  .kp-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(18px + env(safe-area-inset-top, 0px)) calc(40px + env(safe-area-inset-right, 0px)) 18px calc(40px + env(safe-area-inset-left, 0px));
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%);
    will-change: transform;
  }
  .kp-back {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
    border: 1.5px solid rgba(255,255,255,0.25);
    color: #fff;
    font-size: 29px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    padding-bottom: 2px;
  }
  @media (hover: hover) { .kp-back:hover { background: #d4a017; border-color: #d4a017; color: #111; } }
  .kp-nav-links { display: flex; gap: 28px; font-family: 'Barlow Condensed', sans-serif; font-size: 17px; letter-spacing: 2px; }
  .kp-nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; transition: color 0.2s; }
  .kp-nav-links a:hover { color: #d4a017; }

  /* ── HERO ── */
  .kp-hero {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    min-height: 500px;
    overflow: hidden;
  }
  .kp-hero-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .kp-hero-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.3) 0%,
      rgba(0,0,0,0.1) 40%,
      rgba(0,0,0,0.7) 80%,
      rgba(17,17,17,1) 100%
    );
  }
  .kp-hero-content {
    position: absolute;
    bottom: 80px; left: 60px;
    z-index: 10;
  }
  .kp-hero-tag {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; letter-spacing: 4px;
    color: #d4a017;
    background: rgba(212,160,23,0.1);
    border: 1px solid rgba(212,160,23,0.3);
    display: inline-block;
    padding: 5px 14px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .kp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(72px, 13vw, 156px);
    line-height: 0.9;
    color: #fff;
    letter-spacing: 2px;
    margin-bottom: 8px;
    text-shadow: 0 4px 30px rgba(0,0,0,0.8);
  }
  .kp-hero-subtitle {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(26px, 4.5vw, 52px);
    color: #d4a017;
    letter-spacing: 6px;
    margin-bottom: 32px;
  }
  .kp-play-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: #d4a017;
    color: #111;
    border: none;
    padding: 14px 36px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 50px;
    transition: all 0.25s;
    box-shadow: 0 4px 20px rgba(212,160,23,0.4);
  }
  @media (hover: hover) {
    .kp-play-btn:hover {
      background: #f0c030;
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(212,160,23,0.5);
    }
  }

  /* ── SECTIONS ── */
  .kp-section { padding: 72px 60px; max-width: 1100px; margin: 0 auto; }
  .kp-section-wrap { position: relative; z-index: 1; width: 100%; background: transparent; }
  .kp-section-full { padding: 80px 0; }

  /* ── DECORATIVE HEADING ── */
  .kp-heading-wrap {
    position: relative;
    text-align: center;
    margin-bottom: 48px;
    padding: 10px 0;
  }
  .kp-heading-bg {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(67px, 10.4vw, 130px);
    color: rgba(255,255,255,0.04);
    letter-spacing: 6px;
    line-height: 1;
    user-select: none;
  }
  .kp-heading-fg {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Caveat', cursive;
    font-size: clamp(41px, 6.5vw, 72px);
    color: #d4a017;
    white-space: nowrap;
    text-shadow: 0 2px 16px rgba(212,160,23,0.25);
  }

  /* ── PARAGRAPH ── */
  .kp-para {
    font-size: 20px;
    line-height: 1.85;
    color: rgba(255,255,255,0.65);
    max-width: 780px;
    margin: 0 auto 40px;
    text-align: center;
  }

  /* ── WIDE IMAGE ── */
  .kp-wide-img {
    width: 100%;
    border-radius: 8px;
    display: block;
    margin-bottom: 32px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  }

  /* ── CHARACTERS ── */
  .kp-chars-grid {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-bottom: 40px;
  }
  .kp-char-card {
    flex: 1;
    max-width: 380px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: #1a1a1a;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5);
    transition: transform 0.3s;
  }
  @media (hover: hover) { .kp-char-card:hover { transform: translateY(-6px); } }
  .kp-char-card img {
    width: 100%;
    display: block;
    transition: transform 0.4s;
  }

  /* ── CHARACTER SHEETS ── */
  .kp-sheets-col {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0;
  }
  .kp-sheet-img {
    width: 100%;
    border-radius: 8px;
    display: block;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    transition: transform 0.3s;
    cursor: pointer;
  }
  @media (hover: hover) { .kp-sheet-img:hover { transform: scale(1.01); } }

  /* ── WORLD GRID ── */
  .kp-world-section { display: flex; flex-direction: column; gap: 8px; margin-bottom: 40px; }
  .kp-world-row { display: grid; gap: 8px; }
  .kp-world-row-1 { grid-template-columns: 2fr 1fr; }
  .kp-world-row-2 { grid-template-columns: 1fr 1.6fr 1fr; }
  .kp-world-row-3 { grid-template-columns: 2fr 1fr; }
  .kp-world-stack { display: flex; flex-direction: column; gap: 8px; }
  .kp-world-img {
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 6px;
    display: block;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  @media (hover: hover) {
    .kp-world-img:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 24px rgba(0,0,0,0.6);
      position: relative;
      z-index: 2;
    }
  }
  .kp-world-r1-big  { height: 280px; }
  .kp-world-r1-sm   { flex: 1; min-height: 0; }
  .kp-world-r2-img  { height: 220px; }
  .kp-world-r3-big  { height: 200px; }
  .kp-world-r3-sm   { height: 200px; }

  /* ── PROCESS ICONS ── */
  .kp-process-img-wrap {
    text-align: center;
    margin-bottom: 40px;
  }
  .kp-process-img-wrap img {
    max-width: 700px;
    width: 90%;
    filter: brightness(1.1);
  }

  /* ── BTS ── */
  .kp-bts-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .kp-bts-card {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    background: #1a1a1a;
    aspect-ratio: 1 / 1;
  }
  .kp-bts-card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s;
  }
  @media (hover: hover) { .kp-bts-card:hover img { transform: scale(1.05); } }
  .kp-bts-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
  }

  /* ── DIVIDER ── */
  .kp-divider {
    width: 60px; height: 2px;
    background: #d4a017;
    margin: 0 auto 40px;
    opacity: 0.6;
  }

  /* ── FOOTER ── */
  .kp-footer {
    position: relative;
    z-index: 1;
    padding: calc(32px + env(safe-area-inset-bottom, 0px)) 60px 32px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0a0a0a;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.35);
  }
  .kp-footer-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 31px;
    color: #d4a017;
    letter-spacing: 3px;
  }

  /* ── RESPONSIVE: TABLET (≤ 768px) ── */
  @media (max-width: 768px) {
    .kp-nav { padding: 14px 20px; }
    .kp-nav-links { gap: 16px; font-size: 14px; }
    .kp-back { width: 36px; height: 36px; font-size: 23px; }

    .kp-hero { height: 56vw; min-height: 240px; }
    .kp-hero-content { padding: 0 20px 24px; }
    .kp-play-btn { font-size: 16px; padding: 10px 20px; gap: 8px; }

    .kp-section { padding: 48px 24px; }

    .kp-chars-grid { flex-direction: column; align-items: center; gap: 16px; }
    .kp-char-card { max-width: 320px; width: 100%; }

    .kp-world-row-1 { grid-template-columns: 1fr; }
    .kp-world-stack { flex-direction: row; height: auto !important; }
    .kp-world-r1-big { height: 220px; }
    .kp-world-r1-sm { height: 120px; flex: 1; }
    .kp-world-row-2 { grid-template-columns: 1fr 1fr; }
    .kp-world-r2-img { height: 160px; }
    .kp-world-row-3 { grid-template-columns: 1fr 1fr; }
    .kp-world-r3-big, .kp-world-r3-sm { height: 150px; }

    .kp-bts-grid { grid-template-columns: repeat(2, 1fr); }

    .kp-process-img-wrap img { width: 100%; }

    .kp-sheets-col { gap: 12px; }

    .kp-footer { padding: 32px 20px; gap: 8px; font-size: 14px; }
    .kp-footer-logo { font-size: 29px; }
  }

  /* ── RESPONSIVE: PHONE (≤ 480px) ── */
  @media (max-width: 480px) {
    .kp-hero { height: 70vw; min-height: 200px; }

    .kp-section { padding: 36px 16px; }

    .kp-world-row-1 { grid-template-columns: 1fr; }
    .kp-world-stack { flex-direction: column; height: auto !important; }
    .kp-world-r1-big { height: 180px; }
    .kp-world-r1-sm { height: 140px; flex: none; }
    .kp-world-row-2 { grid-template-columns: 1fr; }
    .kp-world-r2-img { height: 180px; }
    .kp-world-row-3 { grid-template-columns: 1fr; }
    .kp-world-r3-big, .kp-world-r3-sm { height: 180px; }

    .kp-bts-grid { grid-template-columns: 1fr 1fr; gap: 8px; }

    .kp-para { font-size: 18px; }
    .kp-nav-links { display: none; }

    .kp-footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px 16px calc(24px + env(safe-area-inset-bottom, 0px)); }
  }

  /* iOS standalone / PWA fix */
  @supports (-webkit-touch-callout: none) {
    .kp-hero { height: -webkit-fill-available; }
    .kp-root { min-height: -webkit-fill-available; }
  }

  /* ── HOVER EXPAND AND LIGHTBOX ── */
  .kp-expand-wrapper {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .kp-expand-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 5;
    width: 26px;
    height: 26px;
    border-radius: 4px;
    background: rgba(0,0,0,0.55);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }
  .kp-expand-wrapper:hover .kp-expand-btn {
    opacity: 1;
  }
  .kp-char-card:hover .kp-expand-btn,
  .kp-bts-card:hover .kp-expand-btn {
    opacity: 1;
  }

  /* ── WIDE IMAGE WRAPPER ── */
  .kp-wide-img-wrap {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 32px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.5);
    cursor: pointer;
  }
  .kp-wide-img-wrap img {
    width: 100%;
    display: block;
    transition: transform 0.4s;
  }
  @media (hover: hover) { .kp-wide-img-wrap:hover img { transform: scale(1.02); } }

  /* ── WORLD WRAPPER ── */
  .kp-world-wrapper {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
  }
  .kp-world-wrapper img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
  }
  @media (hover: hover) {
    .kp-world-wrapper:hover img {
      transform: scale(1.03);
    }
    .kp-world-wrapper:hover {
      box-shadow: 0 8px 24px rgba(0,0,0,0.6);
      z-index: 2;
    }
  }

  /* ── FULLSCREEN VIEWER ── */
  .kg-viewer {
    position: fixed; inset: 0; z-index: 2000;
    background: rgba(0,0,0,0.97);
    display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.2s ease;
    overscroll-behavior: contain;
    touch-action: pinch-zoom;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .kg-viewer img {
    max-width: 94vw; max-height: 90vh;
    object-fit: contain; border-radius: 4px;
    box-shadow: 0 0 60px rgba(0,0,0,0.8);
  }
  .kg-viewer-close {
    position: absolute; top: 16px; right: 20px;
    width: 38px; height: 38px; border-radius: 50%;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
    color: #fff; font-size: 23px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
    z-index: 2001;
  }
  .kg-viewer-close:hover { background: rgba(212,160,23,0.25); color: #d4a017; }
  .kg-viewer-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
    color: #fff; font-size: 29px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, border-color 0.2s;
    z-index: 2001;
  }
  .kg-viewer-nav:hover { background: rgba(212,160,23,0.2); border-color: #d4a017; color: #d4a017; }
  .kg-viewer-prev { left: 16px; }
  .kg-viewer-next { right: 16px; }
  .kg-viewer-counter {
    position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
    font-family: 'Barlow Condensed', sans-serif; font-size: 17px;
    letter-spacing: 2px; color: rgba(255,255,255,0.5);
  }
`;

export default function KumariPage() {
  const navigate = useNavigate();
  const [viewerIdx, setViewerIdx] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (viewerIdx !== null) {
        if (e.key === "Escape") setViewerIdx(null);
        if (e.key === "ArrowRight") setViewerIdx(i => (i + 1) % GALLERY_IMAGES.length);
        if (e.key === "ArrowLeft") setViewerIdx(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerIdx]);

  return (
    <>
      <style>{style}</style>
      <div className="kp-root" style={{ '--kumari-bg': `url("${bgRefImg}")` }}>

        {/* ── FIXED NAV ── */}
        <nav className="kp-nav">
          <button className="kp-back" onClick={() => navigate('/')} title="Back to portfolio">‹</button>
          <div className="kp-nav-links">
            <a href="/#ABOUT">About</a>
            <a href="/#CONTACT">Contact</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="kp-hero">
          <img className="kp-hero-img" src={heroBanner} alt="Kumari Hero" />
          <div className="kp-hero-gradient" />
          <div className="kp-hero-content">
            <button className="kp-play-btn" onClick={() => window.open('https://www.youtube.com/watch?v=GptKsCT8Tag', '_blank')}>
              <span>▶</span> Play Trailer
            </button>
          </div>
        </section>

        {/* ── KUMARI KANDAM ── */}
        <div className="kp-section-wrap">
          <div className="kp-gold-rule" />
          <section className="kp-section">
            <p className="kp-para">
              An animated feature following Kumari — a young warrior navigating the mythic lost continent.
              A passion project blending traditional Tamil storytelling with modern 2D animation techniques,
              featuring original character designs and rich world-building across every frame.
            </p>
            <div className="kp-wide-img-wrap" onClick={() => setViewerIdx(0)}>
              <img src={splashImg} alt="Kumari Splash" />
              <div className="kp-expand-btn">⤢</div>
            </div>
          </section>
        </div>

        {/* ── CHARACTERS ── */}
        <div className="kp-section-wrap">
          <section className="kp-section">
            <p className="kp-para">
              Breathing life into our original characters. Each design is carefully crafted to reflect their
              personality, cultural roots, and role in the story — ensuring they are expressive, memorable,
              and deeply human.
            </p>
            <div className="kp-chars-grid">
              <div className="kp-char-card kp-expand-wrapper" onClick={() => setViewerIdx(1)}>
                <img src={nilaImg} alt="Nila" />
                <div className="kp-expand-btn">⤢</div>
              </div>
              <div className="kp-char-card kp-expand-wrapper" onClick={() => setViewerIdx(2)}>
                <img src={kathirImg} alt="Kathir" />
                <div className="kp-expand-btn">⤢</div>
              </div>
            </div>
            <p className="kp-para">
              Every character undergoes a full turnaround and expression sheet process to ensure consistency
              across the animation pipeline. Voice casting sessions bring further depth to each role.
            </p>
            {/* Character Sheets */}
            <div className="kp-sheets-col">
              <div className="kp-expand-wrapper" style={{ borderRadius: 8 }} onClick={() => setViewerIdx(3)}>
                <img className="kp-sheet-img" src={charSheet1} alt="Voice Acting Post — Nila" />
                <div className="kp-expand-btn">⤢</div>
              </div>
              <div className="kp-expand-wrapper" style={{ borderRadius: 8 }} onClick={() => setViewerIdx(4)}>
                <img className="kp-sheet-img" src={charSheet2} alt="Voice Acting Post — Kathir" />
                <div className="kp-expand-btn">⤢</div>
              </div>
            </div>
          </section>
        </div>

        {/* ── THE WORLD ── */}
        <div className="kp-section-wrap">
          <div className="kp-gold-rule" />
          <section className="kp-section">
            <p className="kp-para">
              Explore the vast, magical continent. Environment design focuses on atmospheric depth —
              blending lush natural landscapes with ancient Dravidian architecture and mythic scale.
            </p>
            <div className="kp-world-section">
              <div className="kp-world-row kp-world-row-1">
                <div className="kp-world-wrapper kp-world-r1-big" onClick={() => setViewerIdx(5)}>
                  <img src={worldImg6} alt="Kathir Looks Down" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
                <div className="kp-world-stack" style={{ height: 280 }}>
                  <div className="kp-world-wrapper kp-world-r1-sm" onClick={() => setViewerIdx(6)}>
                    <img src={worldImg3} alt="Half Tower Cliff" />
                    <div className="kp-expand-btn">⤢</div>
                  </div>
                  <div className="kp-world-wrapper kp-world-r1-sm" onClick={() => setViewerIdx(7)}>
                    <img src={worldImg7} alt="Screenshot 410" />
                    <div className="kp-expand-btn">⤢</div>
                  </div>
                </div>
              </div>
              <div className="kp-world-row kp-world-row-2">
                <div className="kp-world-wrapper kp-world-r2-img" onClick={() => setViewerIdx(8)}>
                  <img src={worldImg5} alt="Horse Statue BG" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
                <div className="kp-world-wrapper kp-world-r2-img" onClick={() => setViewerIdx(0)}>
                  <img src={splashImg} alt="Kumari Splash" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
                <div className="kp-world-wrapper kp-world-r2-img" onClick={() => setViewerIdx(9)}>
                  <img src={worldImg4} alt="Horse Reunited" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
              </div>
              <div className="kp-world-row kp-world-row-3">
                <div className="kp-world-wrapper kp-world-r3-big" onClick={() => setViewerIdx(10)}>
                  <img src={worldImg2} alt="Clouds Scenery" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
                <div className="kp-world-wrapper kp-world-r3-sm" onClick={() => setViewerIdx(11)}>
                  <img src={worldImg8} alt="Tower BG" />
                  <div className="kp-expand-btn">⤢</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── THE PROCESS ── */}
        <div className="kp-section-wrap">
          <div className="kp-gold-rule" />
          <section className="kp-section">
            <p className="kp-para">
              Animation is a multi-step journey. From initial concepts and storyboarding to final compositing
              and sound design, every step requires precision and creative collaboration.
            </p>
            <div className="kp-process-img-wrap">
              <div className="kp-expand-wrapper" style={{ display: 'inline-block', borderRadius: 8, overflow: 'hidden', cursor: 'pointer' }} onClick={() => setViewerIdx(12)}>
                <img src={processImg} alt="Process Skills" style={{ display: 'block', maxWidth: '700px', width: '90%' }} />
                <div className="kp-expand-btn">⤢</div>
              </div>
            </div>
          </section>
        </div>

        {/* ── BEHIND THE SCENES ── */}
        <div className="kp-section-wrap">
          <section className="kp-section">
            <p className="kp-para">
              Meet the passionate team behind the magic. A dedicated group of artists, animators,
              and voice actors collaborating to bring Kumari to life.
            </p>
            <div className="kp-bts-grid">
              <div className="kp-bts-card kp-expand-wrapper" onClick={() => setViewerIdx(13)}>
                <img src={bts1} alt="Abi" />
                <div className="kp-bts-overlay" />
                <div className="kp-expand-btn">⤢</div>
              </div>
              <div className="kp-bts-card kp-expand-wrapper" onClick={() => setViewerIdx(14)}>
                <img src={bts2} alt="Sid" />
                <div className="kp-bts-overlay" />
                <div className="kp-expand-btn">⤢</div>
              </div>
              <div className="kp-bts-card kp-expand-wrapper" onClick={() => setViewerIdx(15)}>
                <img src={bts3} alt="Nila VA" />
                <div className="kp-bts-overlay" />
                <div className="kp-expand-btn">⤢</div>
              </div>
              <div className="kp-bts-card kp-expand-wrapper" onClick={() => setViewerIdx(16)}>
                <img src={bts4} alt="Kathir VA" />
                <div className="kp-bts-overlay" />
                <div className="kp-expand-btn">⤢</div>
              </div>
            </div>
          </section>
        </div>

        {/* ── FOOTER ── */}
        <footer className="kp-footer">
          <div className="kp-footer-logo">KUMARI</div>
          <div>© 2024 Mithun. All rights reserved.</div>
          <div>THE LOST CONTINENT</div>
        </footer>

      </div>

      {/* ── FULLSCREEN IMAGE VIEWER ── */}
      {viewerIdx !== null && (
        <div className="kg-viewer" onClick={() => setViewerIdx(null)}>
          <button className="kg-viewer-close" onClick={() => setViewerIdx(null)}>✕</button>
          <button className="kg-viewer-nav kg-viewer-prev"
            onClick={e => { e.stopPropagation(); setViewerIdx(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>‹</button>
          <img
            src={GALLERY_IMAGES[viewerIdx].src}
            alt={GALLERY_IMAGES[viewerIdx].alt}
            onClick={e => e.stopPropagation()}
          />
          <button className="kg-viewer-nav kg-viewer-next"
            onClick={e => { e.stopPropagation(); setViewerIdx(i => (i + 1) % GALLERY_IMAGES.length); }}>›</button>
          <div className="kg-viewer-counter">{viewerIdx + 1} / {GALLERY_IMAGES.length} — {GALLERY_IMAGES[viewerIdx].alt}</div>
        </div>
      )}
    </>
  );
}
