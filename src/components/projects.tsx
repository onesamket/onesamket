import { primaryProjects, technicalProjects } from '@/constants/projects'
import { ExternalLink } from 'lucide-react'
import React from 'react'

const Projects: React.FC = () => {
  const allProjects = [...primaryProjects, ...technicalProjects]

  return (
    <section className="border-t-2 border-[#0759bd] pt-12">
      <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
            Selected Work
          </p>
          <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
            Projects
          </h2>
        </div>
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#527db4]">
          {allProjects.length} total
        </span>
      </div>

      <ul className="border-t border-[#0759bd]/35">
        {allProjects.map((proj, idx) => (
          <ProjectRow key={idx} {...proj} index={idx + 1} />
        ))}
      </ul>
    </section>
  )
}

const ProjectRow: React.FC<{
  title: string
  description: string
  link: string
  index: number
}> = ({ title, description, link, index }) => {
  const href =
    link.startsWith('http') || link.startsWith('#') ? link : `https://${link}`

  return (
    <li className="grid gap-4 border-b border-[#0759bd]/25 py-5 md:grid-cols-[56px_minmax(0,1fr)_40px] md:items-start">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#527db4]">
        {String(index).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-xl font-extrabold leading-tight text-[#073f8f]">
          {title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-[#244f8f]">
          {description}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#0759bd]/35 text-[#0759bd] hover:bg-[#e8e1d5]"
      >
        <ExternalLink size={16} />
      </a>
    </li>
  )
}

export default Projects
