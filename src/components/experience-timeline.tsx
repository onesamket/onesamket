import React, { useEffect, useRef, useState } from 'react'
import { experiences } from '@/constants/experience'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* Vintage briefcase SVG */
const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <rect x="1" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M4 4V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.3" />
    <line x1="1" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
  </svg>
)

export const ExperienceTimeline: React.FC = () => {
  const { ref, inView } = useInView()
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '5rem 0' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>
        {/* Section header */}
        <div className={`mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#8b7d60]">
            Career
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 'clamp(30px, 4vw, 44px)',
              color: '#1a1208',
              lineHeight: 1.1,
            }}
          >
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div
            className="absolute left-[11px] top-4 bottom-0 w-px"
            style={{
              background: 'repeating-linear-gradient(to bottom, rgba(26,18,8,0.25) 0px, rgba(26,18,8,0.25) 4px, transparent 4px, transparent 10px)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {experiences.map((exp, i) => {
              const isOpen = expanded === i
              return (
                <div key={`${exp.company}-${i}`} className="relative pl-9">
                  {/* Node dot */}
                  <div
                    className="absolute left-0 top-[18px] flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors duration-200"
                    style={{
                      background: isOpen ? '#1a1208' : '#f5f0e0',
                      borderColor: isOpen ? '#1a1208' : 'rgba(26,18,8,0.3)',
                    }}
                  >
                    {isOpen && (
                      <div className="h-2 w-2 rounded-full bg-[#f5f0e0]" />
                    )}
                  </div>

                  {/* Row */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="w-full py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 text-[#8b7d60] mb-1">
                          <BriefcaseIcon />
                          <span className="text-[10.5px] font-black uppercase tracking-[0.2em]">
                            {exp.location}
                          </span>
                        </div>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 800,
                            fontSize: 18,
                            color: '#1a1208',
                            lineHeight: 1.2,
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-black text-[#4a3f28]">
                          {exp.company}
                        </p>
                      </div>

                      {/* Period + expand indicator */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b7d60] whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span
                          className="text-[16px] text-[#8b7d60] transition-transform duration-200"
                          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 600 : 0 }}
                  >
                    <div className="pb-7">
                      {/* Tech pills */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span key={t} className="skill-pill text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-[13.5px] leading-relaxed text-[#4a3f28]"
                          >
                            {/* Bullet */}
                            <span
                              className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[#c9873e]"
                              aria-hidden="true"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-[0.12em] text-[#c9873e] no-underline hover:text-[#a36830]"
                        >
                          Visit Company →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hairline separator */}
                  {i < experiences.length - 1 && (
                    <div className="border-t border-dashed border-[rgba(26,18,8,0.08)]" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <hr className="divider-dotted mt-16 sm:mt-20" />
      </div>
    </section>
  )
}
