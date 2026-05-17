import {
  Blocks,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react'
import React from 'react'

const capabilities = [
  {
    icon: <Rocket size={20} />,
    title: 'Product UI Delivery',
    description:
      'Build clean, responsive, accessible interfaces from idea, design, or rough product requirements.',
  },
  {
    icon: <Blocks size={20} />,
    title: 'Fullstack Implementation',
    description:
      'Connect frontend flows with APIs, validation, persistence, auth, and deployment-ready structure.',
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile & Desktop Apps',
    description:
      'Ship React Native, Expo, and Electron experiences with practical navigation and maintainable components.',
  },
  {
    icon: <Network size={20} />,
    title: 'Realtime & API Work',
    description:
      'Work with REST, GraphQL, WebSockets, Socket.io, WebRTC-aware features, and integration-heavy products.',
  },
]

const workTraits = [
  'Responsible & dedicated',
  'Well-organized workflow',
  'Team collaboration',
  'Time management',
  'Problem solving',
  'Technical mentorship',
]

const SkillLists: React.FC = () => {
  return (
    <section id="skills" className="border-t-2 border-[#0759bd] pt-12">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
            Capabilities
          </p>
          <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
            Skills In Practice
          </h2>
          <p className="mt-5 text-sm font-medium leading-6 text-[#244f8f]">
            The stack matters, but execution matters more. This section shows
            how the technical skills translate into product work.
          </p>
        </div>

        <div className="grid gap-3">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-5 sm:grid-cols-[44px_1fr]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd]">
                {item.icon}
              </div>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-black text-[#527db4]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-black leading-tight text-[#073f8f]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-medium leading-6 text-[#244f8f]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 border-t border-[#0759bd]/35 pt-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-5">
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#0759bd]" />
            <h3 className="text-2xl font-black text-[#0759bd]">
              Delivery Standards
            </h3>
          </div>
          <p className="text-sm font-medium leading-6 text-[#244f8f]">
            Clean component structure, clear state ownership, responsive
            layouts, predictable data flow, and production-minded handoff.
          </p>
        </div>

        <div className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] p-5">
          <div className="mb-4 flex items-center gap-3">
            <Users size={20} className="text-[#0759bd]" />
            <h3 className="text-2xl font-black text-[#0759bd]">Work Style</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {workTraits.map((trait) => (
              <span
                key={trait}
                className="rounded-md border border-[#0759bd]/20 px-2.5 py-1 text-xs font-bold leading-5 text-[#244f8f]"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillLists
