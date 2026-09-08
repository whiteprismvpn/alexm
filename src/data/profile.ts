export const profile = {
  name: 'Александр Маклецов',
  shortName: 'AM',
  role: 'Backend & Telegram Bot Developer',
  availability: 'Открыт к junior-проектам',
  email: 'hello@example.com',
  location: 'Москва · Удалённо',
  intro: 'Собираю Telegram-ботов, API и автоматизации. Быстро превращаю идею в работающий прототип и довожу его до деплоя.',
  about: 'Начинающий backend-разработчик с фокусом на Python, Telegram Bot API и интеграции. Развиваю практику через собственные проекты: проектирую сценарии ботов, подключаю API и базы данных, тестирую и улучшаю результат.',
  stats: [
    { value: 'Python', label: 'основной язык' },
    { value: 'Bots', label: 'Telegram-автоматизация' },
    { value: 'API', label: 'интеграции и backend' }
  ],
  services: ['Telegram-боты', 'REST API', 'Автоматизация', 'Прототипирование'],
  experience: [
    { period: '2026 — сейчас', company: 'Самостоятельная практика', role: 'Telegram-боты и автоматизация', text: 'Создаю ботов для уведомлений, приёма заявок и повторяющихся задач; работаю с командами, inline-кнопками и внешними API.' },
    { period: '2026', company: 'Pet-projects', role: 'Backend-разработка', text: 'Собираю небольшие REST API: маршруты, валидация данных, обработка ошибок и работа с базой данных.' },
    { period: '2025 — сейчас', company: 'Обучение через проекты', role: 'Разработка и деплой', text: 'Изучаю backend на практике: Git/GitHub, Python, API-интеграции и проверка работы приложений после публикации.' }
  ],
  projects: [
    { type: 'Telegram Bot', title: 'LeadFlow', text: 'Бот для приёма заявок: сценарий выбора услуги, сбор контактов, подтверждение и уведомление администратора.', metric: 'Python · Telegram Bot API' },
    { type: 'Automation', title: 'NotifyHub', text: 'Бот-уведомитель: получает события из внешнего API, фильтрует их и отправляет сообщения в Telegram.', metric: 'API · HTTP · JSON' },
    { type: 'Backend API', title: 'Task API', text: 'Небольшой REST API для управления задачами: CRUD, валидация входных данных и обработка ошибок.', metric: 'Python · FastAPI · SQL' }
  ],
  social: [
    { label: 'GitHub', url: 'https://github.com/whiteprismvpn' },
    { label: 'Telegram', url: '#' },
    { label: 'LinkedIn', url: '#' }
  ]
} as const;