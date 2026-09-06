import { ExternalLink, Sparkles } from 'lucide-react'
import React from 'react'
import { featuredProjects, otherProjects } from '@/constants/projects'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mt-14 sm:mt-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[11px] font-black uppercase tracking-[0.24em] text-[#1a3be8]">
            Proof of Work & Code
          </span>
          <h2 className="mt-1 text-4xl font-black leading-none tracking-tight text-[#141a33] sm:text-5xl">
            Selected Projects
          </h2>
        </div>
        <span className="rounded-full bg-[#dbe4fc] px-4 py-1 text-xs font-black text-[#1a3be8]">
          {featuredProjects.length} Featured · {otherProjects.length} Additional
        </span>
      </div>

      {/* Featured Projects Grid */}
      <div className="mb-14">
        <div className="mb-5 flex items-center gap-2">
          <Sparkles size={16} className="text-[#1a3be8]" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3be8]">
            Featured Impact Work
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((proj, idx) => {
            const href =
              proj.link.startsWith('http') || proj.link.startsWith('#')
                ? proj.link
                : `https://${proj.link}`

            return (
              <article
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-[#1a3be8]/20 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1a3be8] hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#dbe4fc] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#1a3be8]">
                      {proj.category}
                    </span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${proj.title}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1a3be8]/30 text-[#1a3be8] transition-colors group-hover:bg-[#1a3be8] group-hover:text-white"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  <h4 className="text-2xl font-black tracking-tight text-[#141a33]">
                    {proj.title}
                  </h4>

                  <div className="mt-3 rounded-xl border border-[#1a3be8]/15 bg-[#f5f8ff] px-3.5 py-2 text-xs font-semibold text-[#1a3be8]">
                    <span className="font-extrabold uppercase tracking-wider text-[#57648f]">
                      Metric / Impact:{' '}
                    </span>
                    {proj.metric}
                  </div>

                  <p className="mt-3.5 text-xs font-medium leading-relaxed text-[#57648f]">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[#1a3be8]/15 pt-4">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#f0f4fd] px-2.5 py-1 text-[11px] font-semibold text-[#1a3be8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Other Projects / Libraries */}
      <div className="rounded-3xl border border-[#1a3be8]/20 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#1a3be8]">
          Open Source Libraries & Desktop Applications
        </h3>

        <ul className="divide-y divide-[#1a3be8]/15">
          {otherProjects.map((proj, idx) => {
            const href =
              proj.link.startsWith('http') || proj.link.startsWith('#')
                ? proj.link
                : `https://${proj.link}`

            return (
              <li
                key={idx}
                className="grid gap-3 py-4 md:grid-cols-[160px_minmax(0,1fr)_auto] md:items-center"
              >
                <div>
                  <span className="rounded-full bg-[#f0f4fd] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1a3be8]">
                    {proj.category}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#141a33]">
                    {proj.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium leading-relaxed text-[#57648f]">
                    {proj.description}
                  </p>
                  {proj.technologies && (
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-[#f8faff] px-1.5 py-0.5 text-[10px] font-medium text-[#57648f]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${proj.title}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1a3be8]/30 text-[#1a3be8] transition-colors hover:bg-[#1a3be8] hover:text-white"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Projects
