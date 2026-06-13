export const EMAIL = 'jeffrey.william.dev@gmail.com'
export const LINKEDIN = 'https://linkedin.com/in/jeffrey-william-dev'
export const GITHUB = 'https://github.com/JeffAckerman'
export const RESUME = '/Jeffrey-William-Resume.pdf'

export const stats = [
  { value: 100, suffix: 'K+', label: 'App Store & Play Store Downloads' },
  { value: 6, suffix: '+', label: 'AI Agents Built & Deployed' },
  { value: 8, suffix: '+', label: 'Enterprise Clients Delivered' },
]

export const projects = [
  {
    num: '01',
    name: 'HelpDesk AI',
    context: 'Multi-Agent Enterprise Help Desk',
    body: 'Central AI orchestrator routing HR, Finance, and IT requests across three specialized agents — every action HITL-gated, fully traced via OpenTelemetry, zero uncontrolled decisions in production.',
    stack: ['LangChain', 'LangGraph', 'Claude', 'OpenTelemetry', 'Python'],
    visual: 'orchestrator',
    cats: ['ai'],
  },
  {
    num: '02',
    name: 'Seiren',
    context: 'AI-Powered Finance Application',
    body: 'RAG pipeline over live financial data, GO backend with 90+ endpoints, Flutter app on both stores — 100K+ downloads, Siri integration, In-App Purchases, and zero PEN-test vulnerabilities.',
    stack: ['RAG', 'GO', 'Flutter', 'Firebase', 'FreeRASP'],
    visual: 'finance',
    cats: ['ai', 'mobile'],
  },
  {
    num: '03',
    name: 'Coast Tech',
    context: 'Enterprise Chatbot Platform',
    body: 'Auto-generation platform that ingests a knowledge base and deploys a production-ready AWS Bedrock chatbot with security controls built in — weeks of manual bot development reduced to a single ingestion.',
    stack: ['RAG', 'AWS Bedrock', 'Python', 'Enterprise Security'],
    visual: 'pipeline',
    cats: ['ai'],
  },
  {
    num: '04',
    name: 'City Twig',
    context: 'Financial Intelligence Platform · Phases 2–4',
    body: 'Agentic Q&A layer with RAG chatbot, dynamic chart generation, and insurance document comparison — three production phases delivered so analysts query and visualize financial data in plain language.',
    stack: ['Python', 'MongoDB', 'PostgreSQL', 'Agentic AI'],
    visual: 'charts',
    cats: ['ai'],
  },
  {
    num: '05',
    name: 'MODE',
    context: 'Enterprise Databricks Data Platform',
    body: 'Databricks Serving Endpoints backend, GO-rewritten for significantly higher throughput and enterprise-scale concurrency — load tested and validated for high-concurrency ML delivery.',
    stack: ['Databricks', 'GO', 'Serving Endpoints', 'SQL Warehouse'],
    visual: 'layers',
    cats: ['data'],
  },
  {
    num: '06',
    name: 'Flashfood',
    context: 'Production Food Delivery App',
    body: '12 consecutive App Store release cycles shipped on schedule — led the Swift-to-Kotlin Multiplatform migration with zero feature regressions across iOS and Android.',
    stack: ['Flutter', 'Kotlin', 'KMP', 'Swift', 'Firebase'],
    visual: 'releases',
    cats: ['mobile'],
  },
]

export const techGroups = [
  {
    name: 'AI & Agentic',
    tags: [
      ['LangChain', 'Agent + RAG orchestration in production'],
      ['LangGraph', 'Multi-agent graphs with HITL gates'],
      ['RAG Pipelines', 'Live-database retrieval, not static docs'],
      ['AWS Bedrock', 'Enterprise LLM serving & chatbot platform'],
      ['Claude', 'Primary model for agentic systems'],
      ['Llama', 'Benchmarked for cost/latency tradeoffs'],
      ['Prompt Engineering', 'Multi-scenario eval-driven prompting'],
      ['Multi-Agent Orchestration', 'Central orchestrator + domain agents'],
      ['HITL', 'Human approval pipelines for AI actions'],
      ['OpenTelemetry', 'Full tracing across agent interactions'],
      ['Langfuse', 'LLM observability & trace analytics'],
      ['RAGAS', 'RAG quality evaluation harness'],
    ],
  },
  {
    name: 'Backend',
    tags: [
      ['Python', 'FastAPI/Flask services & AI backends'],
      ['GO', 'High-throughput APIs — 90+ endpoints shipped'],
      ['FastAPI', 'Async Python services'],
      ['Flask', 'Lightweight production APIs'],
      ['REST APIs', 'Designed & versioned for mobile scale'],
      ['Microservices', 'Event-driven, independently deployable'],
      ['AWS Lambda', 'Serverless AI workflows'],
      ['AWS SQS', 'Async queue-backed processing'],
      ['Docker', 'Containerized deployments'],
      ['Event-Driven', 'Queue + event architectures'],
    ],
  },
  {
    name: 'Mobile',
    tags: [
      ['Flutter', '3 years, multiple live store apps'],
      ['Dart', 'Primary mobile language'],
      ['Kotlin', 'Android native + KMP migration lead'],
      ['Swift', 'iOS native, Siri integration'],
      ['KMP', 'Led Swift-to-Kotlin Multiplatform migration'],
      ['Firebase', 'Auth, messaging, analytics'],
      ['FreeRASP', 'Runtime app self-protection'],
      ['In-App Purchases', 'Store monetization shipped live'],
    ],
  },
  {
    name: 'Data & Cloud',
    tags: [
      ['Databricks', 'Certified ML Professional — Apps, Lakebase'],
      ['Serving Endpoints', 'ML model delivery at scale'],
      ['SQL Warehouse', 'Large-scale data processing'],
      ['PostgreSQL', 'Primary relational store'],
      ['pgvector', 'Vector search for RAG retrieval'],
      ['MongoDB', 'Document store for AI platforms'],
      ['Redis', 'Caching & session state'],
      ['AWS Connect', 'Voice automation pipelines'],
      ['Nova Sonic', 'Realtime voice AI'],
      ['CI/CD', 'Automated release pipelines'],
    ],
  },
]

export const projectFilters = [
  ['all', 'All'],
  ['ai', 'AI Systems'],
  ['mobile', 'Mobile'],
  ['data', 'Data Platform'],
]

