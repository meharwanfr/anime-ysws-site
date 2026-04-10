import React, { useState } from 'react'
import infinityCasteGif from "../assets/infinity-castle.gif"

const faqs = [
  {
    q: "Who can participate?",
    a: "Anyone can join — whether you're a seasoned dev or just starting out. Solo participants and teams of up to 4 are welcome. All skill levels are encouraged to submit.",
  },
  {
    q: "Does my project have to be anime?",
    a: "Yes — that's the whole vibe. Your project needs to have a clear anime theme, whether in design, story, characters, or concept. It doesn't have to be a specific series, original ideas are absolutely valid.",
  },
  {
    q: "How long is the hackathon?",
    a: "You'll have 48 hours from the start signal to submit. We'll announce exact dates and times closer to the event — make sure you RSVP to get notified.",
  },
  {
    q: "What tech stack can I use?",
    a: "Whatever you want. React, Unity, Ren'Py, vanilla JS, Godot, Python — no restrictions on tools or frameworks. Use what helps you build best.",
  },
  {
    q: "How will projects be judged?",
    a: "Projects are scored on creativity, anime authenticity, technical execution, and overall polish. A panel of judges will review all submissions after the deadline.",
  },
  {
    q: "Can I use AI tools or assets?",
    a: "Yes — AI-generated art, audio, or code assistance is allowed. Just make sure your core concept and implementation are your own. Fully generated projects with no original work won't score well.",
  },
  {
    q: "Where do I submit my project?",
    a: "Submission details will be shared with registered participants before the event. RSVP now to stay in the loop.",
  },
  {
    q: "Is there a fee to enter?",
    a: "Nope. Free to register, free to participate, free to win. Just show up and build.",
  },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

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

        .faq-root {
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

        .faq-root .bg-gif {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          filter: blur(5px) saturate(0.8);
          pointer-events: none;
        }

        .faq-root .bg-vignette {
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 5%, rgba(5,1,2,0.9) 75%);
          z-index: 1;
          pointer-events: none;
        }

        .faq-root .bg-scanlines {
          position: fixed;
          inset: 0;
          z-index: 2;
          background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px);
          pointer-events: none;
        }

        .faq-root .corner {
          position: fixed;
          z-index: 5;
          width: 20px;
          height: 20px;
        }
        .faq-root .corner-tl { top: 32px; left: 32px; border-top: 2px solid var(--crimson-dim); border-left: 2px solid var(--crimson-dim); }
        .faq-root .corner-tr { top: 32px; right: 32px; border-top: 2px solid var(--crimson-dim); border-right: 2px solid var(--crimson-dim); }
        .faq-root .corner-bl { bottom: 32px; left: 32px; border-bottom: 2px solid var(--crimson-dim); border-left: 2px solid var(--crimson-dim); }
        .faq-root .corner-br { bottom: 32px; right: 32px; border-bottom: 2px solid var(--crimson-dim); border-right: 2px solid var(--crimson-dim); }

        .faq-root .top-rule {
          position: fixed;
          top: 48px; left: 60px; right: 60px;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--crimson-dim), transparent);
          z-index: 4;
        }

        .faq-inner {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 760px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .faq-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--crimson-bright);
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUp 0.5s 0.1s ease forwards;
        }

        .faq-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 11vw, 120px);
          line-height: 0.9;
          color: var(--white);
          position: relative;
          opacity: 0;
          animation: fadeUp 0.6s 0.25s ease forwards;
        }

        .faq-title-glow {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 24px;
          background: var(--crimson);
          filter: blur(28px);
          opacity: 0.2;
        }

        .faq-divider {
          width: 60px;
          height: 2px;
          background: var(--crimson-bright);
          margin: 20px auto 0;
          opacity: 0;
          animation: fadeIn 0.5s 0.6s ease forwards;
        }

        /* FAQ items */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid rgba(122,17,17,0.3);
        }

        .faq-item {
          border-bottom: 1px solid rgba(122,17,17,0.25);
          opacity: 0;
          animation: fadeUp 0.5s ease forwards;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 8px;
          cursor: pointer;
          user-select: none;
          transition: background 0.2s;
        }

        .faq-item:hover .faq-question,
        .faq-item.is-open .faq-question {
          background: rgba(195,30,30,0.04);
        }

        .faq-q-text {
          font-size: clamp(15px, 2vw, 17px);
          font-weight: 700;
          color: rgba(240,230,230,0.85);
          line-height: 1.4;
          letter-spacing: 0.03em;
          transition: color 0.2s;
        }

        .faq-item.is-open .faq-q-text,
        .faq-item:hover .faq-q-text {
          color: var(--white);
        }

        .faq-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          position: relative;
          border: 1px solid rgba(195,30,30,0.3);
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
          transition: background 0.2s, border-color 0.2s;
        }

        .faq-item.is-open .faq-icon {
          background: rgba(195,30,30,0.15);
          border-color: var(--crimson-bright);
        }

        .faq-icon::before,
        .faq-icon::after {
          content: '';
          position: absolute;
          background: var(--crimson-bright);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.3s ease, opacity 0.3s;
        }

        .faq-icon::before {
          width: 10px;
          height: 1.5px;
        }

        .faq-icon::after {
          width: 1.5px;
          height: 10px;
          opacity: 1;
        }

        .faq-item.is-open .faq-icon::after {
          opacity: 0;
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .faq-item.is-open .faq-answer {
          max-height: 200px;
        }

        .faq-answer-inner {
          padding: 0 8px 24px 8px;
        }

        .faq-a-text {
          font-size: 14px;
          color: rgba(240,230,230,0.55);
          line-height: 1.8;
          font-weight: 400;
          border-left: 2px solid var(--crimson-dim);
          padding-left: 16px;
        }

        /* Bottom note */
        .faq-footer {
          margin-top: 48px;
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.5s 1.2s ease forwards;
        }

        .faq-footer p {
          font-size: 13px;
          color: rgba(240,230,230,0.3);
          letter-spacing: 0.08em;
        }

        .faq-footer a {
          color: var(--crimson-bright);
          text-decoration: none;
          font-weight: 700;
          border-bottom: 1px solid rgba(232,51,51,0.3);
          transition: border-color 0.2s;
        }

        .faq-footer a:hover {
          border-color: var(--crimson-bright);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>

      <div className="faq-root">
        <img src={infinityCasteGif} alt="" className="bg-gif" aria-hidden="true" />
        <div className="bg-vignette" />
        <div className="bg-scanlines" />
        <div className="top-rule" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="faq-inner">
          <div className="faq-header">
            <p className="faq-eyebrow">Got Questions?</p>
            <h1 className="faq-title">
              FAQ
              <div className="faq-title-glow" />
            </h1>
            <div className="faq-divider" />
          </div>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? ' is-open' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
              >
                <div className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="faq-q-text">{item.q}</span>
                  <div className="faq-icon" />
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p className="faq-a-text">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p>Still have questions? <a href="#">Drop us a message →</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
