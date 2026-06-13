import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import { certifications } from '../data.js'

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <Reveal>
        <p className="section-kicker mono">About</p>
        <h2 className="section-title" id="about-title">
          <WordReveal text="I don't just build AI features." />{' '}
          <em><WordReveal text="I build AI systems that work in production." startDelay={0.4} /></em>
        </h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-visual-wrap">
          <div className="about-visual" aria-hidden="true">
            <div className="about-terminal mono">
              <div className="terminal-bar">
                <span /><span /><span />
              </div>
              <pre>{`$ whoami
jeffrey-william

$ role
Applied AI Engineer
& Technical Lead @ AVASOFT

$ timeline
2023 ── Mobile Developer
2024 ── Software Engineer (100K+ downloads)
2025 ── AI Engineer & Backend
2026 ── Technical Lead

$ location
Chennai, IN · open to remote

$ status
● shipping`}</pre>
            </div>
          </div>
        </Reveal>
        <div className="about-copy">
          <Reveal delay={0.05}>
            <p>
              Three years at AVASOFT, starting in mobile — shipping Flutter apps for
              finance, healthcare, and food delivery clients across both stores — and
              evolving into AI engineering as the company's AI practice grew. Today I
              lead delivery as a Technical Lead, specializing in production agentic
              systems, RAG infrastructure, and the Databricks platforms they run on.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              I believe the best AI systems are the ones that eliminate real work for
              real people — not demos that live in notebooks. Every system I build is
              designed to ship, scale, and stay maintainable: human-in-the-loop where
              it matters, observable end to end, and PEN-tested before it touches
              production.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Off the clock, I benchmark new models against real client workloads,
              mentor junior engineers on clean architecture and AI integration
              patterns, and break things in side projects so they don't break in
              production.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="certs">
              <h3 className="mono">Certifications</h3>
              <ul>
                {certifications.map((c) => (
                  <li key={c} className="mono" data-hover>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="8" cy="6" r="4" />
                      <path d="M5.5 9.5L4 14l4-2 4 2-1.5-4.5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
