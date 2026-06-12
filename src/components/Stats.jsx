import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { stats } from '../data.js'

function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)
  const [done, setDone] = useState(Boolean(reduce))
  const [scramble, setScramble] = useState(null)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
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

const live = ['App Store', 'Google Play', 'AWS', 'Databricks']
const certified = ['Databricks ML Professional', 'Anthropic Claude']

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
        <div className="cred-strip mono" aria-label="Production platforms and certifications">
          <span className="cred-label">Live on</span>
          {live.map((p) => (
            <span className="cred-badge" key={p}>
              {p}
            </span>
          ))}
          <span className="cred-divider" aria-hidden="true" />
          <span className="cred-label">Certified</span>
          {certified.map((p) => (
            <span className="cred-badge" key={p}>
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
