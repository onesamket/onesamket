import React from 'react'

const technicalSkills = [
  {
    group: 'Languages & Core',
    skills: 'JavaScript (ES2022+), TypeScript, HTML5, CSS3, SQL',
  },
  {
    group: 'Frontend & Mobile',
    skills:
      'React, Next.js, React Native, Expo, Remix, TanStack Router, TanStack Query, TanStack Table, TanStack Form, Tailwind CSS, shadcn/ui, Apollo Client',
  },
  {
    group: 'Backend & APIs',
    skills:
      'Node.js, Express.js, NestJS, Encore.ts, REST, GraphQL, Apollo Server, WebRTC, Socket.io',
  },
  {
    group: 'Databases & ORM',
    skills: 'PostgreSQL, MongoDB, Prisma ORM, Supabase',
  },
  {
    group: 'Cloud & Deployment',
    skills: 'AWS, Supabase, Vercel, Railway, Render, Docker',
  },
  {
    group: 'AI & Vibe Coding',
    skills:
      'Cursor, GitHub Copilot, v0 by Vercel, Bolt, Lovable, Claude, ChatGPT. Proficient in AI-assisted development workflows.',
  },
  {
    group: 'Tools & Version Control',
    skills: 'Git, GitHub, GitHub Actions (CI/CD), Linux, Nginx',
  },
]

const SoftwareSkills: React.FC = () => {
  return (
    <section>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
        Technical Skills
      </p>
      <h2 className="mt-2 mb-8 text-4xl font-black leading-none text-[#0759bd]">
        Engineering Stack
      </h2>

      <div className="divide-y divide-[#0759bd]/25 rounded-md border border-[#0759bd]/30 bg-[#f8f5ef]">
        {technicalSkills.map((item) => (
          <article
            key={item.group}
            className="grid gap-2 p-4 sm:grid-cols-[180px_1fr]"
          >
            <h3 className="text-sm font-black leading-6 text-[#0759bd]">
              {item.group}
            </h3>
            <p className="text-sm font-medium leading-6 text-[#244f8f]">
              {item.skills}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SoftwareSkills
