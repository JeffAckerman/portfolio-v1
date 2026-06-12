// Theme-aware colors — resolved from CSS variables so visuals adapt to light/dark.
const A = 'var(--accent)'
const M = 'var(--vis-line)'
const F = 'var(--vis-fill)'

const visuals = {
  orchestrator: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <rect x="118" y="86" width="64" height="44" rx="8" fill={F} stroke={A} />
      <text x="150" y="112" fill={A} fontSize="10" textAnchor="middle" fontFamily="monospace">
        ORCH
      </text>
      {[
        [40, 24, 'HR'],
        [40, 168, 'FIN'],
        [232, 24, 'IT'],
      ].map(([x, y, t]) => (
        <g key={t}>
          <rect x={x} y={y} width="48" height="32" rx="6" fill={F} stroke={M} />
          <text x={x + 24} y={y + 20} fill="var(--muted)" fontSize="9" textAnchor="middle" fontFamily="monospace">
            {t}
          </text>
        </g>
      ))}
      <path d="M88 46 L122 90 M88 178 L122 128 M232 46 L180 90" stroke={M} strokeDasharray="4 4" className="flow" />
      <rect x="208" y="158" width="72" height="32" rx="16" fill={F} stroke={A} strokeDasharray="3 3" />
      <text x="244" y="178" fill={A} fontSize="9" textAnchor="middle" fontFamily="monospace">
        HITL ✓
      </text>
      <path d="M182 122 L212 162" stroke={M} strokeDasharray="4 4" className="flow" />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <rect x="40" y="20" width="92" height="180" rx="14" fill={F} stroke={M} />
      <rect x="74" y="188" width="24" height="3" rx="1.5" fill={M} />
      <path d="M54 150 L70 120 L86 134 L102 92 L118 104" stroke={A} strokeWidth="2" className="flow" />
      <circle cx="118" cy="104" r="3" fill={A} />
      <g fontFamily="monospace" fontSize="9" fill="var(--muted)">
        <rect x="170" y="40" width="100" height="22" rx="4" fill={F} stroke={M} />
        <text x="180" y="54">GET /insights</text>
        <rect x="170" y="72" width="100" height="22" rx="4" fill={F} stroke={M} />
        <text x="180" y="86">POST /query</text>
        <rect x="170" y="104" width="100" height="22" rx="4" fill={F} stroke={M} />
        <text x="180" y="118">GET /accounts</text>
      </g>
      <text x="170" y="152" fill={A} fontSize="10" fontFamily="monospace">
        90+ endpoints
      </text>
      <text x="170" y="172" fill="var(--muted)" fontSize="9" fontFamily="monospace">
        0 PEN-test vulns
      </text>
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      {[
        [20, 'KB + URL', M],
        [116, 'RAG INGEST', A],
        [212, 'CHATBOT', M],
      ].map(([x, t, c]) => (
        <g key={t}>
          <rect x={x} y="88" width="68" height="44" rx="8" fill={F} stroke={c} />
          <text x={Number(x) + 34} y="114" fill={c === A ? A : 'var(--muted)'} fontSize="8.5" textAnchor="middle" fontFamily="monospace">
            {t}
          </text>
        </g>
      ))}
      <path d="M88 110 h24 M184 110 h24" stroke={A} markerEnd="none" className="flow" />
      <path d="M104 106 l8 4 -8 4 M200 106 l8 4 -8 4" stroke={A} />
      <text x="150" y="40" fill="var(--muted)" fontSize="10" textAnchor="middle" fontFamily="monospace">
        knowledge base in → production bot out
      </text>
      <rect x="92" y="160" width="116" height="26" rx="13" fill={F} stroke={M} />
      <text x="150" y="177" fill={A} fontSize="9" textAnchor="middle" fontFamily="monospace">
        AWS Bedrock
      </text>
    </svg>
  ),
  charts: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      {[
        [40, 130, 50],
        [80, 100, 80],
        [120, 70, 110],
        [160, 110, 70],
      ].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="24" height={h} rx="3" fill={F} stroke={M} />
      ))}
      <path d="M44 110 L92 80 L132 52 L172 90" stroke={A} strokeWidth="2" className="flow" />
      <rect x="208" y="48" width="68" height="88" rx="6" fill={F} stroke={M} />
      <g stroke={M}>
        <line x1="218" y1="66" x2="266" y2="66" />
        <line x1="218" y1="80" x2="266" y2="80" />
        <line x1="218" y1="94" x2="252" y2="94" />
      </g>
      <line x1="218" y1="112" x2="266" y2="112" stroke={A} />
      <text x="150" y="196" fill="var(--muted)" fontSize="10" textAnchor="middle" fontFamily="monospace">
        "compare annual pricing" → report
      </text>
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      {[
        [30, 'Databricks Apps — frontend', M],
        [78, 'Serving Endpoints — ML delivery', A],
        [126, 'SQL Warehouse — data', M],
      ].map(([y, t, c]) => (
        <g key={t}>
          <rect x="46" y={y} width="208" height="36" rx="7" fill={F} stroke={c} />
          <text x="150" y={Number(y) + 22} fill={c === A ? A : 'var(--muted)'} fontSize="9.5" textAnchor="middle" fontFamily="monospace">
            {t}
          </text>
        </g>
      ))}
      <g fill={A}>
        {[70, 110, 150, 190, 230].map((x) => (
          <circle key={x} cx={x} cy="190" r="2.5" className="pulse" />
        ))}
      </g>
      <text x="150" y="210" fill="var(--muted)" fontSize="9" textAnchor="middle" fontFamily="monospace">
        load-tested · high concurrency · low latency
      </text>
    </svg>
  ),
  releases: (
    <svg viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <line x1="30" y1="110" x2="270" y2="110" stroke={M} />
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={36 + i * 21} cy="110" r="4" fill={i < 11 ? F : A} stroke={A} />
      ))}
      <text x="150" y="84" fill="var(--muted)" fontSize="10" textAnchor="middle" fontFamily="monospace">
        12 consecutive App Store releases
      </text>
      <g fontFamily="monospace" fontSize="9.5">
        <rect x="58" y="140" width="74" height="26" rx="13" fill={F} stroke={M} />
        <text x="95" y="157" fill="var(--muted)" textAnchor="middle">Swift</text>
        <path d="M140 153 h18 M152 149 l8 4 -8 4" stroke={A} />
        <rect x="166" y="140" width="74" height="26" rx="13" fill={F} stroke={A} />
        <text x="203" y="157" fill={A} textAnchor="middle">Kotlin/KMP</text>
      </g>
    </svg>
  ),
}

export default function ProjectVisual({ kind }) {
  return <div className="project-visual">{visuals[kind]}</div>
}
