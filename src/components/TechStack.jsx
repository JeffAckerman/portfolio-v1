import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import WordReveal from './WordReveal.jsx'
import TechIcon from './icons.jsx'
import { techGroups } from '../data.js'

const PRIMARY = ['LangChain', 'LangGraph', 'Flutter', 'Python', 'Databricks', 'AWS Bedrock']

const catColors = {
  'AI & Agentic': 'var(--accent)',
  Backend: 'var(--accent-secondary)',
  Mobile: '#f59e0b',
  'Data & Cloud': '#3b82f6',
  Principles: 'var(--text-muted)',
}

function SkillCard({ name, tip, group, index }) {
  const reduce = useReducedMotion()
  const primary = PRIMARY.includes(name)
  const card = (
    <div
      className={`tech-card${primary ? ' is-primary' : ''}`}
      style={{ '--cat': catColors[group] }}
      data-tip={tip}
      data-hover
      tabIndex="0"
    >
      <span className="cat-dot" aria-hidden="true" />
      <span className="tech-card-icon">
        <TechIcon name={name} size={primary ? 40 : 34} />
      </span>
      <span className="tech-card-name">{name}</span>
    </div>
  )
  if (reduce) return card
  return (
    <motion.div
      className={primary ? 'tech-cell is-primary' : 'tech-cell'}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 10) * 0.04, ease: 'easeOut' }}
    >
      {card}
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section className="section tech" id="skills">
      <Reveal>
        <p className="section-kicker mono">Tech Stack</p>
        <h2 className="section-title">
          <WordReveal text="The toolbox," /> <em><WordReveal text="organized by what it's for." startDelay={0.16} /></em>
        </h2>
      </Reveal>
      <div className="tech-groups">
        {techGroups.map((g) => (
          <div className="tech-group" key={g.name}>
            <h3 className="tech-group-name mono">
              <span className="cat-dot-inline" style={{ '--cat': catColors[g.name] }} aria-hidden="true" />
              {g.name}
            </h3>
            <div className="tech-grid">
              {g.tags.map(([tag, tip], i) => (
                <SkillCard key={tag} name={tag} tip={tip} group={g.name} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
