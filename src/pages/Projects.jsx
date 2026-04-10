import React, { useState } from 'react'
import infinityCasteGif from "../assets/infinity-castle.gif"

const projects = [
  {
    id: "web",
    num: "01",
    title: "Anime Website",
    sub: "Web / Frontend",
    desc: "Build a site that bleeds anime. Fan wikis, character databases, streaming dashboards, seasonal trackers — if it lives in a browser and has that energy, it counts.",
    examples: ["Fan Wiki", "Season Tracker", "Character Database", "Watch Party App"],
  },
  {
    id: "game",
    num: "02",
    title: "Anime Game",
    sub: "Game Dev",
    desc: "2D fighters, turn-based RPGs, infinite runners, browser puzzlers — as long as the world, characters, or story pulls from anime culture, you're in.",
    examples: ["2D Fighter", "Turn-Based RPG", "Browser Puzzle", "Infinite Runner"],
  },
  {
    id: "vn",
    num: "03",
    title: "Visual Novel",
    sub: "Narrative / Interactive",
    desc: "An original story, branching choices, hand-drawn or AI-assisted art — the classic anime storytelling format. Ship something that makes people feel something.",
    examples: ["Branching Story", "Dating Sim", "Mystery VN", "Short Story"],
  },
  {
    id: "wild",
    num: "04",
    title: "Wild Card",
    sub: "Anything Goes",
    desc: "Discord bots, AI tools, manga generators, music visualizers, AR filters — if it's anime and it's built, we want to see it. No genre restrictions here.",
    examples: ["Discord Bot", "AI Manga Tool", "Music Visualizer", "AR Filter"],
  },
]

const Projects = () => {
  const [active, setActive] = useState(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Zen+Kaku+Gothic+New:wght@400;700;900&display=swap');

        :root {
          --crimson: #c31e1e;
          --crimson-bright: #e83333;
          --crimson-dim: #7a1111;
          --white: #f0e6e6;
        }

        .projects-root {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          background: #050102;
          overflow: hidden;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px 100px;
        }

        .projects-root .bg-gif {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
          filter: blur(4px) saturate(0.9);
          pointer-events: none;
        }

        .projects-root .bg-vignette {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 10%, rgba(5,1,2,0.88) 80%);
          z-index: 1;
          pointer-events: none;
        }

        .projects-root .bg-scanlines {
          position: fixed;
          inset: 0;
          z-index: 2;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px);
          pointer-events: none;
        }

        .projects-root .corner {
          position: fixed;
          z-index: 5;
          width: 20px;
          height: 20px;
        }
        .projects-root .corner-tl { top: 32px; left: 32px; border-top: 2px solid var(--crimson-dim); border-left: 2px solid var(--crimson-dim); }
        .projects-root .corner-tr { top: 32px; right: 32px; border-top: 2px solid var(--crimson-dim); border-right: 2px solid var(--crimson-dim); }
        .projects-root .corner-bl { bottom: 32px; left: 32px; border-bottom: 2px solid var(--crimson-dim); border-left: 2px solid var(--crimson-dim); }
        .projects-root .corner-br { bottom: 32px; right: 32px; border-bottom: 2px solid var(--crimson-dim); border-right: 2px solid var(--crimson-dim); }

        .projects-root .top-rule {
          position: fixed;
          top: 48px; left: 60px; right: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--crimson-dim), transparent);
          z-index: 4;
        }

        .projects-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .projects-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--crimson-bright);
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.5s 0.1s ease forwards;
        }

        .projects-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 11vw, 120px);
          line-height: 0.9;
          color: var(--white);
          position: relative;
          opacity: 0;
          animation: fadeUp 0.6s 0.25s ease forwards;
        }

        .projects-title-glow {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50%;
          height: 24px;
          background: var(--crimson);
          filter: blur(28px);
          opacity: 0.2;
        }

        .projects-divider {
          width: 60px;
          height: 2px;
          background: var(--crimson-bright);
          margin: 20px auto 0;
          opacity: 0;
          animation: fadeIn 0.5s 0.6s ease forwards;
        }

        /* Accordion list */
        .project-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid rgba(122,17,17,0.3);
        }

        .project-row {
          border-bottom: 1px solid rgba(122,17,17,0.3);
          overflow: hidden;
          opacity: 0;
          animation: fadeUp 0.5s ease forwards;
          cursor: pointer;
        }

        .project-row-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 8px;
          transition: background 0.2s;
          user-select: none;
        }

        .project-row:hover .project-row-header,
        .project-row.is-open .project-row-header {
          background: rgba(195,30,30,0.04);
        }

        .project-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 0.15em;
          color: var(--crimson-bright);
          width: 28px;
          flex-shrink: 0;
        }

        .project-row-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(26px, 4vw, 38px);
          color: var(--white);
          flex: 1;
          line-height: 1;
          transition: color 0.2s;
        }

        .project-row:hover .project-row-title,
        .project-row.is-open .project-row-title {
          color: var(--crimson-bright);
        }

        .project-sub {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(240,230,230,0.35);
          flex-shrink: 0;
        }

        .project-chevron {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          color: var(--crimson-dim);
          transition: transform 0.3s ease, color 0.2s;
        }

        .project-row.is-open .project-chevron {
          transform: rotate(180deg);
          color: var(--crimson-bright);
        }

        .project-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-row.is-open .project-body {
          max-height: 300px;
        }

        .project-body-inner {
          padding: 0 8px 28px 48px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-desc {
          font-size: 14px;
          color: rgba(240,230,230,0.6);
          line-height: 1.75;
          max-width: 560px;
        }

        .project-examples {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid rgba(195,30,30,0.3);
          color: rgba(240,230,230,0.55);
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          transition: border-color 0.2s, color 0.2s;
        }

        .project-tag:hover {
          border-color: var(--crimson-bright);
          color: var(--white);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

      <div className="projects-root">
        <img src={infinityCasteGif} alt="" className="bg-gif" aria-hidden="true" />
        <div className="bg-vignette" />
        <div className="bg-scanlines" />
        <div className="top-rule" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="projects-inner">
          <div className="projects-header">
            <p className="projects-eyebrow">What You Can Build</p>
            <h1 className="projects-title">
              Projects
              <div className="projects-title-glow" />
            </h1>
            <div className="projects-divider" />
          </div>

          <div className="project-list">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`project-row${active === p.id ? ' is-open' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                <div className="project-row-header">
                  <span className="project-num">{p.num}</span>
                  <span className="project-row-title">{p.title}</span>
                  <span className="project-sub">{p.sub}</span>
                  <svg className="project-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div className="project-body">
                  <div className="project-body-inner">
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-examples">
                      {p.examples.map(ex => (
                        <span key={ex} className="project-tag">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects