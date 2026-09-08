export const profile = {
  name: 'Aleksandr Makletsov',
  shortName: 'AM',
  role: 'Backend & Telegram Bot Developer',
  availability: 'Open to junior projects',
  email: 'hello@example.com',
  location: 'Moscow · Remote',
  intro: 'I build Telegram bots, APIs, and automations. I quickly turn an idea into a working prototype and take it through deployment.',
  about: 'An entry-level backend developer focused on Python, the Telegram Bot API, and integrations. I build hands-on experience through personal projects: designing bot flows, connecting APIs and databases, testing, and iterating on the result.',
  stats: [
    { value: 'Python', label: 'primary language' },
    { value: 'Bots', label: 'Telegram automation' },
    { value: 'API', label: 'integrations and backend' }
  ],
  services: ['Telegram bots', 'REST APIs', 'Automation', 'Prototyping'],
  experience: [
    { period: '2026 — Present', company: 'Independent practice', role: 'Telegram bots and automation', text: 'I build bots for notifications, lead intake, and recurring tasks; I work with commands, inline buttons, and external APIs.' },
    { period: '2026', company: 'Pet projects', role: 'Backend development', text: 'I build small REST APIs with routes, data validation, error handling, and database integration.' },
    { period: '2025 — Present', company: 'Project-based learning', role: 'Development and deployment', text: 'I learn backend development hands-on through Git/GitHub, Python, API integrations, and post-deployment application testing.' }
  ],
  projects: [
    { type: 'Telegram Bot', title: 'LeadFlow', text: 'A lead-intake bot with a service-selection flow, contact collection, confirmation, and administrator notifications.', metric: 'Python · Telegram Bot API' },
    { type: 'Automation', title: 'NotifyHub', text: 'A notification bot that receives events from an external API, filters them, and sends messages to Telegram.', metric: 'API · HTTP · JSON' },
    { type: 'Backend API', title: 'Task API', text: 'A compact REST API for task management: CRUD operations, input validation, and error handling.', metric: 'Python · FastAPI · SQL' }
  ],
  social: [
    { label: 'Telegram', url: '#' },
    { label: 'LinkedIn', url: '#' }
  ]
} as const;
