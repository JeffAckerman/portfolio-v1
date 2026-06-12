import {
  siLangchain,
  siLanggraph,
  siClaude,
  siPython,
  siGo,
  siFastapi,
  siFlask,
  siDocker,
  siPostgresql,
  siMongodb,
  siRedis,
  siFirebase,
  siFlutter,
  siDart,
  siKotlin,
  siSwift,
  siDatabricks,
  siOpentelemetry,
  siFramer,
  siGithubactions,
} from 'simple-icons'

const brands = {
  LangChain: siLangchain,
  LangGraph: siLanggraph,
  Claude: siClaude,
  Python: siPython,
  GO: siGo,
  FastAPI: siFastapi,
  Flask: siFlask,
  Docker: siDocker,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Firebase: siFirebase,
  Flutter: siFlutter,
  Dart: siDart,
  Kotlin: siKotlin,
  Swift: siSwift,
  Databricks: siDatabricks,
  OpenTelemetry: siOpentelemetry,
  'Framer Motion': siFramer,
  'CI/CD': siGithubactions,
}

// Lucide-style conceptual fallbacks for tools without brand icons.
// Rendered with a teal stroke to distinguish them from brand marks.
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
const concepts = {
  'RAG Pipelines': (
    <g {...stroke}>
      <ellipse cx="9" cy="6" rx="6" ry="2.5" />
      <path d="M3 6v8c0 1.4 2.7 2.5 6 2.5" />
      <path d="M15 6v4" />
      <circle cx="16.5" cy="15.5" r="3.5" />
      <path d="M19 18l2.5 2.5" />
    </g>
  ),
  'AWS Bedrock': (
    <g {...stroke}>
      <path d="M17.5 17H7a4 4 0 1 1 .6-7.96A5.5 5.5 0 0 1 18 10.5a3.5 3.5 0 0 1-.5 6.5z" />
      <path d="M9 20h6" />
    </g>
  ),
  Llama: (
    <g {...stroke}>
      <path d="M12 4a7 7 0 0 1 7 7c0 2-1 3.5-2.5 4.5L16 20h-8l-.5-4.5C6 14.5 5 13 5 11a7 7 0 0 1 7-7z" />
      <circle cx="9.5" cy="11" r="0.5" />
      <circle cx="14.5" cy="11" r="0.5" />
    </g>
  ),
  'Prompt Engineering': (
    <g {...stroke}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </g>
  ),
  'Multi-Agent Orchestration': (
    <g {...stroke}>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="5" cy="17" r="2.5" />
      <circle cx="19" cy="17" r="2.5" />
      <path d="M10.5 8l-4 6.8M13.5 8l4 6.8M7.5 17h9" />
    </g>
  ),
  HITL: (
    <g {...stroke}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M15.5 9.5l2 2 3.5-3.5" />
    </g>
  ),
  Langfuse: (
    <g {...stroke}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </g>
  ),
  RAGAS: (
    <g {...stroke}>
      <path d="M12 20a8 8 0 1 1 8-8" />
      <path d="M12 12l4-4" />
      <path d="M17 17l3 3" />
    </g>
  ),
  'REST APIs': (
    <g {...stroke}>
      <path d="M9 8l-5 4 5 4M15 8l5 4-5 4" />
    </g>
  ),
  Microservices: (
    <g {...stroke}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </g>
  ),
  'AWS Lambda': (
    <g {...stroke}>
      <path d="M6 4h4l8 16h-4z" />
      <path d="M9.5 12.5L6 20" />
    </g>
  ),
  'AWS SQS': (
    <g {...stroke}>
      <path d="M4 6h16M4 12h16M4 18h10" />
      <path d="M18 16l2 2-2 2" />
    </g>
  ),
  'Event-Driven': (
    <g {...stroke}>
      <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
    </g>
  ),
  KMP: (
    <g {...stroke}>
      <rect x="4" y="3" width="9" height="16" rx="2" />
      <rect x="13" y="7" width="7" height="14" rx="2" />
    </g>
  ),
  FreeRASP: (
    <g {...stroke}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </g>
  ),
  'In-App Purchases': (
    <g {...stroke}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </g>
  ),
  'Serving Endpoints': (
    <g {...stroke}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <circle cx="7" cy="7.5" r="0.6" />
      <circle cx="7" cy="16.5" r="0.6" />
    </g>
  ),
  'SQL Warehouse': (
    <g {...stroke}>
      <path d="M3 9l9-5 9 5v11H3z" />
      <path d="M3 9h18M9 20v-6h6v6" />
    </g>
  ),
  'AWS Connect': (
    <g {...stroke}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
    </g>
  ),
  'Nova Sonic': (
    <g {...stroke}>
      <path d="M4 12h2l2-5 3 10 3-14 3 12 2-3h2" />
    </g>
  ),
  SOLID: (
    <g {...stroke}>
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
      <rect x="9" y="4" width="6" height="6" rx="1" />
      <path d="M12 10v2M7 14v-1h10v1" />
    </g>
  ),
  'Clean Architecture': (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" />
    </g>
  ),
  'PEN Testing': (
    <g {...stroke}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      <path d="M12 8v4M12 15h.01" />
    </g>
  ),
  Observability: (
    <g {...stroke}>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.5" />
    </g>
  ),
  'Security-First': (
    <g {...stroke}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </g>
  ),
  'Load Testing': (
    <g {...stroke}>
      <path d="M12 20a8 8 0 1 1 8-8" />
      <path d="M12 12l5-3" />
      <path d="M18 18l2 2" />
    </g>
  ),
}

export function hasBrand(name) {
  return Boolean(brands[name])
}

export default function TechIcon({ name, size = 24, className }) {
  const brand = brands[name]
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
      >
        <path d={brand.path} fill="currentColor" />
      </svg>
    )
  }
  const concept = concepts[name]
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className ? `${className} icon-concept` : 'icon-concept'}
      aria-hidden="true"
    >
      {concept || (
        <g {...stroke}>
          <circle cx="12" cy="12" r="8" />
        </g>
      )}
    </svg>
  )
}
