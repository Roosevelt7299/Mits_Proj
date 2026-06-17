import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import kumariImg from "./images/Kumari.png";
import characterImg from "./images/character.png";
import conceptImg from "./images/concept.png";
import animationImg from "./images/animation.png";
import backgroundImg from "./images/background.png";
import avatarImg from "./images/avatar.png";
import animationVideo from "./images/Animation_works/Projecct42 - Animation.mp4";

// ── Character Art Gallery Images ──
import caImg1  from "./images/Character_art/arthur.png";
import caImg2  from "./images/Character_art/hime.png";
import caImg3  from "./images/Character_art/Jinx 2.png";
import caImg4  from "./images/Character_art/Kate bishop.png";
import caImg5  from "./images/Character_art/shami.png";
import caImg6  from "./images/Character_art/Visitor full view 1.png";
import caImg7  from "./images/Character_art/original character 2.png";
import caImg8  from "./images/Character_art/Jinx.png";
import caImg9  from "./images/Character_art/Visitor full view 2.png";
import caImg10 from "./images/Character_art/original character.png";

// ── Kumari Gallery Images ──
import kImg1  from "./images/Kumari_/Kumari main screen.png";
import kImg2  from "./images/Kumari_/kumari splash 2.png";
import kImg3  from "./images/Kumari_/city bg1.png";
import kImg4  from "./images/Kumari_/Clouds scenery final 3.png";
import kImg5  from "./images/Kumari_/Half tower - cliff zoom out shot 4.png";
import kImg6  from "./images/Kumari_/Horse reunited 2.png";
import kImg7  from "./images/Kumari_/Horse statue bg 1.png";
import kImg8  from "./images/Kumari_/Kathir looks down 1.png";
import kImg9  from "./images/Kumari_/Screenshot (410).png";
import kImg10 from "./images/Kumari_/Tower bg establishing.png";
import kImg11 from "./images/Kumari_/The Third Chennai process 3.png";
import kImg12 from "./images/Kumari_/Abi announcement 1.png";
import kImg13 from "./images/Kumari_/Sid announcement 1.png";
import kImg14 from "./images/Kumari_/Voice acting post 1.png";
import kImg15 from "./images/Kumari_/Voice acting post 2.png";
import kImg16 from "./images/Kumari_/Kathir 3.png";
import kImg17 from "./images/Kumari_/Nila 3.png";
import kImg18 from "./images/Kumari_/Skills final png.png";

// ── Concept & 2D Art Gallery Images ──
import c2dImg1  from "./images/Concept&2D_Art/Archetype exploration 2.png";
import c2dImg2  from "./images/Concept&2D_Art/Artboard 1.png";
import c2dImg3  from "./images/Concept&2D_Art/Artboard 2.png";
import c2dImg4  from "./images/Concept&2D_Art/Artboard 5.png";
import c2dImg5  from "./images/Concept&2D_Art/Artboard 6.png";
import c2dImg6  from "./images/Concept&2D_Art/Artboard 8.png";
import c2dImg7  from "./images/Concept&2D_Art/Ben stokes Character Art copy.png";
import c2dImg8  from "./images/Concept&2D_Art/Character sheet 1.png";
import c2dImg9  from "./images/Concept&2D_Art/Character sheet Bhanu.png";
import c2dImg10 from "./images/Concept&2D_Art/Custom red 1.png";
import c2dImg11 from "./images/Concept&2D_Art/Mandala asset.png";
import c2dImg12 from "./images/Concept&2D_Art/Queen redesign colours.png";
import c2dImg13 from "./images/Concept&2D_Art/Queen turntable copy.png";
import c2dImg14 from "./images/Concept&2D_Art/Screenshot (209).png";
import c2dImg15 from "./images/Concept&2D_Art/Screenshot (210).png";
import c2dImg16 from "./images/Concept&2D_Art/Screenshot (211).png";
import c2dImg17 from "./images/Concept&2D_Art/Screenshot (212).png";
import c2dImg18 from "./images/Concept&2D_Art/Screenshot (213).png";
import c2dImg19 from "./images/Concept&2D_Art/Screenshot (214).png";
import c2dImg20 from "./images/Concept&2D_Art/Screenshot (215).png";
import c2dImg21 from "./images/Concept&2D_Art/Screenshot (216).png";
import c2dImg22 from "./images/Concept&2D_Art/Screenshot (220).png";
import c2dImg23 from "./images/Concept&2D_Art/Screenshot (221).png";
import c2dImg24 from "./images/Concept&2D_Art/Spirit card final.png";
import c2dImg25 from "./images/Concept&2D_Art/SpiritCard png.png";

// ── Illustrations Gallery Images ──
import illImg1  from "./images/Illustrations/1 copy.png";
import illImg2  from "./images/Illustrations/2 copy.png";
import illImg3  from "./images/Illustrations/2099 copy.png";
import illImg4  from "./images/Illustrations/3 copy.png";
import illImg5  from "./images/Illustrations/4 copy.png";
import illImg6  from "./images/Illustrations/5 copy.png";
import illImg7  from "./images/Illustrations/6 copy.png";
import illImg8  from "./images/Illustrations/7 copy.png";
import illImg9  from "./images/Illustrations/Art style 1 copy.png";
import illImg10 from "./images/Illustrations/Bonnie copy 2.png";
import illImg11 from "./images/Illustrations/Cafe sky copy.png";
import illImg12 from "./images/Illustrations/Ceasar copy.png";
import illImg13 from "./images/Illustrations/Cozy copy 2.png";
import illImg14 from "./images/Illustrations/Demogorgon copy.png";
import illImg15 from "./images/Illustrations/Saarpatta copy 2.png";
import illImg16 from "./images/Illustrations/war.png";

// ── Character Art Gallery (10 images, grouped by aspect ratio) ──
// Row A: 3 landscape 16:9 — arthur, hime, Jinx 2
// Row B: 2 landscape 16:9 — Kate bishop, shami
// Row C: 2 mixed landscape — Visitor full view 1, original character 2
// Row D: 3 portrait — Jinx (9:16), Visitor full view 2 (2:3), original character (~3:4)
const CHARACTER_ART_GALLERY = [
  { src: caImg1,  label: "Arthur",                layout: "standard", w: 1920, h: 1080 },
  { src: caImg2,  label: "Hime",                  layout: "standard", w: 1920, h: 1080 },
  { src: caImg3,  label: "Jinx II",               layout: "standard", w: 1920, h: 1080 },
  { src: caImg4,  label: "Kate Bishop",           layout: "standard", w: 1920, h: 1080 },
  { src: caImg5,  label: "Shami",                 layout: "standard", w: 1920, h: 1080 },
  { src: caImg6,  label: "Visitor — Full View",   layout: "banner",   w: 2611, h: 1639 },
  { src: caImg7,  label: "Original Character II", layout: "banner",   w: 2333, h: 1695 },
  { src: caImg8,  label: "Jinx",                  layout: "portrait", w: 1080, h: 1920 },
  { src: caImg9,  label: "Visitor — Full View II",layout: "portrait", w: 2611, h: 4000 },
  { src: caImg10, label: "Original Character",    layout: "portrait", w: 2480, h: 3508 },
];

