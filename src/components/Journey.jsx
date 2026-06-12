import { useRef } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import { journey } from '../data.js'

export default function Journey() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const reduce = useReducedMotion()

  return (
    <section className="section journey" id="journey">
      <Reveal>
        <p className="section-kicker mono">Journey</p>
        <h2 className="section-title">
          <WordReveal text="3 years. Mobile to AI." />{' '}
          <em className="gradient-text"><WordReveal text="Always shipping." startDelay={0.32} /></em>
        </h2>
      </Reveal>
      <div
        ref={ref}
        className={`timeline${reduce ? '' : ' will-draw'}${inView ? ' is-drawn' : ''}`}
        role="list"
      >
        <svg className="tl-line" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 2">
          <line x1="0" y1="1" x2="100" y2="1" pathLength="1" vectorEffect="non-scaling-stroke" />
        </svg>
        {journey.map((m, i) => (
          <article
            className="tl-card"
            role="listitem"
            key={m.year}
            style={{ '--d': `${0.2 + i * 0.5}s` }}
            data-hover
          >
            <span className="tl-dot" aria-hidden="true" />
            <span className="tl-year mono">{m.year}</span>
            <h3>{m.role}</h3>
            <p>{m.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
