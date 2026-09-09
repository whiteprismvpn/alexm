export const profile = {
  name: 'Alexander Makletsov',
  shortName: 'AM',
  role: 'Junior Python Backend Developer',
  email: 'tegmore@icloud.com',
  location: 'Dallas, US · Remote',
  intro: 'I build APIs, integrations, automations, and small backend services for real business workflows. I turn repetitive tasks into simple, reliable, deployable tools.',
  about: 'Junior Python backend developer building practical APIs, Telegram bots, and automation tools. I turn repetitive workflows into simple, reliable services that connect data, databases, and external systems.',
  stats: [
    { value: 'Python', label: 'primary language' },
    { value: 'APIs', label: 'integrations & services' },
    { value: 'MVPs', label: 'automation & delivery' }
  ],
  skills: [
    'Python',
    'FastAPI',
    'REST APIs',
    'PostgreSQL',
    'SQL',
    'API integrations',
    'Webhooks & event processing',
    'Workflow automation',
    'Database-backed CRUD apps',
    'Authentication & access control',
    'Docker & deployment workflows',
    'Bug fixes & feature development',
    'Telegram bots & notifications',
    'SQLAlchemy',
    'Cloudflare'
  ],
  languages: ['Russian', 'English'],
  services: [
    'Python backend development',
    'FastAPI & REST APIs',
    'API integrations',
    'Webhooks & event processing',
    'Workflow automation',
    'Database-backed CRUD apps',
    'Authentication & access control',
    'Docker & deployment workflows',
    'Bug fixes & feature development',
    'Telegram bots & notifications'
  ],
  experience: [
    { period: '2026 — Present', company: 'Independent Practice', role: 'Python Backend Development', text: 'I build small backend solutions for business workflows, including REST APIs, data validation, database-backed services, integrations, and automated processes. I focus on clear scope, maintainable code, and deployable MVPs.' },
    { period: '2026 — Present', company: 'Personal Projects', role: 'API Integrations & Automation', text: 'I create Python workflows that collect, transform, and route data between services using HTTP APIs, JSON payloads, webhooks, scheduled tasks, and notification channels.' },
    { period: '2025 — Present', company: 'Project-Based Learning', role: 'Backend Engineering Practice', text: 'I develop hands-on projects with Python, FastAPI, REST APIs, Git and GitHub, while expanding into PostgreSQL, SQLAlchemy, Docker, authentication, and deployment.' }
  ],
  projects: [
    { type: 'Backend API', title: 'Lead Intake API', text: 'A backend service for collecting leads, validating contact data, storing requests, and routing notifications to the right person.', metric: 'Python · FastAPI · REST API' },
    { type: 'Automation', title: 'Automation Pipeline', text: 'A Python workflow that receives data from external services, filters and transforms it, then triggers the required actions.', metric: 'HTTP · JSON · Integrations' },
    { type: 'Backend API', title: 'Task Management API', text: 'A REST API for task management with CRUD operations, input validation, error handling, and database integration.', metric: 'FastAPI · SQL · CRUD' },
    { type: 'Webhooks', title: 'Webhook Processor', text: 'A service for receiving and processing external events with structured payload handling, validation, and retry-ready architecture.', metric: 'Webhooks · Events · APIs' },
    { type: 'Telegram Bot', title: 'Telegram Notification Bot', text: 'A notification interface for backend workflows and incoming events, including commands, inline buttons, and external API calls.', metric: 'Python · Telegram Bot API' }
  ],
  social: [
    { label: 'Telegram', url: 'https://t.me/g7273635' },
    { label: 'WhatsApp: @tegmore', url: '#' }
  ]
} as const;
