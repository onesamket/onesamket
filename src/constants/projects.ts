export interface FeaturedProject {
  title: string
  category: string
  metric: string
  description: string
  technologies: Array<string>
  link: string
}

export interface OtherProject {
  title: string
  category: string
  description: string
  technologies?: Array<string>
  link: string
}

export const featuredProjects: Array<FeaturedProject> = [
  {
    title: 'AI-Powered Bookmark Manager',
    category: 'Full-Stack AI Application',
    metric: 'Smart AI search · Universal browser import · Real-time notes',
    description:
      'Save smarter. Find faster. Stay organized. Organize, search, and manage your bookmarks with AI. Import from any browser, add notes, and never lose track of important links again.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'AI Search',
      'OpenAI',
    ],
    link: 'https://saved-links-alpha.vercel.app/',
  },
  {
    title: 'MOE Exam Platform',
    category: 'National Platform · Accessibility',
    metric:
      'Built for Ethiopia Higher Education (MOE) with WCAG screen-reader inclusion',
    description:
      'Accessible, visually impaired inclusive web-based online exam platform for Ethiopian Higher Education. Designed with high-contrast accessibility standards and audio-friendly navigation to ensure equal opportunity for all students.',
    technologies: ['React', 'TypeScript', 'WCAG Accessibility', 'Tailwind CSS'],
    link: 'https://try-exit.vercel.app',
  },
  {
    title: 'Geez Input',
    category: 'Open-Source Developer Tooling',
    metric: 'Zero runtime dependencies · Instant Latin-to-Geez phonetic engine',
    description:
      'The open-source input component for Ethiopic web interfaces. Type Latin phonetically, get Geez instantly with zero configuration. Seamless integration for modern web and mobile apps.',
    technologies: ['TypeScript', 'React', 'Web Components', 'npm package'],
    link: 'https://geez-input.vercel.app/',
  },
  {
    title: 'Survey Tracker Platform',
    category: 'Full-Stack Web Application',
    metric: 'Dynamic form schema engine with real-time response analytics',
    description:
      'Create surveys, collect responses, and analyze results in one workspace. Build forms with robust client-server validation, share secure public links, and inspect submissions with live analytics.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
    ],
    link: 'https://survey-nine-fawn.vercel.app',
  },
]

export const otherProjects: Array<OtherProject> = [
  {
    title: 'Siket Workspace',
    category: 'Browser Workspace & Extension',
    description:
      'Calm, unified workspace for teams and power users. Import projects from Linear, Jira, Asana, and Shortcut, then manage boards, tasks, notes, calendar, and Siket AI without tool fatigue.',
    technologies: ['React', 'TypeScript', 'Browser Extension', 'Node.js'],
    link: 'https://github.com/onesamket',
  },
  {
    title: 'MeadMenus Platform',
    category: 'Hospitality Tech B2B/B2C SaaS',
    description:
      'AI-powered digital menus, QR ordering experiences, venue profiles, and business analytics for restaurants, hotels, and cafés.',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma ORM',
      'AI Digital Menus',
      'QR Ordering',
    ],
    link: 'https://meadmenus.com',
  },
  {
    title: 'Zema Music & Podcast Player',
    category: 'Desktop App',
    description:
      'Minimal Electron app for discovering, organizing, and playing music and podcasts. Features infinite scroll search, audio/video playback, and smart playlists.',
    technologies: ['Electron', 'React', 'YouTube API'],
    link: 'https://t.me/onesamket_7/74',
  },
  {
    title: 'Geez Number Converter',
    category: 'Open Source Library',
    description:
      'Open-source utility library for high-accuracy bidirectional conversion between Arabic and Ethiopian Geez numerals.',
    technologies: ['TypeScript', 'npm'],
    link: 'https://github.com/onesamket',
  },
  {
    title: 'React Native Toast Notification Library',
    category: 'Mobile Library',
    description:
      'Lightweight, highly customizable toast notification library for React Native and Expo applications with fluid animations.',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    link: 'https://github.com/onesamket',
  },
  {
    title: 'Wudasie Bible App',
    category: 'Mobile App',
    description:
      'Multi-theme, localized, and offline-first mobile Bible application built for smooth daily reading.',
    technologies: ['React Native', 'Expo', 'SQLite'],
    link: 'https://t.me/onesamket_7/87',
  },
  {
    title: 'Verses',
    category: 'Web & Mobile',
    description:
      'Inspiring Scripture tool with formatted image export for social sharing, stories, and wallpapers.',
    technologies: ['React', 'Canvas API', 'Tailwind CSS'],
    link: 'https://t.me/onesamket_7/73',
  },
  {
    title: 'Recipe Apps Suite',
    category: 'Web App Suite',
    description:
      'Collection of recipe management and meal preparation applications featuring advanced search and ingredient filtering.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://recipe-apps-suite.vercel.app',
  },
]
