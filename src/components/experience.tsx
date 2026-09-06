import React from 'react'
import { experiences } from '@/constants/experience'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="border-t-2 border-[#0759bd] pt-12">
      <div className="mb-9">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
          Employment & Contract History
        </p>
        <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
          Experience
        </h2>
      </div>

      <div className="border-t border-[#0759bd]/35">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="grid gap-6 border-b border-[#0759bd]/25 py-8 md:grid-cols-[minmax(0,1fr)_220px] md:gap-10"
          >
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#527db4]">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h3 className="text-2xl font-extrabold leading-tight text-[#073f8f]">
                {exp.role}
              </h3>
              <p className="mt-1 text-base font-bold text-[#0759bd]">
                {exp.company}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[#244f8f]">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0759bd]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {exp.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#0759bd]/20 bg-[#f8f5ef] px-2.5 py-1 text-xs font-bold text-[#0759bd]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="text-left md:text-right">
              <span className="block text-sm font-bold text-[#073f8f]">
                {exp.period}
              </span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-[#527db4]">
                {exp.location}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