// ── Concept & 2D Art Gallery (25 images, layouts + dimensions verified) ──
const CONCEPT_2D_GALLERY = [
  // [0-5] Artboard / exploration panels — all 16:9 except AB8 which is ~2:1
  { src: c2dImg2,  label: "Artboard 1",              layout: "standard", group: "artboards", w: 1920, h: 1080 },
  { src: c2dImg3,  label: "Artboard 2",              layout: "standard", group: "artboards", w: 1920, h: 1080 },
  { src: c2dImg4,  label: "Artboard 5",              layout: "standard", group: "artboards", w: 1920, h: 1080 },
  { src: c2dImg5,  label: "Artboard 6",              layout: "standard", group: "artboards", w: 1920, h: 1080 },
  { src: c2dImg6,  label: "Artboard 8",              layout: "banner",   group: "artboards", w: 2149, h: 1080 },
  { src: c2dImg1,  label: "Archetype Exploration",   layout: "standard", group: "artboards", w: 1920, h: 1080 },
  // [6-8] Character sheets — Sheet1=16:9, Bhanu=~4:3 landscape, BenStokes=portrait
  { src: c2dImg8,  label: "Character Sheet 1",       layout: "standard", group: "sheets",   w: 3840, h: 2160 },
  { src: c2dImg9,  label: "Character Sheet — Bhanu", layout: "standard", group: "sheets",   w: 4961, h: 3508 },
  { src: c2dImg7,  label: "Ben Stokes Character Art",layout: "portrait", group: "sheets",   w: 2400, h: 4000 },
  // [9-18] Process screenshots — all 1920x1080 (16:9)
  { src: c2dImg14, label: "Process 209",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg15, label: "Process 210",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg16, label: "Process 211",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg17, label: "Process 212",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg18, label: "Process 213",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg19, label: "Process 214",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg20, label: "Process 215",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg21, label: "Process 216",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg22, label: "Process 220",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  { src: c2dImg23, label: "Process 221",             layout: "standard", group: "process",  w: 1920, h: 1080 },
  // [19-24] Miscellaneous
  { src: c2dImg10, label: "Custom Red",              layout: "standard", group: "misc",     w: 3508, h: 2480 },
  { src: c2dImg11, label: "Mandala Asset",           layout: "standard", group: "misc",     w: 1920, h: 1080 },
  { src: c2dImg12, label: "Queen Redesign Colours",  layout: "standard", group: "misc",     w: 1920, h: 1080 },
  { src: c2dImg13, label: "Queen Turntable",         layout: "standard", group: "misc",     w: 1920, h: 1080 },
  { src: c2dImg24, label: "Spirit Card Final",       layout: "standard", group: "misc",     w: 1920, h: 1080 },
  { src: c2dImg25, label: "Spirit Card",             layout: "portrait", group: "misc",     w: 1560, h: 2432 },
];

// ── Illustrations Gallery (16 images) ──
// w/h = ACTUAL pixel dimensions measured from disk — drives aspect-ratio per cell
const ILLUSTRATIONS_GALLERY = [
  { src: illImg1,  label: "Illustration 1",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg2,  label: "Illustration 2",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg3,  label: "2099",            w: 2250, h: 3399 },  // portrait
  { src: illImg4,  label: "Illustration 3",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg5,  label: "Illustration 4",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg6,  label: "Illustration 5",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg7,  label: "Illustration 6",  w: 1920, h: 1080 },  // landscape 16:9
  { src: illImg8,  label: "Illustration 7",  w: 2480, h: 3508 },  // portrait
  { src: illImg9,  label: "Art Style Study", w: 1000, h: 1000 },  // square
  { src: illImg10, label: "Bonnie",          w: 2327, h: 3265 },  // portrait
  { src: illImg11, label: "Café Sky",        w: 4500, h: 10000 }, // very tall portrait
  { src: illImg12, label: "Caesar",          w: 1920, h: 961  },  // landscape ~2:1
  { src: illImg13, label: "Cozy",            w: 4000, h: 4000 },  // square
  { src: illImg14, label: "Demogorgon",      w: 2775, h: 3907 },  // portrait
  { src: illImg15, label: "Saarpatta",       w: 3000, h: 4000 },  // portrait
  { src: illImg16, label: "War",             w: 4000, h: 4000 },  // square
];

// layout: 'wide' = ultrawide 21:9, 'square' = 1:1, 'portrait' = tall, 'standard' = 16:9, 'banner' = short wide, 'panorama' = super wide
const KUMARI_GALLERY = [
  { src: kImg1,  label: "Kumari Main Screen",         layout: "standard"  },
  { src: kImg2,  label: "Kumari Splash",              layout: "banner"    },
  { src: kImg3,  label: "City Background",            layout: "wide"      },
  { src: kImg4,  label: "Clouds Scenery",             layout: "wide"      },
  { src: kImg5,  label: "Half Tower Cliff",           layout: "wide"      },
  { src: kImg6,  label: "Horse Reunited",             layout: "wide"      },
  { src: kImg7,  label: "Horse Statue BG",            layout: "wide"      },
  { src: kImg8,  label: "Kathir Looks Down",          layout: "wide"      },
  { src: kImg9,  label: "Screenshot",                layout: "wide"      },
  { src: kImg10, label: "Tower BG Establishing",      layout: "wide"      },
  { src: kImg11, label: "The Third Chennai Process",  layout: "wide"      },
  { src: kImg12, label: "Abi Announcement",           layout: "square"    },
  { src: kImg13, label: "Sid Announcement",           layout: "square"    },
  { src: kImg14, label: "Voice Acting Post 1",        layout: "square"    },
  { src: kImg15, label: "Voice Acting Post 2",        layout: "square"    },
  { src: kImg16, label: "Kathir",                     layout: "portrait"  },
  { src: kImg17, label: "Nila",                       layout: "portrait"  },
  { src: kImg18, label: "Skills",                     layout: "standard"  },
];

const API_URL = "http://localhost:5000/api";
const NAV_LINKS = ["HOME", "KUMARI", "WORKS", "ABOUT", "CONTACT"];

const WORKS_DATA = [
  { _id: "1", title: "Kumari - Animated Film", tag: "Film", description: "A warrior's journey through the mythic lost continent. A passion project blending traditional storytelling with modern 2D animation.", imageUrl: kumariImg, objectPosition: "65% center" },
  { _id: "2", title: "Character Art", tag: "Art", description: "Original character designs with expressive personality — from concept sketches to fully rendered illustrations.", imageUrl: characterImg, objectPosition: "76% center" },
  { _id: "3", title: "Concept & 2D Art", tag: "Concept", description: "World-building through detailed 2D concept illustrations. Every scene crafted to tell a visual story.", imageUrl: conceptImg, objectPosition: "82% center" },
  { _id: "4", title: "Animation works", tag: "Motion", description: "Fluid motion sequences with cinematic timing. Bringing characters and worlds to life frame by frame.", imageUrl: animationImg, objectPosition: "62% center" },
  { _id: "5", title: "Background Art", tag: "BG Art", description: "Atmospheric environments with rich depth and color. Every background designed to immerse the viewer in another world.", imageUrl: backgroundImg, objectPosition: "88% center" },
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Caveat:wght@700&family=Barlow:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  :root {
    --gold: #FFB800;
    --dark: #111111;
    --dark2: #181818;
    --dark3: #222222;
    --text: #e0d6c8;
    --muted: #888;
    --safe-top: env(safe-area-inset-top, 0px);
    --safe-bottom: env(safe-area-inset-bottom, 0px);
    --safe-left: env(safe-area-inset-left, 0px);
    --safe-right: env(safe-area-inset-right, 0px);
  }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
  body { background: var(--dark); color: var(--text); font-family: 'Barlow', sans-serif; overflow-x: hidden; -webkit-overflow-scrolling: touch; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--dark); }
  ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

  .topnav { position: fixed; top: 0; right: 0; z-index: 200; display: flex; gap: 28px; padding: calc(18px + var(--safe-top)) calc(36px + var(--safe-right)) 18px 36px; font-family: 'Barlow Condensed', sans-serif; font-size: 13px; letter-spacing: 2px; will-change: transform; }
  .topnav a { color: var(--text); text-decoration: none; transition: color .2s; }
  @media (hover: hover) { .topnav a:hover { color: var(--gold); } }

  .sidenav { position: fixed; left: 0; top: 50%; transform: translateY(-50%); z-index: 200; display: flex; flex-direction: column; gap: 10px; padding: 0 0 0 24px; font-family: 'Barlow Condensed', sans-serif; font-size: 13px; letter-spacing: 2px; }
  .sidenav a { color: var(--muted); text-decoration: none; transition: color .2s, transform .2s; display: block; }
  .sidenav a:hover, .sidenav a.active { color: var(--gold); transform: translateX(4px); }

  .hero { position: relative; height: 100vh; height: 100dvh; min-height: 400px; overflow: hidden; }
  .hero-amber-box { position: absolute; top: 0; left: 0; width: clamp(20px, 3vw, 36px); height: clamp(20px, 3vw, 36px); background: var(--gold); z-index: 5; }
  .hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top center; z-index: 0; }
  @keyframes heroIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .hero-avatar { position: absolute; z-index: 10; top: 50%; left: 50%; transform: translate(-50%, -50%); width: clamp(150px, 20vw, 280px); animation: float 4s ease-in-out infinite; filter: drop-shadow(0 20px 40px rgba(255,184,0,0.35)); pointer-events: none; }
  @keyframes float { 0%, 100% { transform: translate(-50%, -50%) translateY(0); } 50% { transform: translate(-50%, -50%) translateY(-16px); } }
  .hero-cta { position: absolute; left: 0; right: 0; bottom: 18vh; margin: 0 auto; width: fit-content; display: flex; align-items: center; gap: clamp(16px, 3vw, 40px); z-index: 15; white-space: nowrap; animation: heroIn 1.4s .4s cubic-bezier(.16,1,.3,1) both; }

  .btn { padding: 11px 32px; font-family: 'Barlow Condensed', sans-serif; font-size: 14px; letter-spacing: 2px; font-weight: 600; border: none; cursor: pointer; text-transform: uppercase; transition: all .25s; display: inline-flex; align-items: center; gap: 8px; border-radius: 50px; }
  .btn-gold { background: var(--gold); color: #111; }
  .btn-gold:hover { background: #ffd24d; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,184,0,.4); }
  .btn-gold:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
  .btn-outline { background: rgba(255,255,255,0.08); color: var(--text); border: 1.5px solid rgba(255,255,255,.5); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
  @media (hover: hover) { .btn-outline:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-2px); background: rgba(255,184,0,0.08); } }

  .section { padding: 100px 0; }
  .section-inner { max-width: 1100px; margin: 0 auto; padding: 0 80px 0 100px; }

  .kumari-section { background: var(--dark2); }
  .kumari-section .section-inner { max-width: 1400px; padding-left: 120px; }
  .kumari-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 80px; align-items: center; }
  .trailer-card { position: relative; aspect-ratio: 16/9; background: #000; overflow: hidden; cursor: pointer; border-radius: 12px; box-shadow: 0 24px 48px rgba(0,0,0,0.6); }
  .trailer-card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
  .trailer-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; padding: 24px; background: linear-gradient(to top, rgba(0,0,0,.8) 0%, transparent 60%); }
  .trailer-overlay h2 { font-family: 'Bebas Neue', sans-serif; font-size: clamp(24px, 4vw, 44px); color: #fff; letter-spacing: 2px; line-height: 1; }
  .play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(255,0,0,.85); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: transform .2s, background .2s; }
  .play-btn:hover { transform: translate(-50%, -50%) scale(1.12); background: red; }
  .play-btn svg { width: 22px; height: 22px; fill: white; margin-left: 4px; }
  .kumari-tag { font-family: 'Bebas Neue', sans-serif; font-size: 11px; letter-spacing: 3px; background: rgba(255,184,0,.1); border: 1px solid rgba(255,184,0,.3); display: inline-block; padding: 6px 14px; color: #FFB800; margin-bottom: 16px; }
  .kumari-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px, 6vw, 72px); line-height: 1; color: #fff; margin-bottom: 20px; }
  .kumari-title span { color: var(--gold); }
  .kumari-desc { font-size: 14px; line-height: 1.7; color: var(--muted); margin-bottom: 28px; }
  .btn-group { display: flex; gap: 12px; flex-wrap: wrap; }

  .works-title-wrap { position: relative; text-align: center; margin-bottom: 40px; overflow: hidden; padding: 20px 0; }
  .works-bg-text { font-family: 'Bebas Neue', sans-serif; font-size: clamp(60px, 12vw, 140px); color: transparent; -webkit-text-stroke: 1px rgba(255,184,0,.12); letter-spacing: 8px; line-height: 1; user-select: none; }
  .works-script-over { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -60%); font-family: 'Caveat', cursive; font-size: clamp(22px, 4vw, 42px); color: var(--gold); white-space: nowrap; }

  /* ── ACCORDION CARDS ── */
  .works-grid {
    display: flex;
    gap: 12px;
    height: 52vh;
    height: 52dvh;
    max-height: 440px;
    min-height: 300px;
    padding: 0 80px 0 100px;
    box-sizing: border-box;
    touch-action: pan-y;
  }

  .work-card {
    position: relative;   /* MUST be relative so absolute img fills it */
    flex: 1;
    min-width: 0;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    transition: flex 0.55s cubic-bezier(.16,1,.3,1);
    background: var(--dark3);
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
    -webkit-transform: translateZ(0);
  }

  /* :has() accordion — only on devices that support hover AND :has() */
  @supports selector(:has(*)) {
    @media (hover: hover) {
      .works-grid:has(.work-card:hover) .work-card { flex: 0.28; }
      .works-grid:has(.work-card:hover) .work-card:hover {
        flex: 4;
        box-shadow: 0 20px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,184,0,0.25);
      }
    }
  }

  /* top + bottom gradient fades to hide dark image edges */
  .work-card::before,
  .work-card::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 28%;
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }
  .work-card::before {
    top: 0;
    background: linear-gradient(to bottom, var(--dark) 0%, transparent 100%);
  }
  .work-card::after {
    bottom: 0;
    background: linear-gradient(to top, var(--dark) 0%, transparent 100%);
  }
  @supports selector(:has(*)) {
    @media (hover: hover) {
      .works-grid:has(.work-card:hover) .work-card:not(:hover)::before,
      .works-grid:has(.work-card:hover) .work-card:not(:hover)::after { opacity: 0.6; }
      .work-card:hover::before,
      .work-card:hover::after { opacity: 0; }
    }
  }

  /* IMAGE: absolutely fills entire card */
  .work-card img {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
    transition: transform 0.6s ease;
    pointer-events: none;
  }
  @media (hover: hover) { .work-card:hover img { transform: scale(1.04); } }

  /* gold tag */
  .work-card-label {
    display: none;
  }

  /* collapsed title in the middle */
  .work-card-name {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Barlow', sans-serif;
    font-size: 18px; 
    font-weight: 700;
    color: #fff;
    text-shadow: 0 4px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8);
    text-align: center;
    transition: opacity 0.25s, transform 0.25s;
    letter-spacing: 0.5px;
    z-index: 3;
    pointer-events: none;
  }
  @media (hover: hover) { .work-card:hover .work-card-name { opacity: 0; transform: scale(1.05); } }

  /* expanded overlay */
  .work-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.35) 50%, transparent 100%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 28px 22px;
    opacity: 0; transition: opacity 0.4s ease; z-index: 4;
  }
  .work-card:hover .work-card-overlay { opacity: 1; }
  /* On touch devices, show overlay on tap via :active */
  @media (hover: none) {
    .work-card .work-card-overlay { opacity: 1; }
    .work-card .work-card-name { opacity: 0; }
  }

  .work-card-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(16px, 1.8vw, 24px);
    color: #fff; margin-bottom: 6px;
    letter-spacing: 1px; line-height: 1.1;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .work-card-desc {
    font-size: 11px; color: rgba(255,255,255,0.6);
    line-height: 1.55; margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    max-width: 340px;
  }

  /* only VIEW button — no list */
  .work-card-btn {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--gold); color: #111; border: none;
    padding: 9px 20px; font-size: 11px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    border-radius: 2px; transition: background 0.2s, transform 0.2s;
    width: fit-content;
  }
  .work-card-btn:hover { background: #ffd24d; transform: translateY(-1px); }

  .works-skeleton { flex: 1; background: var(--dark3); border-radius: 12px; animation: pulse 1.5s ease-in-out infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  /* ── RICH DETAIL MODAL ── */
  .detail-modal {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.96);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    animation: fadeIn 0.25s ease;
    overscroll-behavior: contain;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .detail-modal-inner {
    max-width: 860px; margin: 0 auto;
    padding: 48px 32px 80px;
    animation: slideUp 0.35s cubic-bezier(.16,1,.3,1);
  }
  @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

  .detail-close {
    position: fixed; top: 18px; right: 24px;
    width: 38px; height: 38px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.15);
    color: #fff; font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; border-radius: 50%;
    transition: background 0.2s, border-color 0.2s; z-index: 10;
  }
  .detail-close:hover { background: rgba(255,184,0,0.2); border-color: var(--gold); color: var(--gold); }

  /* back arrow inside banner */
  .detail-back {
    position: absolute; top: 24px; left: 32px;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 24px; font-weight: 700;
    color: var(--gold);
    cursor: pointer; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,184,0,0.3);
    width: 44px; height: 44px; border-radius: 50%;
    transition: all 0.2s; z-index: 5;
    padding-bottom: 2px;
  }
  .detail-back:hover { background: var(--gold); color: #111; transform: translateX(-4px); }

  /* wide banner */
  .detail-banner {
    width: 100%;
    aspect-ratio: 16/7;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: var(--dark3);
    margin-bottom: 20px;
  }
  .detail-banner img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; display: block;
  }
  .detail-banner-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    padding: 32px 40px;
  }
  .detail-banner-tag {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Caveat', cursive;
    font-size: clamp(34px, 6vw, 72px); color: #fff;
    white-space: nowrap; z-index: 2; text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
  .detail-banner-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(48px, 9vw, 110px);
    color: #d75e3a; letter-spacing: 4px; line-height: 1;
    text-shadow: 0 4px 20px rgba(0,0,0,0.6);
    user-select: none; position: relative; z-index: 1;
    text-align: center;
  }

  /* dots */
  .detail-dots {
    display: flex; gap: 8px; justify-content: center;
    margin-bottom: 24px;
  }
  .detail-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: none; cursor: pointer;
    transition: background 0.2s, transform 0.2s; padding: 0;
  }
  .detail-dot.active { background: var(--gold); transform: scale(1.3); }

  /* description */
  .detail-desc {
    font-size: 14px; line-height: 1.85;
    color: rgba(255,255,255,0.75);
    margin: 0 auto 36px; max-width: 720px;
    text-align: center;
  }

  /* ── KUMARI GALLERY ── */
  .kg-section-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--gold); margin: 32px 0 12px; opacity: 0.7;
  }

  /* ROW: wide / banner / standard images */
  .kg-row { display: grid; gap: 6px; margin-bottom: 6px; }
  .kg-row-1 { grid-template-columns: 1fr; }
  .kg-row-2 { grid-template-columns: 1fr 1fr; }
  .kg-row-3 { grid-template-columns: 1.6fr 1fr 1fr; }
  .kg-row-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

  .kg-cell {
    position: relative; overflow: hidden;
    border-radius: 6px; background: var(--dark3);
    cursor: pointer;
  }
  /* aspect ratios per layout type */
  .kg-cell.wide     { aspect-ratio: 21/9; }
  .kg-cell.banner   { aspect-ratio: 16/6; }
  .kg-cell.standard { aspect-ratio: 16/9; }
  .kg-cell.square   { aspect-ratio: 1/1; }
  .kg-cell.portrait { aspect-ratio: 2/3; }
  /* panorama: fixed height, scrolls horizontally */
  .kg-cell.panorama {
    aspect-ratio: unset;
    height: 260px;
    overflow-x: auto;
    overflow-y: hidden;
    cursor: grab;
  }
  .kg-cell.panorama:active { cursor: grabbing; }
  .kg-cell.panorama::-webkit-scrollbar { height: 3px; }
  .kg-cell.panorama::-webkit-scrollbar-track { background: #111; }
  .kg-cell.panorama::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

  .kg-cell img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.4s ease;
    pointer-events: none;
  }
  /* panorama: static flow so image renders at full native proportions */
  .kg-cell.panorama img {
    position: static;
    width: auto;
    height: 260px;
    object-fit: unset;
    display: block;
    pointer-events: none;
    transition: none;
  }
  @media (hover: hover) {
    .kg-cell:hover img { transform: scale(1.05); }
    .kg-cell.panorama:hover img { transform: none; }
  }

  /* label on hover */
  .kg-cell-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
    color: #fff; font-size: 11px; font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px; text-transform: uppercase;
    padding: 20px 10px 8px;
    opacity: 0; transition: opacity 0.25s; pointer-events: none;
  }
  @media (hover: hover) { .kg-cell:hover .kg-cell-label { opacity: 1; } }
  @media (hover: none) { .kg-cell-label { opacity: 1; } }

  /* expand icon */
  .kg-expand {
    position: absolute; top: 8px; right: 8px; z-index: 3;
    width: 26px; height: 26px; border-radius: 4px;
    background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.2);
    color: #fff; font-size: 11px;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.2s;
  }
  .kg-cell:hover .kg-expand { opacity: 1; }

  /* ── FULLSCREEN VIEWER ── */
  .kg-viewer {
    position: fixed; inset: 0; z-index: 2000;
    background: rgba(0,0,0,0.97);
    display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.2s ease;
    overscroll-behavior: contain;
    touch-action: pinch-zoom;
  }
  .kg-viewer img {
    max-width: 94vw; max-height: 90vh;
    object-fit: contain; border-radius: 4px;
    box-shadow: 0 0 60px rgba(0,0,0,0.8);
  }
  .kg-viewer-close {
    position: absolute; top: 16px; right: 20px;
    width: 38px; height: 38px; border-radius: 50%;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
    color: #fff; font-size: 18px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .kg-viewer-close:hover { background: rgba(255,184,0,0.25); color: var(--gold); }
  .kg-viewer-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
    color: #fff; font-size: 22px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, border-color 0.2s;
  }
  .kg-viewer-nav:hover { background: rgba(255,184,0,0.2); border-color: var(--gold); color: var(--gold); }
  .kg-viewer-prev { left: 16px; }
  .kg-viewer-next { right: 16px; }
  .kg-viewer-counter {
    position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
    font-family: 'Barlow Condensed', sans-serif; font-size: 13px;
    letter-spacing: 2px; color: rgba(255,255,255,0.5);
  }

  /* ── CHARACTER ART BANNER SLIDESHOW ── */
  .ca-banner {
    display: flex; height: 280px; border-radius: 10px;
    overflow: hidden; position: relative; margin-bottom: 14px;
    background: #120a04;
  }
  .ca-banner-left {
    width: 44%; flex-shrink: 0; position: relative;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #1c0e06 0%, #2e1608 100%);
    padding: 28px 32px;
  }
  .ca-banner-left::after {
    content: ''; position: absolute; right: 0; top: 0; bottom: 0;
    width: 60px;
    background: linear-gradient(to right, transparent, #120a04);
    pointer-events: none;
  }
  .ca-banner-right { flex: 1; position: relative; overflow: hidden; }
  .ca-banner-right img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: opacity 0.35s ease;
  }
  .ca-banner-title-wrap { position: relative; z-index: 2; }
  .ca-banner-main-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(38px, 4.5vw, 62px);
    color: #d75e3a; letter-spacing: 3px; line-height: 1;
    text-shadow: 0 4px 20px rgba(215,94,58,0.5);
  }
  .ca-banner-script {
    font-family: 'Caveat', cursive;
    font-size: clamp(20px, 2.5vw, 32px);
    color: var(--gold); display: block;
    margin-top: -4px; letter-spacing: 1px;
  }
  .ca-banner-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.18);
    color: #fff; font-size: 22px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, border-color 0.2s; z-index: 5;
  }
  .ca-banner-nav:hover { background: rgba(255,184,0,0.3); border-color: var(--gold); color: var(--gold); }
  .ca-banner-prev { left: 10px; }
  .ca-banner-next { right: 10px; }
  .ca-slide-label {
    position: absolute; bottom: 12px; right: 14px; z-index: 4;
    font-family: 'Barlow Condensed', sans-serif; font-size: 11px;
    letter-spacing: 2px; text-transform: uppercase;
    color: rgba(255,255,255,0.6);
    background: rgba(0,0,0,0.45); padding: 3px 10px; border-radius: 2px;
  }
  .ca-dots {
    display: flex; gap: 6px; justify-content: center; margin: 10px 0 18px;
  }
  .ca-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(255,255,255,0.2); border: none; cursor: pointer;
    transition: background 0.2s, transform 0.2s; padding: 0;
  }
  .ca-dot.active { background: var(--gold); transform: scale(1.3); }

  /* ── CHARACTER ART MASONRY GRID ── */
  .ca-masonry {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 170px 170px 200px 180px;
    gap: 4px; margin-top: 4px;
  }
  .ca-m {
    position: relative; overflow: hidden;
    border-radius: 4px; background: var(--dark3); cursor: pointer;
  }
  .ca-m img {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.4s ease; pointer-events: none;
  }
  @media (hover: hover) { .ca-m:hover img { transform: scale(1.06); } }
  .ca-m-lbl {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
    color: #fff; font-size: 11px; font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px; text-transform: uppercase;
    padding: 18px 8px 6px; opacity: 0; transition: opacity 0.25s; pointer-events: none;
  }
  @media (hover: hover) { .ca-m:hover .ca-m-lbl { opacity: 1; } }
  @media (hover: none) { .ca-m-lbl { opacity: 1; } }
  .ca-m-exp {
    position: absolute; top: 6px; right: 6px; z-index: 3;
    width: 22px; height: 22px; border-radius: 3px;
    background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.2);
    color: #fff; font-size: 10px;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.2s;
  }
  .ca-m:hover .ca-m-exp { opacity: 1; }

  /* scrollbar */
  .detail-modal::-webkit-scrollbar { width: 4px; }
  .detail-modal::-webkit-scrollbar-track { background: #0a0a0a; }
  .detail-modal::-webkit-scrollbar-thumb { background: var(--gold); }

  /* ── ILLUSTRATIONS MASONRY (continuous collage, no blanks) ── */
  .ill-masonry {
    column-count: 3;
    column-gap: 5px;
  }
  .ill-masonry-item {
    break-inside: avoid;
    margin-bottom: 5px;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    background: var(--dark3);
  }
  .ill-masonry-item img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
    pointer-events: none;
  }
  @media (hover: hover) { .ill-masonry-item:hover img { transform: scale(1.04); } }
  .ill-masonry-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
    color: #fff; font-size: 11px; font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 1px; text-transform: uppercase;
    padding: 20px 10px 8px;
    opacity: 0; transition: opacity 0.25s; pointer-events: none;
  }
  @media (hover: hover) { .ill-masonry-item:hover .ill-masonry-label { opacity: 1; } }
  @media (hover: none) { .ill-masonry-label { opacity: 1; } }
  .ill-masonry-exp {
    position: absolute; top: 8px; right: 8px; z-index: 3;
    width: 22px; height: 22px; border-radius: 3px;
    background: rgba(0,0,0,0.55); border: 1px solid rgba(255,255,255,0.2);
    color: #fff; font-size: 10px;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.2s;
  }
  .ill-masonry-item:hover .ill-masonry-exp { opacity: 1; }

  /* ── ABOUT ── */
  .about-section { background: var(--dark2); }
  .about-grid { display: grid; grid-template-columns: 0.85fr 1.4fr; gap: 100px; align-items: center; }
  .about-avatar-wrap { display: flex; justify-content: center; align-items: center; position: relative; padding: 20px 0; min-height: 0; transform: translateX(-15%); }
  .about-avatar-wrap::before { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 240px; height: 50px; background: radial-gradient(ellipse, rgba(255,184,0,.30) 0%, transparent 70%); filter: blur(12px); pointer-events: none; }
  .about-avatar { width: clamp(200px, 28vw, 340px); max-height: 420px; object-fit: contain; animation: float-simple 5s ease-in-out infinite; filter: drop-shadow(0 30px 40px rgba(0,0,0,.5)); display: block; }
  @keyframes float-simple { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
  .about-eyebrow { font-family: 'Barlow Condensed', sans-serif; font-size: 12px; letter-spacing: 4px; color: var(--gold); text-transform: uppercase; margin-bottom: 8px; opacity: .7; }
  .about-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 8vw, 100px); line-height: 1; color: transparent; -webkit-text-stroke: 2px rgba(255,184,0,.5); margin-bottom: 28px; paint-order: stroke fill; }
  .about-text { font-size: 14px; line-height: 1.85; color: var(--muted); margin-bottom: 20px; }

  /* ── CONTACT ── */
  .contact-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(42px, 9vw, 110px); color: var(--gold); line-height: 1; margin-bottom: 40px; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
  .form-group { margin-bottom: 16px; }
  .form-group input, .form-group textarea { width: 100%; background: var(--dark3); border: 1px solid rgba(255,255,255,.08); color: var(--text); padding: 14px 18px; font-family: 'Barlow', sans-serif; font-size: 14px; outline: none; resize: none; transition: border-color .2s; }
  .form-group input:focus, .form-group textarea:focus { border-color: var(--gold); }
  .form-group input::placeholder, .form-group textarea::placeholder { color: var(--muted); }
  .form-success { background: rgba(0,200,100,.1); border: 1px solid rgba(0,200,100,.3); color: #4dffaa; padding: 14px 18px; font-size: 14px; margin-bottom: 16px; }
  .form-error { background: rgba(255,60,60,.1); border: 1px solid rgba(255,60,60,.3); color: #ff8080; padding: 14px 18px; font-size: 14px; margin-bottom: 16px; }
  .contact-info { padding-top: 8px; }
  .contact-info-item { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
  .contact-icon { width: 36px; height: 36px; flex-shrink: 0; background: rgba(255,184,0,.12); border: 1px solid rgba(255,184,0,.3); display: flex; align-items: center; justify-content: center; color: var(--gold); font-size: 14px; }
  .contact-info-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); font-family: 'Barlow Condensed', sans-serif; margin-bottom: 4px; }
  .contact-info-val { font-size: 14px; color: var(--text); }

  footer { background: #0a0a0a; padding: 30px calc(100px + var(--safe-right)) 30px calc(100px + var(--safe-left)); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,.06); padding-bottom: calc(30px + var(--safe-bottom)); }
  .footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: var(--gold); }
  .footer-links { display: flex; gap: 24px; font-family: 'Barlow Condensed', sans-serif; font-size: 12px; letter-spacing: 2px; }
  .footer-links a { color: var(--muted); text-decoration: none; transition: color .2s; }
  .footer-links a:hover { color: var(--gold); }
  .footer-copy { font-size: 12px; color: var(--muted); }

  .noise { position: fixed; inset: 0; z-index: 999; pointer-events: none; opacity: 0.025; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
  .gold-line { width: 40px; height: 3px; background: var(--gold); margin-bottom: 20px; }

  /* ── KUMARI LANDING PAGE ── */
  .kumari-landing { display: flex; flex-direction: column; gap: 40px; align-items: center; width: 100%; }
  .kl-stitle-wrap { position: relative; text-align: center; margin: 20px 0 10px; }
  .kl-stitle-bg { font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 6vw, 72px); color: rgba(255,255,255,0.06); letter-spacing: 4px; line-height: 1; }
  .kl-stitle-fg { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: 'Caveat', cursive; font-size: clamp(32px, 5vw, 48px); color: var(--gold); white-space: nowrap; }
  .kl-text { font-family: 'Barlow', sans-serif; font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.7); max-width: 800px; text-align: center; margin: 0 auto; }
  .kl-hero-img { width: 100%; border-radius: 4px; cursor: pointer; transition: transform 0.3s; }
  .kl-hero-img:hover { transform: scale(1.02); }
  .kl-chars-grid { display: flex; gap: 20px; width: 100%; max-width: 800px; margin: 0 auto; }
  .kl-char-card { flex: 1; position: relative; border-radius: 4px; overflow: hidden; cursor: pointer; }
  .kl-char-card img { width: 100%; display: block; transition: transform 0.3s; }
  .kl-char-card:hover img { transform: scale(1.05); }
  .kl-char-name { position: absolute; bottom: 0; left: 0; right: 0; padding: 30px 10px 15px; background: linear-gradient(to top, rgba(0,0,0,0.95), transparent); font-family: 'Bebas Neue', sans-serif; font-size: 32px; color: #fff; text-align: center; letter-spacing: 4px; }
  .kl-char-sheets { display: flex; flex-direction: column; gap: 16px; width: 100%; }
  .kl-char-sheets img { width: 100%; border-radius: 4px; cursor: pointer; transition: transform 0.3s; }
  .kl-char-sheets img:hover { transform: scale(1.02); }
  .kl-world-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-auto-rows: 180px; gap: 10px; width: 100%; }
  .kw-img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; cursor: pointer; transition: transform 0.3s; display: block; }
  .kw-img:hover { transform: scale(1.03); z-index: 2; position: relative; }
  .kw-1 { grid-column: span 2; grid-row: span 2; }
  .kw-2 { grid-column: span 1; grid-row: span 1; }
  .kw-3 { grid-column: span 1; grid-row: span 1; }
  .kw-4 { grid-column: span 1; grid-row: span 1; }
  .kw-5 { grid-column: span 2; grid-row: span 1; }
  .kw-6 { grid-column: span 2; grid-row: span 1; }
  .kw-7 { grid-column: span 1; grid-row: span 1; }
  .kl-process-img { width: 100%; }
  .kl-process-img img { width: 100%; border-radius: 4px; cursor: pointer; transition: transform 0.3s; }
  .kl-process-img img:hover { transform: scale(1.02); }
  .kl-bts-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; width: 100%; }
  .kl-bts-grid img { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 4px; cursor: pointer; transition: transform 0.3s; }
  .kl-bts-grid img:hover { transform: scale(1.05); z-index: 2; position: relative; }

  /* ── HAMBURGER MENU (mobile) ── */
  .hamburger-btn {
    display: none;
    position: fixed; top: calc(14px + var(--safe-top)); right: calc(16px + var(--safe-right));
    z-index: 250;
    width: 40px; height: 40px;
    background: rgba(0,0,0,0.6); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    cursor: pointer;
    flex-direction: column; align-items: center; justify-content: center; gap: 5px;
  }
  .hamburger-btn span {
    display: block; width: 18px; height: 2px;
    background: var(--text); border-radius: 1px;
    transition: all 0.3s;
  }
  .hamburger-btn.open span:nth-child(1) { transform: rotate(45deg) translate(3px, 4px); }
  .hamburger-btn.open span:nth-child(2) { opacity: 0; }
  .hamburger-btn.open span:nth-child(3) { transform: rotate(-45deg) translate(3px, -4px); }
  .mobile-menu {
    display: none;
    position: fixed; inset: 0; z-index: 240;
    background: rgba(0,0,0,0.95); -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
    flex-direction: column; align-items: center; justify-content: center; gap: 32px;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 36px; letter-spacing: 4px;
    color: var(--text); text-decoration: none;
    transition: color 0.2s;
  }
  .mobile-menu a:active { color: var(--gold); }

  @media (max-width: 900px) {
    .section-inner { padding: 0 calc(24px + var(--safe-left)) 0 calc(24px + var(--safe-right)); }
    .kumari-grid, .about-grid, .contact-grid { grid-template-columns: 1fr; }
    .kumari-section .section-inner { padding-left: calc(24px + var(--safe-left)); }
    .works-grid { flex-wrap: wrap; height: auto; max-height: none; gap: 8px; padding: 0 24px; }
    .work-card { flex: 0 0 47% !important; height: 240px; }
    .sidenav { display: none; }
    footer { flex-direction: column; gap: 16px; padding: calc(24px + var(--safe-bottom)) 24px 24px; text-align: center; }
    .hero-cta { gap: 16px; bottom: 12%; }
    .btn { padding: 10px 22px; font-size: 13px; touch-action: manipulation; }
    .trailer-card { aspect-ratio: 16/9; }
    .about-avatar { width: clamp(200px, 50vw, 320px); }
    .about-avatar-wrap { margin-bottom: 20px; transform: translateX(0); }
    .detail-modal-inner { padding: 32px 16px 60px; }
    .ca-masonry { grid-template-columns: 1fr 1fr; grid-template-rows: auto; gap: 4px; }
    .ca-masonry .ca-m { grid-column: auto !important; grid-row: auto !important; aspect-ratio: 1/1; }
    .ill-masonry { column-count: 2; }
    .kg-row-3 { grid-template-columns: 1fr 1fr; }
    .kg-row-4 { grid-template-columns: 1fr 1fr; }
    .kl-world-grid { grid-template-columns: 1fr 1fr; }
    .kl-bts-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .topnav { display: none; }
    .hamburger-btn { display: flex; }
    .work-card { flex: 0 0 100% !important; height: 220px; }
    .works-grid { padding: 0 16px; }
    .detail-grid { grid-template-columns: 1fr 1fr; }
    .detail-grid-item:nth-child(1) { grid-column: 1 / 3; grid-row: auto; min-height: 200px; }
    .hero-cta { flex-direction: column; gap: 12px; bottom: calc(10% + var(--safe-bottom)); }
    .kumari-title { font-size: clamp(32px, 10vw, 60px); }
    .kumari-grid { gap: 32px; }
    .contact-title { font-size: clamp(36px, 12vw, 80px); }
    .ca-masonry { grid-template-columns: 1fr; }
    .ill-masonry { column-count: 1; }
    .kl-world-grid { grid-template-columns: 1fr; grid-auto-rows: 160px; }
    .kl-chars-grid { flex-direction: column; align-items: center; }
    .kl-char-card { max-width: 280px; }
    .detail-banner { aspect-ratio: 16/9; }
    .kg-viewer img { max-width: 100vw; max-height: 85vh; border-radius: 0; }
    .kg-viewer-prev { left: 6px; }
    .kg-viewer-next { right: 6px; }
    .kg-viewer-nav { width: 36px; height: 36px; font-size: 18px; }
    .works-bg-text { font-size: clamp(36px, 12vw, 80px); }
  }
  /* Fix for iOS standalone / PWA mode */
  @supports (-webkit-touch-callout: none) {
    .hero { height: -webkit-fill-available; }
    body { min-height: -webkit-fill-available; }
  }
