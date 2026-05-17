import React from 'react'
import {
  Cloud,
  Code2,
  Database,
  Heart,
  Layers,
  Lightbulb,
  Network,
  Server,
  Smartphone,
  Target,
  Users,
} from 'lucide-react'

interface SkillCategory {
  icon: React.ReactNode
  title: string
  skills: string[]
}

const SkillLists: React.FC = () => {
  const coreCategories: SkillCategory[] = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Node.js'],
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Mobile',
      skills: ['React Native', 'Expo', 'Cross-platform'],
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'Bun', 'Express'],
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Database',
      skills: ['SQL', 'NoSQL', 'Prisma', 'ORM'],
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: 'API Design',
      skills: ['REST', 'GraphQL', 'Socket.io', 'WebSocket'],
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: 'DevOps',
      skills: ['Docker', 'Git', 'CI/CD', 'Deployment'],
    },
  ]

  const softSkills = [
    { icon: <Heart className="h-4 w-4" />, label: 'Responsible & Dedicated' },
    { icon: <Target className="h-4 w-4" />, label: 'Well-organized Workflow' },
    { icon: <Users className="h-4 w-4" />, label: 'Team Collaboration' },
    { icon: <Lightbulb className="h-4 w-4" />, label: 'Problem Solving' },
  ]

  return (
    <section id="skills" className="border-t-2 border-[#0759bd] pt-12">
      <div className="mb-9">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
          What I Do
        </p>
        <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
          Core Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreCategories.map((category, idx) => (
          <article
            key={idx}
            className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd]">
              {category.icon}
            </div>
            <h3 className="text-lg font-extrabold text-[#073f8f]">
              {category.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="rounded-md bg-[#e8e1d5] px-2.5 py-1 text-xs font-bold text-[#244f8f]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border-t border-[#0759bd]/35 pt-10 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
            How I Work
          </p>
          <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd]">
            Soft Skills
          </h2>
          <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-[#244f8f]">
            Clear communication, steady delivery, and practical problem solving
            across product teams.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {softSkills.map((skill, idx) => (
            <article
              key={idx}
              className="flex items-center gap-3 rounded-md border border-[#0759bd]/25 bg-[#f8f5ef] p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0759bd] text-[#f4f0e8]">
                {skill.icon}
              </div>
              <span className="text-sm font-extrabold text-[#073f8f]">
                {skill.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillLists
