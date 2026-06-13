import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import ProjectVisual from './ProjectVisual.jsx'
import { projects, projectFilters } from '../data.js'

export default function Work() {
  const [filter, setFilter] = useState('all')
  const shown = projects.filter((p) => filter === 'all' || p.cats.includes(filter))

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <Reveal>
        <p className="section-kicker mono">Selected Work</p>
        <h2 className="section-title" id="work-title">
          <WordReveal text="Real systems. Real clients." />{' '}
          <em><WordReveal text="In production." startDelay={0.32} /></em>
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {projectFilters.map(([id, label]) => (
            <button
              key={id}
              className={`filter-btn mono${filter === id ? ' is-active' : ''}`}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>
      <motion.div
        className="work-stack"
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {shown.map((p, i) => (
          <div className="work-sticky" key={p.num} style={{ '--i': i }}>
            <article className="project-card" data-hover>
              <header className="project-head">
                <span className="project-num mono">{p.num}</span>
                <div>
                  <h3>{p.name}</h3>
                  <p className="project-context mono">{p.context}</p>
                </div>
              </header>
              <div className="project-grid">
                <div className="project-copy">
                  <p className="project-body">{p.body}</p>
                  <div className="tag-row mono">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <ProjectVisual kind={p.visual} />
              </div>
            </article>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
