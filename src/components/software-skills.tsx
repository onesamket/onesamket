import {
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
} from 'lucide-react'
import React from 'react'

const technicalSkills = [
  {
    icon: <Code2 size={18} />,
    group: 'Languages & Core',
    skills: ['JavaScript (ES2022+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    icon: <Layers size={18} />,
    group: 'Frontend & Mobile',
    skills: [
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'Remix',
      'TanStack Router',
      'TanStack Query',
      'TanStack Table',
      'TanStack Form',
      'Tailwind CSS',
      'shadcn/ui',
      'Apollo Client',
    ],
  },
  {
    icon: <Server size={18} />,
    group: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Encore.ts',
      'REST',
      'GraphQL',
      'Apollo Server',
      'WebRTC',
      'Socket.io',
    ],
  },
  {
    icon: <Database size={18} />,
    group: 'Databases & ORM',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Supabase'],
  },
  {
    icon: <Cloud size={18} />,
    group: 'Cloud & Deployment',
    skills: ['AWS', 'Supabase', 'Vercel', 'Railway', 'Render', 'Docker'],
  },
  {
    icon: <Brain size={18} />,
    group: 'AI-Assisted Development',
    skills: [
      'Cursor',
      'GitHub Copilot',
      'Claude',
      'ChatGPT',
      'Automated Testing Workflows',
      'Prompt Engineering & Code Auditing',
    ],
  },
  {
    icon: <GitBranch size={18} />,
    group: 'Tools & Version Control',
    skills: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Linux', 'Nginx'],
  },
]

const SoftwareSkills: React.FC = () => {
  return (
    <section>
      <div className="mb-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
          Technical Skills
        </p>
        <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd]">
          Engineering Stack
        </h2>
      </div>

      <div className="grid gap-3">
        {technicalSkills.map((item) => (
          <article
            key={item.group}
            className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-4"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0759bd] text-[#f4f0e8]">
                {item.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-[#0759bd]">
                {item.group}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[#0759bd]/20 px-2.5 py-1 text-xs font-bold leading-5 text-[#244f8f]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SoftwareSkills
