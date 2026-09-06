export interface Experience {
  role: string
  company: string
  period: string
  location: string
  technologies: Array<string>
  highlights: Array<string>
  link?: string
}

export const experiences: Array<Experience> = [
  {
    role: 'Co-Founder',
    company: 'Mead Menus',
    period: 'Oct 2025 - Present',
    location: 'Addis Ababa, Ethiopia · On-site',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma ORM',
      'Start-up Leadership',
      'AI Digital Menus',
      'QR Ordering',
      'Hospitality Analytics',
    ],
    highlights: [
      'Co-founded MeadMenus, an AI-powered B2B + B2C hospitality technology platform helping restaurants, hotels, and cafés create digital experiences.',
      'Architecting the platform technology, AI-powered digital menus, QR ordering flows, and venue business analytics from the ground up.',
      'Working across product strategy, full-stack engineering, growth, and partnerships to bring MeadMenus from idea to market.',
    ],
  },
  {
    role: 'Founder & Product Engineer',
    company: 'Siket',
    period: 'Nov 2025 - Present',
    location: 'Addis Ababa, Ethiopia · On-site',
    technologies: [
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Browser Extension',
      'Node.js',
      'AI Workspaces',
      'Software Infrastructure',
    ],
    highlights: [
      'Founded Siket, an AI-powered productivity workspace that combines tasks, notes, bookmarks, calendar, email, and browser tools in a unified experience.',
      'Led product strategy, UX design, full-stack development, infrastructure, and go-to-market execution.',
      'Developed and maintained the browser extension (Chrome, Edge, Brave), web application, backend services, and AI assistance features.',
      'Built multi-platform integrations importing projects from Linear, Jira, Asana, and Shortcut into a unified workspace.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Joveo',
    period: 'Feb 2026 - May 2026',
    location: 'Remote · Full-time',
    technologies: [
      'React',
      'TypeScript',
      'Design Systems',
      'Recruitment Marketing',
      'Enterprise Web Apps',
    ],
    highlights: [
      'Developed and maintained high-performance frontend interfaces for an enterprise global recruitment marketing platform serving international clients.',
      'Refactored UI modules into reusable design-system components, eliminating code duplication and accelerating sprint velocity.',
      'Optimized client bundle sizes and state handling to ensure low-latency dashboards across global user sessions.',
    ],
  },
  {
    role: 'AI Trainer',
    company: 'Revelo',
    period: 'Feb 2026 - Apr 2026',
    location: 'Remote · Contract',
    technologies: [
      'TypeScript',
      'JavaScript',
      'Python',
      'LLM Evaluation',
      'Code Correctness',
    ],
    highlights: [
      'Evaluated and annotated AI-generated code outputs to improve model accuracy and alignment with real-world software engineering standards.',
      'Identified edge cases and failure modes in AI responses, contributing to measurably safer and more reliable model behavior.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Hineni',
    period: 'Sep 2024 - Feb 2026',
    location: 'Remote · Full-time',
    technologies: [
      'React',
      'TypeScript',
      'TanStack Router',
      'WebRTC',
      'Jitsi',
      'Video SDK',
      '100ms',
      'Tailwind CSS',
    ],
    highlights: [
      'Architected and delivered a full-featured auditions & casting web platform (hineni.com) focusing on seamless UX, scalability, and maintainability using React and TypeScript.',
      'Implemented SEO best practices and Core Web Vitals optimizations, achieving high Lighthouse performance scores.',
      'Built dynamic client-side routing with TanStack Router, and integrated React PDF for interactive document rendering and export.',
      'Developed real-time communication features using WebRTC, Jitsi, Video SDK, and 100ms (HMS) for low-latency video streaming, webinars, and group calls.',
    ],
    link: 'https://hineni.com',
  },
  {
    role: 'Frontend Developer',
    company: 'Robotech Technology',
    period: 'May 2023 - Feb 2026',
    location: 'Addis Ababa, Ethiopia · Hybrid',
    technologies: [
      'React Native',
      'Next.js',
      'TypeScript',
      'Front-End Design',
      'E-Commerce',
    ],
    highlights: [
      'Led development of cross-platform mobile applications using React Native, delivering polished iOS and Android experiences.',
      'Built and optimized internal web dashboards (e.g. AssetFlow digital asset tracker) using Next.js and TypeScript, reducing page load times.',
      'Established frontend architecture patterns and code review standards adopted across the engineering team.',
    ],
  },
  {
    role: 'Full-stack React Native Developer',
    company: 'Prophecius Technologies',
    period: 'Aug 2024 - Jan 2025',
    location: 'Remote · Freelance',
    technologies: [
      'React Native',
      'Expo',
      'Node.js',
      'Prisma ORM',
      'PostgreSQL',
      'Supabase',
      'Vercel CI/CD',
    ],
    highlights: [
      'Built and maintained full-stack cross-platform applications using React Native for iOS and Android with Node.js backend services.',
      'Worked with Prisma ORM, PostgreSQL, and Supabase for backend data modeling, authentication, real-time features, and storage solutions.',
      'Deployed applications using Vercel with serverless functions and automated CI/CD workflows for fast, scalable releases.',
      'Implemented RESTful API integrations, offline capabilities, push notifications, and internal testing tooling.',
    ],
  },
]
