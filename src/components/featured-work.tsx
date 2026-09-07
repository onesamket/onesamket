import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '@/constants/projects'
import { PillBadge } from '@/components/pill-badge'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

const THUMBS = [
  {
    from: '#163a6b',
    to: '#7eb6ff',
    art: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
        <circle cx="44" cy="44" r="34" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />
        <circle cx="44" cy="44" r="18" stroke="rgba(255,255,255,0.85)" strokeWidth="1.6" />
        <circle cx="44" cy="44" r="6" fill="rgba(255,255,255,0.95)" />
      </svg>
    ),
  },
  {
    from: '#10284d',
    to: '#4f8dff',
    art: (
      <svg width="120" height="88" viewBox="0 0 120 88" fill="none" aria-hidden="true">
        <rect x="18" y="18" width="54" height="36" rx="8" fill="rgba(8,14,28,0.55)" stroke="rgba(255,255,255,0.35)" />
        <rect x="38" y="32" width="64" height="40" rx="8" fill="rgba(8,14,28,0.75)" stroke="rgba(255,255,255,0.5)" />
        <rect x="50" y="44" width="28" height="5" rx="2" fill="rgba(255,255,255,0.7)" />
        <rect x="50" y="54" width="40" height="4" rx="2" fill="rgba(255,255,255,0.28)" />
      </svg>
    ),
  },
  {
    from: '#0d2f4a',
    to: '#5ad0c8',
    art: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden="true">
        <path
          d="M28 62 L44 22 L60 62"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M34 48h20" stroke="rgba(255,255,255,0.45)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    from: '#14204a',
    to: '#6b8cff',
    art: (
      <svg width="110" height="88" viewBox="0 0 110 88" fill="none" aria-hidden="true">
        <rect x="16" y="18" width="78" height="52" rx="12" fill="rgba(8,14,28,0.55)" stroke="rgba(255,255,255,0.35)" />
        <rect x="26" y="50" width="10" height="12" rx="2" fill="rgba(255,255,255,0.28)" />
        <rect x="42" y="38" width="10" height="24" rx="2" fill="rgba(255,255,255,0.45)" />
        <rect x="58" y="30" width="10" height="32" rx="2" fill="rgba(255,255,255,0.7)" />
        <rect x="74" y="42" width="10" height="20" rx="2" fill="rgba(255,255,255,0.4)" />
      </svg>
    ),
  },
]

const ProjectThumb: React.FC<{ index: number; title: string }> = ({
  index,
  title,
}) => {
  const thumb = THUMBS[index % THUMBS.length]
  return (
    <div
      className="article-thumb"
      style={{
        background: `radial-gradient(ellipse 80% 70% at 50% 40%, ${thumb.to} 0%, ${thumb.from} 62%, #07101f 100%)`,
        display: 'grid',
        placeItems: 'center',
      }}
      aria-hidden="true"
      title={title}
    >
      {thumb.art}
    </div>
  )
}

export const FeaturedWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'other'>('featured')

  return (
    <section id="projects" className="section section-work" aria-labelledby="work-heading">
      <div className="aurora aurora-b" aria-hidden="true" />
      <div className="site-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="section-head"
        >
          <PillBadge>Work</PillBadge>
          <h2 id="work-heading" className="section-title" style={{ marginTop: 22 }}>
            Selected work
          </h2>
          <div className="tab-switch" style={{ marginTop: 22 }} role="tablist" aria-label="Project lists">
            {(['featured', 'other'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                id={`tab-${tab}`}
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? 'is-active' : undefined}
              >
                {tab === 'featured' ? 'Featured' : 'More projects'}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'featured' && (
            <motion.div
              key="featured"
              id="panel-featured"
              role="tabpanel"
              aria-labelledby="tab-featured"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gap: 18 }}
            >
              {featuredProjects.map((project, i) => (
                <motion.article
                  key={project.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="article-card"
                >
                  <ProjectThumb index={i} title={project.title} />
                  <div className="article-body">
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: 'var(--text-faint)',
                        marginBottom: 8,
                      }}
                    >
                      {project.category}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        fontSize: 20,
                        color: 'var(--text)',
                        lineHeight: 1.3,
                        marginBottom: 8,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.65,
                        color: 'var(--text-muted)',
                        maxWidth: 480,
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        marginTop: 18,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 6,
                      }}
                    >
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="skill-pill" style={{ fontSize: 11 }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ink"
                      style={{ marginTop: 22, padding: '9px 16px', fontSize: 13 }}
                      aria-label={`View project: ${project.title}`}
                    >
                      View project
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {activeTab === 'other' && (
            <motion.div
              key="other"
              id="panel-other"
              role="tabpanel"
              aria-labelledby="tab-other"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                style={{
                  borderTop: '1px solid var(--line)',
                }}
              >
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={listItemVariants}
                    className="other-row"
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: 'var(--text-faint)',
                        }}
                      >
                        {project.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'inherit',
                          fontWeight: 600,
                          fontSize: 17,
                          color: 'var(--text)',
                          marginTop: 4,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: 'var(--text-muted)',
                          lineHeight: 1.65,
                          marginTop: 6,
                        }}
                      >
                        {project.description}
                      </p>
                      {project.technologies && (
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 6,
                            marginTop: 10,
                          }}
                        >
                          {project.technologies.map((t) => (
                            <span key={t} className="skill-pill" style={{ fontSize: 11 }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      aria-label={`View ${project.title}`}
                      style={{
                        marginTop: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        flexShrink: 0,
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        minHeight: 44,
                      }}
                    >
                      View <ArrowRight size={11} />
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
