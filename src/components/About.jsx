import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'

// p=prompt($)  c=command  o=output  y=year  d=dim-separator  s=status
const LINES = [
  [['$ ', 'p'], ['bio', 'c']],
  [['Three years at AVASOFT — from Flutter apps with 100K+ downloads to leading', 'o']],
  [['production multi-agent systems and RAG infrastructure as Technical Lead.', 'o']],
  [['Building AI that eliminates real work for real people, not notebook demos.', 'o']],
  null,
  [['$ ', 'p'], ['timeline', 'c']],
  [['2023', 'y'], [' ── ', 'd'], ['Mobile Developer', 'o']],
  [['2024', 'y'], [' ── ', 'd'], ['Software Engineer  (100K+ downloads)', 'o']],
  [['2025', 'y'], [' ── ', 'd'], ['AI Engineer & Backend', 'o']],
  [['2026', 'y'], [' ── ', 'd'], ['Technical Lead', 'o']],
  null,
  [['$ ', 'p'], ['location', 'c']],
  [['Chennai, IN · open to remote', 'o']],
  null,
  [['$ ', 'p'], ['status', 'c']],
  [['● shipping', 's']],
]

// Flat array of {char, cls} — built once at module level
const CHARS = (() => {
  const out = []
  LINES.forEach((line, li) => {
    if (line === null) {
      out.push({ char: '\n', cls: 'd' })
    } else {
      line.forEach(([text, cls]) => {
        for (const ch of text) out.push({ char: ch, cls })
      })
      if (li < LINES.length - 1) out.push({ char: '\n', cls: 'd' })
    }
  })
  return out
})()

const TOTAL = CHARS.length
const SPEED = 14

function renderChars(count) {
  const groups = []
  let cur = null
  for (let i = 0; i < count && i < TOTAL; i++) {
    const { char, cls } = CHARS[i]
    if (cur && cur.cls === cls) {
      cur.text += char
    } else {
      cur = { cls, text: char }
      groups.push(cur)
    }
  }
  return groups.map((g, i) => (
    <span key={i} className={`tc-${g.cls}`}>{g.text}</span>
  ))
}

export default function About() {
  const wrapRef = useRef(null)
  const inView = useInView(wrapRef, { once: true, amount: 0.3 })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (reduce) { setCount(TOTAL); setDone(true); return }
    const start = setTimeout(() => {
      let i = 0
      const tick = setInterval(() => {
        i++
        setCount(i)
        if (i >= TOTAL) { clearInterval(tick); setDone(true) }
      }, SPEED)
      return () => clearInterval(tick)
    }, 500)
    return () => clearTimeout(start)
  }, [inView, reduce])

  // Plain-text for screen readers
  const plainText = LINES.map(l =>
    l === null ? '' : l.map(([t]) => t).join('')
  ).join('\n')

  return (
    <section className="section about" id="about" aria-label="About Jeffrey William">
      <Reveal>
        <p className="section-kicker mono">About</p>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="about-terminal-wrap" ref={wrapRef}>
          <div className="about-terminal mono">
            <div className="terminal-bar" aria-hidden="true">
              <span /><span /><span />
            </div>
            <pre aria-hidden="true">
              {renderChars(count)}
              {!done && <span className="terminal-cursor" aria-hidden="true" />}
            </pre>
            <span className="sr-only">{plainText}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
