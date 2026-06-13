export const EMAIL = 'jeffrey.william.dev@gmail.com'
export const LINKEDIN = 'https://linkedin.com/in/jeffrey-william-dev'
export const GITHUB = 'https://github.com/JeffAckerman'
export const RESUME = '/Jeffrey-William-Resume.pdf'

export const stats = [
  { value: 10, suffix: '+', label: 'Production Apps Shipped' },
  { value: 100, suffix: 'K+', label: 'App Store & Play Store Downloads' },
  { value: 6, suffix: '+', label: 'AI Agents Built & Deployed' },
  { value: 8, suffix: '+', label: 'Enterprise Clients Delivered' },
  { value: 12, suffix: '+', label: 'Release Cycles Managed' },
]

export const capabilities = [
  {
    id: '01',
    title: 'AI Engineering & Agentic Systems',
    body: 'I design and deploy multi-agent AI systems that eliminate manual, repetitive work inside enterprises — routing decisions, automating workflows, and keeping humans in the loop only when it matters. Every agent ships with observability and auditable decision trails.',
    stack: ['LangChain', 'LangGraph', 'Claude', 'HITL', 'OpenTelemetry'],
  },
  {
    id: '02',
    title: 'RAG Pipelines & Knowledge Systems',
    body: 'I build retrieval-augmented generation systems that give LLMs access to live, structured business data — enabling accurate, grounded AI answers over financial records, knowledge bases, and enterprise databases.',
    stack: ['RAG', 'AWS Bedrock', 'PostgreSQL', 'MongoDB', 'Prompt Engineering'],
  },
  {
    id: '03',
    title: 'Full Stack Mobile & Backend Engineering',
    body: 'I ship production mobile apps across iOS and Android using Flutter and Kotlin, backed by high-throughput GO and Python APIs. From App Store releases to enterprise backend services — end to end.',
    stack: ['Flutter', 'Kotlin', 'GO', 'Python', 'FastAPI', 'Firebase'],
  },
  {
    id: '04',
    title: 'AI Platform & Data Infrastructure',
    body: 'I build the infrastructure AI features run on — Databricks serving platforms, serverless AWS pipelines, model evaluation and benchmarking, and observability that catches regressions before users do.',
    stack: ['Databricks', 'AWS Lambda', 'Serving Endpoints', 'SQL Warehouse', 'CI/CD'],
  },
]

