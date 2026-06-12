import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import ParticleField from './ParticleField.jsx'
import Magnetic from './Magnetic.jsx'

const HEADLINE = [
  ['I', 'build', 'AI', 'systems'],
  ['that', 'solve', 'real'],
  ['business', 'problems.'],
]

const ROLES = [
  'Applied AI Engineer',
  'RAG Systems Architect',
  'AI Platform Builder',
  'Agentic Systems Engineer',
]

const ORBS = [
  { label: 'LangChain', x: 58, y: 14, dur: 9 },
  { label: 'RAG', x: 78, y: 10, dur: 7 },
  { label: 'LangGraph', x: 90, y: 24, dur: 12 },
  { label: 'Flutter', x: 64, y: 34, dur: 8 },
  { label: 'Bedrock', x: 83, y: 44, dur: 14 },
  { label: 'GO', x: 60, y: 58, dur: 6 },
  { label: 'Python', x: 76, y: 68, dur: 10 },
  { label: 'Databricks', x: 89, y: 80, dur: 11 },
]

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, delay: 0.25 + i * 0.07, ease: [0.21, 0.65, 0.32, 1] },
  }),
}

function RoleCycler() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2500)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="role-cycler mono" aria-live="polite">
      <span className="role-prompt" aria-hidden="true">&gt;</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
      <span className="type-caret" aria-hidden="true" />
    </div>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  // Scroll-linked parallax (framer drives these on requestAnimationFrame)
  const { scrollY } = useScroll()
  const yHeadline = useTransform(scrollY, (v) => (reduce ? 0 : v * 0.3))
  const ySub = useTransform(scrollY, (v) => (reduce ? 0 : v * 0.15))
  const fade = useTransform(scrollY, [0, 400], reduce ? [1, 1] : [1, 0])

  let i = 0
  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true">
        <span className="mesh-blob mesh-1" />
        <span className="mesh-blob mesh-2" />
        <span className="mesh-blob mesh-3" />
      </div>
      <ParticleField />
      <div className="hero-orbs" aria-hidden="true">
        {ORBS.map((o, idx) => (
          <span
            key={o.label}
            className="orb mono"
            style={{
              '--ox': `${o.x}%`,
              '--oy': `${o.y}%`,
              '--odur': `${o.dur}s`,
              '--ovar': idx % 4,
            }}
            data-float={idx % 4}
          >
            {o.label}
          </span>
        ))}
      </div>
      <motion.div className="hero-inner" style={{ opacity: fade }}>
        <motion.p
          className="hero-kicker mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Jeffrey William — Full Stack Applied AI Engineer
        </motion.p>
        <motion.h1 className="hero-headline" style={{ y: yHeadline }}>
          {HEADLINE.map((line, li) => (
            <span className="hero-line" key={li}>
              {line.map((w) => {
                const idx = i++
                const accent = w === 'business' || w === 'problems.'
                if (reduce) {
                  return (
                    <span className="hero-mask" key={w + idx}>
                      <span className={accent ? 'accent gradient-text' : undefined}>{w}</span>
                    </span>
                  )
                }
                return (
                  <span className="hero-mask" key={w + idx}>
                    <motion.span
                      className={accent ? 'accent gradient-text' : undefined}
                      variants={word}
                      custom={idx}
                      initial="hidden"
                      animate="show"
                    >
                      {w}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          ))}
        </motion.h1>
        <motion.div style={{ y: ySub }}>
          <RoleCycler />
          <motion.p
            className="hero-sub"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Applied AI Engineer · 3 years shipping production agentic systems, RAG
            pipelines, and enterprise AI platforms at AVASOFT.
          </motion.p>
          <motion.div
            className="avail-badge"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            <span className="mono">Available</span>
            <span className="avail-sep" aria-hidden="true" />
            <span className="mono avail-locs">Chennai · Bangalore · Remote</span>
          </motion.div>
          <motion.div
            className="hero-ctas"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <Magnetic>
              <a className="btn btn-primary" href="#work">
                See My Work
              </a>
            </Magnetic>
            <Magnetic>
              {/* TODO: replace "#" with the final hosted resume PDF link */}
              <a className="btn btn-ghost" href="#">
                Download Resume
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.a
        href="#stats"
        className="scroll-cue"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="scroll-cue-line" />
      </motion.a>
    </section>
  )
}
