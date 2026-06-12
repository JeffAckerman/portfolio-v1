import TechIcon from './icons.jsx'

const ROW1 = [
  'LangChain', 'LangGraph', 'AWS Bedrock', 'Claude', 'Python', 'GO',
  'FastAPI', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
]
const ROW2 = [
  'Flutter', 'Dart', 'Kotlin', 'Swift', 'Databricks', 'OpenTelemetry',
  'HITL', 'KMP', 'AWS Lambda', 'AWS SQS', 'CI/CD', 'Framer Motion',
]

function Row({ items, reverse }) {
  // Content duplicated once so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-row${reverse ? ' is-reverse' : ''}`}>
      {doubled.map((name, i) => (
        <span className="marquee-icon" key={name + i} data-tip={name} data-hover>
          <TechIcon name={name} size={32} />
        </span>
      ))}
    </div>
  )
}

export default function IconMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <Row items={ROW1} />
      <Row items={ROW2} reverse />
    </div>
  )
}