`;

const AvatarSVG = ({ size = 260 }) => (
  <svg width={size} height={size} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="150" width="60" height="50" rx="8" fill="#2a2a2a" />
    <rect x="78" y="152" width="44" height="12" rx="4" fill="#FFB800" opacity=".6" />
    <rect x="88" y="140" width="24" height="16" rx="4" fill="#c8906e" />
    <ellipse cx="100" cy="115" rx="38" ry="42" fill="#d4956e" />
    <ellipse cx="100" cy="80" rx="40" ry="22" fill="#1a1a1a" />
    <ellipse cx="75" cy="90" rx="12" ry="20" fill="#1a1a1a" />
    <ellipse cx="125" cy="90" rx="12" ry="20" fill="#1a1a1a" />
    <rect x="76" y="112" width="20" height="14" rx="6" fill="none" stroke="#111" strokeWidth="2.5" />
    <rect x="104" y="112" width="20" height="14" rx="6" fill="none" stroke="#111" strokeWidth="2.5" />
    <line x1="96" y1="119" x2="104" y2="119" stroke="#111" strokeWidth="2" />
    <line x1="72" y1="116" x2="68" y2="114" stroke="#111" strokeWidth="2" />
    <line x1="128" y1="116" x2="132" y2="114" stroke="#111" strokeWidth="2" />
    <rect x="77" y="113" width="18" height="12" rx="5" fill="#222" opacity=".5" />
    <rect x="105" y="113" width="18" height="12" rx="5" fill="#222" opacity=".5" />
    <ellipse cx="100" cy="128" rx="5" ry="3" fill="#bb7e58" />
    <path d="M90 136 Q100 143 110 136" stroke="#a06040" strokeWidth="2" fill="none" strokeLinecap="round" />
    <ellipse cx="62" cy="118" rx="7" ry="9" fill="#c8906e" />
    <ellipse cx="138" cy="118" rx="7" ry="9" fill="#c8906e" />
  </svg>
);

export default function MithunPortfolio() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("HOME");
  const [works, setWorks] = useState([]);
  const [worksLoading, setWorksLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [formMsg, setFormMsg] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewerIdx, setViewerIdx] = useState(null); // fullscreen viewer index into KUMARI_GALLERY
  const [caViewerIdx, setCaViewerIdx] = useState(null); // fullscreen viewer index into CHARACTER_ART_GALLERY
  const [caSlideIdx, setCaSlideIdx] = useState(0); // banner slideshow index
  const [c2dViewerIdx, setC2dViewerIdx] = useState(null); // fullscreen viewer index into CONCEPT_2D_GALLERY
  const [illViewerIdx, setIllViewerIdx] = useState(null); // fullscreen viewer index into ILLUSTRATIONS_GALLERY
  const [animViewerOpen, setAnimViewerOpen] = useState(false);
  const animVideoRef = useRef(null);
  const animHoverRef = useRef(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await fetch(`${API_URL}/works`);
        const data = await res.json();
        if (data.success) {
          const merged = data.data.map((w, i) => ({
            ...w,
            imageUrl: WORKS_DATA[i]?.imageUrl || w.imageUrl,
            objectPosition: WORKS_DATA[i]?.objectPosition || "center center",
            description: WORKS_DATA[i]?.description || w.description,
          }));
          setWorks(merged);
        }
      } catch {
        setWorks(WORKS_DATA);
      } finally {
        setWorksLoading(false);
      }
    };
    fetchWorks();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        if (illViewerIdx !== null) { setIllViewerIdx(null); return; }
        if (c2dViewerIdx !== null) { setC2dViewerIdx(null); return; }
        if (caViewerIdx !== null) { setCaViewerIdx(null); return; }
        if (viewerIdx !== null) { setViewerIdx(null); return; }
        setLightbox(null);
      }
      if (illViewerIdx !== null) {
        if (e.key === "ArrowRight") setIllViewerIdx(i => (i + 1) % ILLUSTRATIONS_GALLERY.length);
        if (e.key === "ArrowLeft")  setIllViewerIdx(i => (i - 1 + ILLUSTRATIONS_GALLERY.length) % ILLUSTRATIONS_GALLERY.length);
      }
      if (c2dViewerIdx !== null) {
        if (e.key === "ArrowRight") setC2dViewerIdx(i => (i + 1) % CONCEPT_2D_GALLERY.length);
        if (e.key === "ArrowLeft")  setC2dViewerIdx(i => (i - 1 + CONCEPT_2D_GALLERY.length) % CONCEPT_2D_GALLERY.length);
      }
      if (caViewerIdx !== null) {
        if (e.key === "ArrowRight") setCaViewerIdx(i => (i + 1) % CHARACTER_ART_GALLERY.length);
        if (e.key === "ArrowLeft")  setCaViewerIdx(i => (i - 1 + CHARACTER_ART_GALLERY.length) % CHARACTER_ART_GALLERY.length);
      }
      if (viewerIdx !== null) {
        if (e.key === "ArrowRight") setViewerIdx(i => (i + 1) % KUMARI_GALLERY.length);
        if (e.key === "ArrowLeft")  setViewerIdx(i => (i - 1 + KUMARI_GALLERY.length) % KUMARI_GALLERY.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [viewerIdx, caViewerIdx, c2dViewerIdx, illViewerIdx]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
      { threshold: 0.4 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Ensure viewport meta tag has viewport-fit=cover for iOS safe areas
  useEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      const content = meta.getAttribute('content') || '';
      if (!content.includes('viewport-fit=cover')) {
        meta.setAttribute('content', content + ', viewport-fit=cover');
      }
    } else {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      document.head.appendChild(meta);
    }
  }, []);

  const openLightbox = (w) => {
    const idx = WORKS_DATA.findIndex(d => d._id === w._id);
    setLightbox(w);
    setActiveTab(idx >= 0 ? idx : 0);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) { setFormStatus("error"); setFormMsg("Please fill in all fields."); return; }
    setFormStatus("loading");
    try {
      const res = await fetch(`${API_URL}/contact`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setFormStatus("success"); setFormMsg("Message sent! I'll get back to you soon."); setForm({ name: "", email: "", subject: "", message: "" }); }
      else throw new Error(data.message);
    } catch (err) { setFormStatus("error"); setFormMsg(err.message || "Something went wrong."); }
  };

  return (
    <>
      <style>{style}</style>
      <div className="noise" />

      {/* ── RICH DETAIL MODAL ── */}
      {lightbox && (
        <div className="detail-modal" onClick={() => setLightbox(null)}>
          <button className="detail-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="detail-modal-inner" onClick={(e) => e.stopPropagation()}>

            {/* Wide banner with title overlay */}
            <div className="detail-banner">
              <img
                src={lightbox._id === "1" ? KUMARI_GALLERY[0].src : lightbox.imageUrl}
                alt={lightbox.title}
                style={{ objectPosition: lightbox._id === "1" ? "center center" : lightbox.objectPosition }}
              />
              <div className="detail-banner-overlay">
                {/* Back button */}
                <button className="detail-back" onClick={(e) => { e.stopPropagation(); setLightbox(null); }}>
                  ‹
                </button>
              </div>
            </div>

            {/* Dot navigation */}
            {lightbox._id !== "1" && (
              <div className="detail-dots">
                {WORKS_DATA.map((_, i) => (
                  <button
                    key={i}
                    className={`detail-dot${i === activeTab ? " active" : ""}`}
                    onClick={() => { setActiveTab(i); setLightbox(WORKS_DATA[i]); }}
                  />
                ))}
              </div>
            )}

            {/* Description */}
            {lightbox._id !== "1" && (
              <p className="detail-desc">{lightbox.description}</p>
            )}

            {/* ── KUMARI GALLERY (only for card 1) ── */}
            {lightbox._id === "1" ? (
              <div className="kumari-landing">
                {/* Title */}
                <div className="kl-stitle-wrap" style={{ marginTop: 10 }}>
                  <div className="kl-stitle-bg">KUMARI KANDAM</div>
                  <div className="kl-stitle-fg">Kumari Kandam</div>
                </div>
                
                <p className="kl-text">
                  An animated feature following Kumari — a young warrior navigating the mythic lost continent. A passion project blending traditional storytelling with modern 2D animation techniques, featuring original character designs and rich world-building across every frame.
                </p>

                <img className="kl-hero-img" src={KUMARI_GALLERY[1].src} alt="Kumari Splash" onClick={() => setViewerIdx(1)} />

                {/* CHARACTERS */}
                <div className="kl-stitle-wrap">
                  <div className="kl-stitle-bg">CHARACTERS</div>
                  <div className="kl-stitle-fg">Characters</div>
                </div>
                <p className="kl-text">
                  Breathing life into our original characters. Each design is carefully crafted to reflect their personality and role in the story, ensuring they are memorable and expressive.
                </p>

                <div className="kl-chars-grid">
                  <div className="kl-char-card" onClick={() => setViewerIdx(16)}>
                    <img src={KUMARI_GALLERY[16].src} alt="Nila" />
                    <div className="kl-char-name">NILA</div>
                  </div>
                  <div className="kl-char-card" onClick={() => setViewerIdx(15)}>
                    <img src={KUMARI_GALLERY[15].src} alt="Kathir" />
                    <div className="kl-char-name">KATHIR</div>
                  </div>
                </div>

                <p className="kl-text">
                  In our process, every character has a character sheet detailing their turnaround, expressions, and color palettes to ensure consistency throughout the animation pipeline.
                </p>
                
                <div className="kl-char-sheets">
                  <img src={KUMARI_GALLERY[8].src} alt="Character Sheet 1" onClick={() => setViewerIdx(8)} />
                  <img src={KUMARI_GALLERY[10].src} alt="Character Sheet 2" onClick={() => setViewerIdx(10)} />
                </div>

                {/* THE WORLD */}
                <div className="kl-stitle-wrap">
                  <div className="kl-stitle-bg">THE WORLD</div>
                  <div className="kl-stitle-fg">The World</div>
                </div>
                <p className="kl-text">
                  Explore the vast, magical continent. The world design focuses on atmospheric environments, combining lush natural landscapes with ancient architecture.
                </p>

                <div className="kl-world-grid">
                  <img className="kw-img kw-1" src={KUMARI_GALLERY[2].src} onClick={() => setViewerIdx(2)} />
                  <img className="kw-img kw-2" src={KUMARI_GALLERY[3].src} onClick={() => setViewerIdx(3)} />
                  <img className="kw-img kw-3" src={KUMARI_GALLERY[4].src} onClick={() => setViewerIdx(4)} />
                  <img className="kw-img kw-4" src={KUMARI_GALLERY[5].src} onClick={() => setViewerIdx(5)} />
                  <img className="kw-img kw-5" src={KUMARI_GALLERY[6].src} onClick={() => setViewerIdx(6)} />
                  <img className="kw-img kw-6" src={KUMARI_GALLERY[7].src} onClick={() => setViewerIdx(7)} />
                  <img className="kw-img kw-7" src={KUMARI_GALLERY[9].src} onClick={() => setViewerIdx(9)} />
                </div>

                {/* THE PROCESS */}
                <div className="kl-stitle-wrap">
                  <div className="kl-stitle-bg">THE PROCESS</div>
                  <div className="kl-stitle-fg">The Process</div>
                </div>
                <p className="kl-text">
                  Animation is a multi-step journey. From initial concepts and storyboarding to final compositing and sound design, every step requires precision and creativity.
                </p>
                <div className="kl-process-img">
                  <img src={KUMARI_GALLERY[17].src} alt="Skills/Process" onClick={() => setViewerIdx(17)} />
                </div>

                {/* BEHIND THE SCENES */}
                <div className="kl-stitle-wrap">
                  <div className="kl-stitle-bg">BEHIND THE SCENES</div>
                  <div className="kl-stitle-fg">Behind the Scenes</div>
                </div>
                <p className="kl-text">
                  Meet the passionate team behind the magic. A dedicated group of artists, animators, and voice actors collaborating to bring Kumari to life.
                </p>
                <div className="kl-bts-grid">
                  <img src={KUMARI_GALLERY[11].src} onClick={() => setViewerIdx(11)} />
                  <img src={KUMARI_GALLERY[12].src} onClick={() => setViewerIdx(12)} />
                  <img src={KUMARI_GALLERY[13].src} onClick={() => setViewerIdx(13)} />
                  <img src={KUMARI_GALLERY[14].src} onClick={() => setViewerIdx(14)} />
                </div>
              </div>
            ) : lightbox._id === "2" ? (
              /* ── CHARACTER ART — Banner + Masonry ── */
              <>
                <p className="kg-section-label">── Gallery</p>
                {/* Masonry Grid
                    Layout (4 cols):
                    [7 Jinx portrait x2] [1 Hime]     [2 Jinx2]   [8 Visitor2 portrait x2]
                    [7 ...continued   ] [3 Kate]     [4 Shami]   [8 ...continued         ]
                    [0 Arthur x2      ] [5 Visitor1 x2          ] [6 OrigChar2            ]
                    [9 Original char portrait — full width banner]
                */}
                <div className="ca-masonry">
                  {/* Jinx portrait — col1, rows 1-2 */}
                  <div className="ca-m" style={{gridColumn:1,gridRow:'1/span 2'}} onClick={()=>setCaViewerIdx(7)}>
                    <img src={CHARACTER_ART_GALLERY[7].src} alt={CHARACTER_ART_GALLERY[7].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[7].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[7].w}×{CHARACTER_ART_GALLERY[7].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:2,gridRow:1}} onClick={()=>setCaViewerIdx(1)}>
                    <img src={CHARACTER_ART_GALLERY[1].src} alt={CHARACTER_ART_GALLERY[1].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[1].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[1].w}×{CHARACTER_ART_GALLERY[1].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:3,gridRow:1}} onClick={()=>setCaViewerIdx(2)}>
                    <img src={CHARACTER_ART_GALLERY[2].src} alt={CHARACTER_ART_GALLERY[2].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[2].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[2].w}×{CHARACTER_ART_GALLERY[2].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:4,gridRow:'1/span 2'}} onClick={()=>setCaViewerIdx(8)}>
                    <img src={CHARACTER_ART_GALLERY[8].src} alt={CHARACTER_ART_GALLERY[8].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[8].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[8].w}×{CHARACTER_ART_GALLERY[8].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:2,gridRow:2}} onClick={()=>setCaViewerIdx(3)}>
                    <img src={CHARACTER_ART_GALLERY[3].src} alt={CHARACTER_ART_GALLERY[3].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[3].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[3].w}×{CHARACTER_ART_GALLERY[3].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:3,gridRow:2}} onClick={()=>setCaViewerIdx(4)}>
                    <img src={CHARACTER_ART_GALLERY[4].src} alt={CHARACTER_ART_GALLERY[4].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[4].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[4].w}×{CHARACTER_ART_GALLERY[4].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:'1/span 2',gridRow:3}} onClick={()=>setCaViewerIdx(0)}>
                    <img src={CHARACTER_ART_GALLERY[0].src} alt={CHARACTER_ART_GALLERY[0].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[0].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[0].w}×{CHARACTER_ART_GALLERY[0].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:3,gridRow:3}} onClick={()=>setCaViewerIdx(5)}>
                    <img src={CHARACTER_ART_GALLERY[5].src} alt={CHARACTER_ART_GALLERY[5].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[5].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[5].w}×{CHARACTER_ART_GALLERY[5].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:4,gridRow:3}} onClick={()=>setCaViewerIdx(6)}>
                    <img src={CHARACTER_ART_GALLERY[6].src} alt={CHARACTER_ART_GALLERY[6].label}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[6].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[6].w}×{CHARACTER_ART_GALLERY[6].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                  <div className="ca-m" style={{gridColumn:'1/span 4',gridRow:4}} onClick={()=>setCaViewerIdx(9)}>
                    <img src={CHARACTER_ART_GALLERY[9].src} alt={CHARACTER_ART_GALLERY[9].label} style={{objectPosition:'center 15%'}}/>
                    <div className="ca-m-lbl">{CHARACTER_ART_GALLERY[9].label}<span className="ca-m-dim">{CHARACTER_ART_GALLERY[9].w}×{CHARACTER_ART_GALLERY[9].h}</span></div>
                    <div className="ca-m-exp">⤢</div>
                  </div>
                </div>
              </>
            ) : lightbox._id === "3" ? (
              /* ── CONCEPT & 2D ART GALLERY ── */
              <>
                {/* Artboards — row of 3, then row of 3. Using flex layout for perfect dimension matching */}
                <p className="kg-section-label">── Artboard Explorations</p>
                {[[0,1,2],[3,4,5]].map((grp, ri) => (
                  <div key={ri} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                    {grp.map(i => {
                      const img = CONCEPT_2D_GALLERY[i];
                      const ratio = img.w / img.h;
                      return (
                        <div key={i} className="kg-cell" style={{ flex: `${ratio} 1 0%`, aspectRatio: `${img.w} / ${img.h}` }} onClick={()=>setC2dViewerIdx(i)}>
                          <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div className="kg-cell-label">{img.label}<span className="kg-dim">{img.w}×{img.h}</span></div>
                          <div className="kg-expand">⤢</div>
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Character Sheets — Group all 3 together in a flex row so they perfectly balance each other */}
                <p className="kg-section-label">── Character Sheets</p>
                <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                  {[6, 7, 8].map(i => {
                    const img = CONCEPT_2D_GALLERY[i];
                    const ratio = img.w / img.h;
                    return (
                      <div key={i} className="kg-cell" style={{ flex: `${ratio} 1 0%`, aspectRatio: `${img.w} / ${img.h}` }} onClick={()=>setC2dViewerIdx(i)}>
                        <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="kg-cell-label">{img.label}<span className="kg-dim">{img.w}×{img.h}</span></div>
                        <div className="kg-expand">⤢</div>
                      </div>
                    );
                  })}
                </div>

                {/* Process — 2 per row */}
                <p className="kg-section-label">── Process &amp; Development</p>
                {[[9,10],[11,12],[13,14],[15,16],[17,18]].map((pair,ri) => (
                  <div key={ri} className="kg-row kg-row-2" style={{marginBottom:6}}>
                    {pair.map(i => (
                      <div key={i} className="kg-cell standard" onClick={()=>setC2dViewerIdx(i)}>
                        <img src={CONCEPT_2D_GALLERY[i].src} alt={CONCEPT_2D_GALLERY[i].label}/>
                        <div className="kg-cell-label">{CONCEPT_2D_GALLERY[i].label}<span className="kg-dim">{CONCEPT_2D_GALLERY[i].w}×{CONCEPT_2D_GALLERY[i].h}</span></div>
                        <div className="kg-expand">⤢</div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Misc — Using flex layout for perfect dimension matching */}
                <p className="kg-section-label">── Miscellaneous</p>
                {[[19,20,21], [22,23,24]].map((grp, ri) => (
                  <div key={ri} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                    {grp.map(i => {
                      const img = CONCEPT_2D_GALLERY[i];
                      const ratio = img.w / img.h;
                      return (
                        <div key={i} className="kg-cell" style={{ flex: `${ratio} 1 0%`, aspectRatio: `${img.w} / ${img.h}` }} onClick={()=>setC2dViewerIdx(i)}>
                          <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div className="kg-cell-label">{img.label}<span className="kg-dim">{img.w}×{img.h}</span></div>
                          <div className="kg-expand">⤢</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </>
            ) : lightbox._id === "5" ? (
              /* ── BACKGROUND ART / ILLUSTRATIONS — manual flex-column collage ── */
              /* 3 manually balanced columns. flex-grow = aspect ratio per item,
                 so columns stretch to identical height with zero black gaps.
                 Col 1: [10,2,0,3,11,6]  ~5.50
                 Col 2: [9,14,8,1,4,5]   ~5.42
                 Col 3: [7,13,12,15]      ~4.82
                 Flex-grow distributes any difference proportionally → imperceptible crop */
              <>
                <p className="kg-section-label">── Gallery</p>
                {(() => {
                  const cols = [
                    [10, 2, 0, 3, 11, 6],
                    [9, 14, 8, 1, 4, 5],
                    [7, 13, 12, 15],
                  ];
                  return (
                    <div style={{ display: 'flex', gap: 5, alignItems: 'stretch' }}>
                      {cols.map((col, ci) => (
                        <div key={ci} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                          {col.map((i) => {
                            const img = ILLUSTRATIONS_GALLERY[i];
                            const ratio = Math.min(img.h / img.w, 1.8);
                            return (
                              <div
                                key={i}
                                className="ill-masonry-item"
                                style={{ flex: `${ratio} 1 0%`, position: 'relative', overflow: 'hidden' }}
                                onClick={() => setIllViewerIdx(i)}
                              >
                                <img
                                  src={img.src}
                                  alt={img.label}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                                <div className="ill-masonry-label">
                                  {img.label}
                                  <span className="kg-dim" style={{ display: 'block', marginTop: 2, opacity: 0.6 }}>
                                    {img.w}×{img.h}
                                  </span>
                                </div>
                                <div className="ill-masonry-exp">⤢</div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </>
            ) : lightbox._id === "4" ? (
              /* ── ANIMATION WORKS — Cinematic Player ── */
              <>
                <p className="kg-section-label">── Featured Animation</p>
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: 8,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#000',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={() => {
                    animHoverRef.current = true;
                    if (animVideoRef.current) {
                      animVideoRef.current.muted = true;
                      animVideoRef.current.currentTime = 28;
                      animVideoRef.current.play().catch(()=>{});
                    }
                  }}
                  onMouseLeave={() => {
                    animHoverRef.current = false;
                    if (animVideoRef.current) {
                      animVideoRef.current.pause();
                    }
                  }}
                  onClick={() => {
                    if (animVideoRef.current) animVideoRef.current.pause();
                    setAnimViewerOpen(true);
                  }}
                >
                  <video
                    ref={animVideoRef}
                    src={animationVideo}
                    poster={animationImg}
                    preload="none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onTimeUpdate={(e) => {
                      if (animHoverRef.current && e.target.currentTime >= 35) {
                        e.target.currentTime = 28;
                      }
                    }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none', transition: 'background 0.3s'
                  }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: '50%', background: 'var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(255,184,0,0.4)', transition: 'transform 0.2s'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#111" style={{marginLeft: 4}}>
                        <path d="M5 3l14 9-14 9V3z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Generic placeholder grid for other cards */
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {[0,1,2,3].map(i => (
                  <div key={i} className="kg-cell standard">
                    <img src={lightbox.imageUrl} alt="" style={{ objectPosition: lightbox.objectPosition }} />
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── FULLSCREEN IMAGE VIEWER — Kumari ── */}
      {viewerIdx !== null && (
        <div className="kg-viewer" onClick={() => setViewerIdx(null)}>
          <button className="kg-viewer-close" onClick={() => setViewerIdx(null)}>✕</button>
          <button className="kg-viewer-nav kg-viewer-prev"
            onClick={e => { e.stopPropagation(); setViewerIdx(i => (i - 1 + KUMARI_GALLERY.length) % KUMARI_GALLERY.length); }}>‹</button>
          <img
            src={KUMARI_GALLERY[viewerIdx].src}
            alt={KUMARI_GALLERY[viewerIdx].label}
            onClick={e => e.stopPropagation()}
          />
          <button className="kg-viewer-nav kg-viewer-next"
            onClick={e => { e.stopPropagation(); setViewerIdx(i => (i + 1) % KUMARI_GALLERY.length); }}>›</button>
          <div className="kg-viewer-counter">{viewerIdx + 1} / {KUMARI_GALLERY.length} — {KUMARI_GALLERY[viewerIdx].label}</div>
        </div>
      )}

      {/* ── FULLSCREEN IMAGE VIEWER — Character Art ── */}
      {caViewerIdx !== null && (
        <div className="kg-viewer" onClick={() => setCaViewerIdx(null)}>
          <button className="kg-viewer-close" onClick={() => setCaViewerIdx(null)}>✕</button>
          <button className="kg-viewer-nav kg-viewer-prev"
            onClick={e => { e.stopPropagation(); setCaViewerIdx(i => (i - 1 + CHARACTER_ART_GALLERY.length) % CHARACTER_ART_GALLERY.length); }}>‹</button>
          <img
            src={CHARACTER_ART_GALLERY[caViewerIdx].src}
            alt={CHARACTER_ART_GALLERY[caViewerIdx].label}
            onClick={e => e.stopPropagation()}
          />
          <button className="kg-viewer-nav kg-viewer-next"
            onClick={e => { e.stopPropagation(); setCaViewerIdx(i => (i + 1) % CHARACTER_ART_GALLERY.length); }}>›</button>
          <div className="kg-viewer-counter">{caViewerIdx + 1} / {CHARACTER_ART_GALLERY.length} &nbsp;·&nbsp; {CHARACTER_ART_GALLERY[caViewerIdx].label} &nbsp;·&nbsp; {CHARACTER_ART_GALLERY[caViewerIdx].w}×{CHARACTER_ART_GALLERY[caViewerIdx].h}px</div>
        </div>
      )}

      {/* ── FULLSCREEN IMAGE VIEWER — Illustrations ── */}
      {illViewerIdx !== null && (
        <div className="kg-viewer" onClick={() => setIllViewerIdx(null)}>
          <button className="kg-viewer-close" onClick={() => setIllViewerIdx(null)}>✕</button>
          <button className="kg-viewer-nav kg-viewer-prev"
            onClick={e => { e.stopPropagation(); setIllViewerIdx(i => (i - 1 + ILLUSTRATIONS_GALLERY.length) % ILLUSTRATIONS_GALLERY.length); }}>‹</button>
          <img
            src={ILLUSTRATIONS_GALLERY[illViewerIdx].src}
            alt={ILLUSTRATIONS_GALLERY[illViewerIdx].label}
            onClick={e => e.stopPropagation()}
          />
          <button className="kg-viewer-nav kg-viewer-next"
            onClick={e => { e.stopPropagation(); setIllViewerIdx(i => (i + 1) % ILLUSTRATIONS_GALLERY.length); }}>›</button>
          <div className="kg-viewer-counter">{illViewerIdx + 1} / {ILLUSTRATIONS_GALLERY.length} &nbsp;·&nbsp; {ILLUSTRATIONS_GALLERY[illViewerIdx].label} &nbsp;·&nbsp; {ILLUSTRATIONS_GALLERY[illViewerIdx].w}×{ILLUSTRATIONS_GALLERY[illViewerIdx].h}px</div>
        </div>
      )}

      {/* ── FULLSCREEN IMAGE VIEWER — Concept & 2D Art ── */}
      {c2dViewerIdx !== null && (
        <div className="kg-viewer" onClick={() => setC2dViewerIdx(null)}>
          <button className="kg-viewer-close" onClick={() => setC2dViewerIdx(null)}>✕</button>
          <button className="kg-viewer-nav kg-viewer-prev"
            onClick={e => { e.stopPropagation(); setC2dViewerIdx(i => (i - 1 + CONCEPT_2D_GALLERY.length) % CONCEPT_2D_GALLERY.length); }}>‹</button>
          <img
            src={CONCEPT_2D_GALLERY[c2dViewerIdx].src}
            alt={CONCEPT_2D_GALLERY[c2dViewerIdx].label}
            onClick={e => e.stopPropagation()}
          />
          <button className="kg-viewer-nav kg-viewer-next"
            onClick={e => { e.stopPropagation(); setC2dViewerIdx(i => (i + 1) % CONCEPT_2D_GALLERY.length); }}>›</button>
          <div className="kg-viewer-counter">{c2dViewerIdx + 1} / {CONCEPT_2D_GALLERY.length} &nbsp;·&nbsp; {CONCEPT_2D_GALLERY[c2dViewerIdx].label} &nbsp;·&nbsp; {CONCEPT_2D_GALLERY[c2dViewerIdx].w}×{CONCEPT_2D_GALLERY[c2dViewerIdx].h}px</div>
        </div>
      )}

      {/* ── FULLSCREEN VIDEO VIEWER — Animation Works ── */}
      {animViewerOpen && (
        <div className="kg-viewer" style={{ background: '#000', zIndex: 2000 }}>
          <button className="kg-viewer-close" onClick={() => setAnimViewerOpen(false)} style={{ zIndex: 2001 }}>✕</button>
          <video
            src={animationVideo}
            controls
            autoPlay
            style={{ width: '100%', height: '100%', maxHeight: '100vh', objectFit: 'contain' }}
          />
        </div>
      )}

      {/* ── HAMBURGER MENU (mobile ≤600px) ── */}
      <button
        className={`hamburger-btn${mobileMenuOpen ? ' open' : ''}`}
        onClick={() => setMobileMenuOpen(v => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link}`} onClick={() => { setMobileMenuOpen(false); scrollTo(link); }}>{link}</a>
        ))}
      </div>

      <nav className="topnav">
        <a href="#" onClick={e => { e.preventDefault(); scrollTo('ABOUT'); }}>About</a>
        <a href="#" onClick={e => { e.preventDefault(); scrollTo('CONTACT'); }}>Contact</a>
      </nav>



      {/* HERO */}
      <section id="HOME" data-section="HOME" ref={(el) => (sectionRefs.current.HOME = el)} className="hero">

        {/* Full-screen background video — video already has the MITHUN title + artwork design baked in */}
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/reel.mp4" type="video/mp4" />
        </video>

        {/* Gold box top-left */}
        <div className="hero-amber-box" />



        {/* CTA buttons in the lower artwork area */}
        <div className="hero-cta">
          <button className="btn btn-gold" onClick={() => scrollTo("WORKS")}>See Work</button>
          <button className="btn btn-outline" onClick={() => scrollTo("KUMARI")}>
            <span style={{ fontSize: 16 }}>▶</span> Play reel
          </button>
        </div>

      </section>

      {/* KUMARI */}
      <section id="KUMARI" data-section="KUMARI" ref={(el) => (sectionRefs.current.KUMARI = el)} className="section kumari-section">
        <div className="section-inner">
          <div className="kumari-grid">
            <div className="trailer-card" style={{ border: 'none', background: '#000' }}>
              <iframe
                src="https://www.youtube.com/embed/GptKsCT8Tag?loop=1&playlist=GptKsCT8Tag&controls=1&rel=0"
                title="Kumari Official Trailer"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <div>
              <div className="kumari-tag">✦ KUMARI: THE LOST CONTINENT ✦</div>
              <div className="gold-line" />
              <div className="kumari-title">KUMARI<br /><span>THE LOST</span><br />CONTINENT</div>
              <p className="kumari-desc">An animated feature following Kumari — a young warrior navigating the mythic lost continent. A passion project blending traditional storytelling with modern 2D animation techniques, featuring original character designs and rich world-building across every frame.</p>
              <div className="btn-group">
                <button className="btn btn-gold" onClick={() => window.open('https://www.youtube.com/watch?v=GptKsCT8Tag', '_blank')}>See Kumari</button>
                <button className="btn btn-outline" onClick={() => scrollTo('WORKS')}>Other works</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="WORKS" data-section="WORKS" ref={(el) => (sectionRefs.current.WORKS = el)} className="section">
        <div className="section-inner">
          <div className="works-title-wrap">
            <div className="works-bg-text">PROJECTS AND WORKS</div>
            <div className="works-script-over">Projects and works</div>
          </div>
        </div>
        <div className="works-grid">
          {worksLoading
            ? Array(5).fill(0).map((_, i) => <div key={i} className="works-skeleton" />)
            : works.map((w) => (
              <div className="work-card" key={w._id}>
                <img src={w.imageUrl} alt={w.title} style={{ objectPosition: w.objectPosition }} />
                <div className="work-card-label">{w.tag}</div>
                <div className="work-card-name">{w.title}</div>
                <div className="work-card-overlay">
                  <div className="work-card-title">{w.title}</div>
                  <div className="work-card-desc">{w.description}</div>
                  <button
                    className="work-card-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (w._id === "1") { window.open('/kumari', '_blank'); }
                      else { openLightbox(w); }
                    }}
                  >
                    ▶ View
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* ABOUT */}
      <section id="ABOUT" data-section="ABOUT" ref={(el) => (sectionRefs.current.ABOUT = el)} className="section about-section">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-avatar-wrap">
              <img src={avatarImg} alt="Mithun avatar" className="about-avatar" />
            </div>
            <div>
              <div className="about-eyebrow">Who am I</div>
              <div className="about-title">ABOUT</div>
              <div className="gold-line" />
              <p className="about-text">I'm Mithun — an animator, illustrator, and 2D artist passionate about crafting stories that breathe life into characters. With a background spanning character design, concept art, and full-length animated film production, I bring worlds to life frame by frame.</p>
              <p className="about-text">My work blends cinematic storytelling with deeply expressive character art. Whether it's an intimate character moment or a sweeping action sequence, I approach every project with meticulous attention to movement, mood, and narrative impact.</p>
              <button className="btn btn-gold" style={{ marginTop: 8 }}>Download CV</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="CONTACT" data-section="CONTACT" ref={(el) => (sectionRefs.current.CONTACT = el)} className="section">
        <div className="section-inner">
          <div className="contact-title">LET'S CONNECT</div>
          <div className="contact-grid">
            <div>
              <div className="gold-line" />
              {formStatus === "success" && <div className="form-success">{formMsg}</div>}
              {formStatus === "error" && <div className="form-error">{formMsg}</div>}
              <div className="form-group"><input name="name" placeholder="Your Name" value={form.name} onChange={handleFormChange} /></div>
              <div className="form-group"><input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleFormChange} /></div>
              <div className="form-group"><input name="subject" placeholder="Subject" value={form.subject} onChange={handleFormChange} /></div>
              <div className="form-group"><textarea name="message" rows="5" placeholder="Your Message" value={form.message} onChange={handleFormChange} /></div>
              <button className="btn btn-gold" onClick={handleSubmit} disabled={formStatus === "loading"} style={{ marginTop: 4 }}>
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
            <div className="contact-info">
              {[
                { icon: "✉", label: "Email", val: "hello@mithun.art" },
                { icon: "📍", label: "Based in", val: "Chennai, India" },
                { icon: "🎬", label: "Available for", val: "Freelance & Collaborations" },
              ].map((item) => (
                <div className="contact-info-item" key={item.label}>
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">MITHUN</div>
        <div className="footer-links">
          <a href="#">About</a><a href="#">Contact</a>
          <a href="#">Works</a><a href="#">Instagram</a>
        </div>
        <div className="footer-copy">© 2024 Mithun. All rights reserved.</div>
      </footer>
    </>
  );
}
