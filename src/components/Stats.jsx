import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { stats } from '../data.js'

function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)
  const [done, setDone] = useState(Boolean(reduce))
  const [scramble, setScramble] = useState(null)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.6,
      // ease-out cubic: fast start, slow landing
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDone(true),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  // Brief scramble on hover, then resolve back to the real value.
  function onHover() {
    if (!done || reduce || scramble !== null) return
    const digits = String(value).length
    const id = setInterval(() => {
      setScramble(
        Array.from({ length: digits }, () => '0123456789'[(Math.random() * 10) | 0]).join(''),
      )
    }, 40)
    setTimeout(() => {
      clearInterval(id)
      setScramble(null)
    }, 200)
  }

  return (
    <span ref={ref} className="stat-number" onMouseEnter={onHover}>
      {scramble ?? display}
      <motion.span
        className="stat-suffix"
        initial={false}
        animate={done ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 14 }}
      >
        {suffix}
      </motion.span>
    </span>
  )
}

const platforms = ['App Store', 'Google Play', 'AWS', 'Databricks', 'Anthropic']

export default function Stats() {
  return (
    <section className="stats" id="stats" aria-label="Impact numbers">
      <div className="stats-strip">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <CountUp value={s.value} suffix={s.suffix} />
            <span className="stat-label mono">{s.label}</span>
          </div>
        ))}
      </div>
      <Reveal>
        <div className="cred-strip mono" aria-label="Platforms shipped to">
          <span className="cred-label">Shipped to</span>
          {platforms.map((p) => (
            <span className="cred-badge" key={p}>
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
