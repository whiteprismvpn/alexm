export const profile = {
  name: 'Alexander Makletsov',
  shortName: 'AM',
  role: 'Backend & Telegram Bot Developer',
  email: 'tegmore@icloud.com',
  location: 'Moscow, Russia · Remote',
  intro: 'I build Telegram bots, APIs, and automations. I quickly turn ideas into working prototypes and take them through deployment.',
  about: 'Junior backend developer focused on Python, the Telegram Bot API, and third-party integrations. I grow my expertise through hands-on projects: designing bot flows, connecting APIs and databases, testing, and improving the result.',
  stats: [
    { value: 'Python', label: 'primary language' },
    { value: 'Bots', label: 'Telegram automation' },
    { value: 'API', label: 'integrations & backend' }
  ],
  services: ['Telegram bots', 'REST APIs', 'Automation', 'Prototyping'],
  experience: [
    { period: '2026 — Present', company: 'Independent Practice', role: 'Telegram Bots & Automation', text: 'I build bots for notifications, lead collection, and recurring tasks, using commands, inline keyboards, and external APIs.' },
    { period: '2026', company: 'Personal Projects', role: 'Backend Development', text: 'I develop small REST APIs with routing, input validation, error handling, and database integration.' },
    { period: '2025 — Present', company: 'Project-Based Learning', role: 'Development & Deployment', text: 'I learn backend development through practice: Git and GitHub, Python, API integrations, and post-deployment application testing.' }
  ],
  projects: [
    { type: 'Telegram Bot', title: 'LeadFlow', text: 'A lead-capture bot with a service-selection flow, contact collection, confirmation, and administrator notifications.', metric: 'Python · Telegram Bot API' },
    { type: 'Automation', title: 'NotifyHub', text: 'A notification bot that receives events from an external API, filters them, and delivers messages to Telegram.', metric: 'API · HTTP · JSON' },
    { type: 'Backend API', title: 'Task API', text: 'A small REST API for task management with CRUD operations, input validation, and error handling.', metric: 'Python · FastAPI · SQL' }
  ],
  social: [
    { label: 'Telegram', url: 'https://t.me/g7273635' },
    { label: 'WhatsApp: @tegmore', url: '#' }
  ]
} as const;
