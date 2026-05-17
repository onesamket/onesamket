import { experiences } from '@/constants/experience'
import React from 'react'

const Experience: React.FC = () => {
  return (
    <section className="border-t-2 border-[#0759bd] pt-12">
      <div className="mb-9">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">
          Professional Journey
        </p>
        <h2 className="mt-2 text-4xl font-black leading-none text-[#0759bd] md:text-5xl">
          Experience
        </h2>
      </div>

      <div className="border-t border-[#0759bd]/35">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="grid gap-4 border-b border-[#0759bd]/25 py-6 md:grid-cols-[minmax(0,1fr)_220px] md:gap-10"
          >
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#527db4]">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h3 className="text-xl font-extrabold leading-tight text-[#073f8f]">
                {exp.role}
              </h3>
              <p className="mt-1 text-base font-bold text-[#0759bd]">
                {exp.company}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#244f8f]">
                {exp.description}
              </p>
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
