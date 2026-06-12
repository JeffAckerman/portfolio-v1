import Reveal from './Reveal.jsx'

const items = [
  'Exploring agentic eval frameworks for production RAG systems',
  'Building MCP connectors for enterprise internal tooling',
  "Open to Applied AI Engineer roles — let's build together",
]

export default function CurrentlyBuilding() {
  return (
    <section className="section building" aria-label="Currently building">
      <Reveal>
        <p className="section-kicker mono">Currently Building</p>
      </Reveal>
      <div className="building-list">
        {items.map((item, i) => (
          <Reveal key={item} delay={0.1 + i * 0.12}>
            <p className="building-item mono">
              <span aria-hidden="true">→ </span>
              {item}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
