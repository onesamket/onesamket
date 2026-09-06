import React, { useState } from 'react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '@/constants/projects'

/* Small SVG: vintage tag */
const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M1 1h5.5L13 7.5 7.5 13 1 6.5V1z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <circle cx="4" cy="4" r="1.2" fill="currentColor" />
  </svg>
)

export const FeaturedWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'other'>('featured')

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#8b7d60]">
              Portfolio
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(30px, 4vw, 44px)', color: '#1a1208', lineHeight: 1.1 }}
            >
              Selected Work
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-sm border border-[rgba(26,18,8,0.14)] overflow-hidden">
            {(['featured', 'other'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition-colors ${
                  activeTab === tab
                    ? 'bg-[#1a1208] text-[#f5f0e0]'
                    : 'bg-transparent text-[#8b7d60] hover:text-[#1a1208]'
                }`}
              >
                {tab === 'featured' ? 'Featured' : 'More Projects'}
              </button>
            ))}
          </div>
        </div>

        {/* Featured projects grid */}
        {activeTab === 'featured' && (
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <article
                key={project.title}
                className="card-vintage group flex flex-col justify-between overflow-hidden p-7 transition-shadow duration-200 hover:shadow-md"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Top bar */}
                <div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 text-[#8b7d60]">
                      <TagIcon />
                      <span className="text-[10.5px] font-black uppercase tracking-[0.2em]">
                        {project.category}
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-7 w-7 items-center justify-center rounded-sm border border-[rgba(26,18,8,0.15)] text-[#8b7d60] transition-colors hover:border-[#1a1208] hover:text-[#1a1208]"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      fontSize: 20,
                      color: '#1a1208',
                      lineHeight: 1.25,
                      marginBottom: 8,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Metric badge */}
                  <p className="mb-4 text-[10.5px] font-black uppercase tracking-[0.12em] text-[#c9873e]">
                    {project.metric}
                  </p>

                  <p className="text-[13.5px] font-normal leading-relaxed text-[#4a3f28]">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Other projects list */}
        {activeTab === 'other' && (
          <div className="divide-y divide-[rgba(26,18,8,0.08)]">
            {otherProjects.map((project, i) => (
              <div
                key={project.title}
                className="flex items-start justify-between gap-4 py-5 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8b7d60]">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: '#1a1208',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#4a3f28] leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="skill-pill text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex shrink-0 items-center gap-1 text-[11.5px] font-black uppercase tracking-[0.12em] text-[#8b7d60] no-underline transition-colors hover:text-[#1a1208]"
                >
                  View <ArrowRight size={11} />
                </a>
              </div>
            ))}
          </div>
        )}

        <hr className="divider-dotted mt-16 sm:mt-20" />
      </div>
    </section>
  )
}