export const projects = [
  {
    num: '01',
    name: 'HelpDesk AI',
    context: 'Multi-Agent Enterprise Help Desk',
    problem: 'Enterprise teams wasted hours routing internal HR, Finance, and IT requests manually.',
    solution:
      'Built a central AI orchestrator coordinating three specialized agents — HR, Finance, and IT — with Human-in-the-Loop approval pipelines for controlled, auditable decision-making. OpenTelemetry traces every agent interaction in real time, so debugging a multi-agent flow takes minutes, not days.',
    outcome: 'Eliminated manual routing for HR, Finance, and IT requests — every AI decision auditable, observable via OpenTelemetry, and gated by human approval before execution.',
    stack: ['LangChain', 'LangGraph', 'Claude', 'OpenTelemetry', 'Python'],
    visual: 'orchestrator',
    cats: ['ai'],
  },
  {
    num: '02',
    name: 'Seiren',
    context: 'AI-Powered Finance Application',
    problem: 'Financial services users needed contextual, real-time AI insights from live data — not static documents.',
    solution:
      'Engineered a RAG pipeline querying directly from live database state, backed by a high-throughput GO backend with 90+ endpoints. Shipped the Flutter app to both App Store and Google Play with Siri integration, In-App Purchases, and FreeRASP runtime protection.',
    outcome: 'Live on App Store and Google Play with 100K+ downloads — zero PEN-test vulnerabilities, Siri integration, In-App Purchases, and real-time RAG-powered financial insights delivered to users.',
    stack: ['RAG', 'GO', 'Flutter', 'Firebase', 'FreeRASP'],
    visual: 'finance',
    cats: ['ai', 'mobile'],
  },
  {
    num: '03',
    name: 'Coast Tech',
    context: 'Enterprise Chatbot Platform',
    problem: 'Enterprises spent weeks manually building domain-specific chatbots for each use case.',
    solution:
      'Architected an auto-generation platform that ingests a knowledge base and target webpage, then deploys a production-ready, domain-specific chatbot using RAG and AWS Bedrock — with security controls, access management, and compliance safeguards built in for sensitive organizational data.',
    outcome: 'Turned weeks of manual bot development into a single knowledge-base ingestion — production-ready, security-validated chatbots deployed on AWS Bedrock without writing domain logic.',
    stack: ['RAG', 'AWS Bedrock', 'Python', 'Enterprise Security'],
    visual: 'pipeline',
    cats: ['ai'],
  },
  {
    num: '04',
    name: 'City Twig',
    context: 'Financial Intelligence Platform · Phases 2–4',
    problem: 'Financial analysts needed to query, calculate, and visualize complex financial data through natural language — across multiple document types.',
    solution:
      'Built an agentic Q&A layer with a RAG chatbot, dynamic graph generation, and an insurance document comparison tool producing consolidated summary reports — alongside robust document management workflows for upload, retrieval, and deletion.',
    outcome: 'Replaced manual financial analysis workflows across three production phases — analysts now query live data, generate charts, and compare insurance documents in plain language with zero SQL.',
    stack: ['Python', 'MongoDB', 'PostgreSQL', 'Agentic AI'],
    visual: 'charts',
    cats: ['ai'],
  },
  {
    num: '05',
    name: 'MODE',
    context: 'Enterprise Databricks Data Platform',
    problem: 'An enterprise needed ML model delivery at scale — high concurrency, low latency, no compromises.',
    solution:
      'Designed the backend on Databricks Serving Endpoints with the frontend on Databricks Apps, then delivered a GO-based release with significantly improved throughput. Load tested to validate enterprise-scale concurrency standards.',
    outcome: 'GO-rewritten backend on Databricks Serving Endpoints survived enterprise load testing — validated for high-concurrency ML delivery with significantly improved throughput over the prior implementation.',
    stack: ['Databricks', 'GO', 'Serving Endpoints', 'SQL Warehouse'],
    visual: 'layers',
    cats: ['data'],
  },
  {
    num: '06',
    name: 'Flashfood',
    context: 'Production Food Delivery App',
    problem: 'A live mobile product needed continuous delivery across iOS and Android through a major platform migration — without disrupting users.',
    solution:
      'Shipped 12 consecutive App Store release cycles maintaining version stability, and drove Android releases through an active Swift-to-Kotlin Multiplatform migration — coordinating with backend and QA teams to guarantee full feature parity across both platforms.',
    outcome: '12 consecutive App Store releases shipped on schedule — full Swift-to-Kotlin Multiplatform migration completed with zero feature regressions across iOS and Android.',
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
  {
    name: 'Principles',
    tags: [
      ['SOLID', 'Mentored teams on it'],
      ['Clean Architecture', 'Maintainable across client projects'],
      ['PEN Testing', 'Zero reported vulnerabilities'],
      ['Observability', 'Tracing-first AI systems'],
      ['Security-First', 'AWS Inspector + compliance validation'],
      ['Load Testing', 'Enterprise concurrency validation'],
    ],
  },
]

export const projectFilters = [
  ['all', 'All'],
  ['ai', 'AI Systems'],
  ['mobile', 'Mobile'],
  ['data', 'Data Platform'],
]

export const journey = [
  {
    year: '2023',
    role: 'Trainee → Mobile Developer',
    detail:
      'Started at AVASOFT. First Flutter app shipped within 3 months. Learned production mobile delivery end to end.',
  },
  {
    year: '2024',
    role: 'Software Engineer — Mobility',
    detail:
      'Shipped production Flutter apps across finance, healthcare, and food delivery. 100K+ downloads. Led 12 consecutive App Store release cycles.',
  },
  {
    year: '2025',
    role: 'AI Engineer & Backend Developer',
    detail:
      "Transitioned into AI engineering as AVASOFT's AI practice grew. Built first RAG pipeline and multi-agent system. Integrated AWS Bedrock and LangGraph in production.",
  },
  {
    year: '2026',
    role: 'Technical Lead',
    detail:
      'Technical Lead on agentic AI delivery — owning sprint planning, architecture decisions, code reviews, and LLM benchmarking for cost, latency, and accuracy. Mentoring junior engineers on clean architecture and AI integration patterns. Databricks ML Professional and 3× Anthropic Claude certified.',
  },
]

export const certifications = [
  'Databricks Certified Machine Learning Professional',
  'Anthropic Skilljar — Claude Certified',
  'Anthropic Skilljar — Claude Code Certified',
  'Anthropic Skilljar — Claude Cowork Certified',
]
