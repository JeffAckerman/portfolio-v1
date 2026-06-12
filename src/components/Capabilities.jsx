import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import { capabilities } from '../data.js'

const icons = {
  '01': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="8" r="3.5" />
      <circle cx="7" cy="24" r="3.5" />
      <circle cx="25" cy="24" r="3.5" />
      <path d="M14 11l-5 10M18 11l5 10M10.5 24h11" />
    </svg>
  ),
  '02': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="16" cy="7" rx="9" ry="3.5" />
      <path d="M7 7v9c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V7" />
      <path d="M7 16v9c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-9" opacity="0.5" />
    </svg>
  ),
  '03': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="10" y="4" width="12" height="24" rx="2.5" />
      <path d="M14 25h4" />
      <path d="M4 12l-2 4 2 4M28 12l2 4-2 4" />
    </svg>
  ),
  '04': (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="5" width="24" height="6" rx="1.5" />
      <rect x="4" y="13" width="24" height="6" rx="1.5" opacity="0.7" />
      <rect x="4" y="21" width="24" height="6" rx="1.5" opacity="0.4" />
      <circle cx="9" cy="8" r="1" fill="currentColor" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
      <circle cx="9" cy="24" r="1" fill="currentColor" />
    </svg>
  ),
}

export default function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <Reveal>
        <p className="section-kicker mono">What I Do</p>
        <h2 className="section-title">
          <WordReveal text="Systems that ship, scale," />{' '}
          <em><WordReveal text="and stay maintainable." startDelay={0.32} /></em>
        </h2>
      </Reveal>
      <div className="cap-list">
        {capabilities.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.06}>
            <article className={`cap-row${i % 2 ? ' is-flipped' : ''}`} data-hover>
              <div className="cap-meta">
                <span className="cap-icon" aria-hidden="true">
                  {icons[c.id]}
                </span>
                <span className="cap-num mono">{c.id}</span>
              </div>
              <div className="cap-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="tag-row mono" aria-label="Technologies">
                  {c.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
