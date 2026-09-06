import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { featuredProjects, otherProjects } from '@/constants/projects'

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M1 1h5.5L13 7.5 7.5 13 1 6.5V1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="4" cy="4" r="1.2" fill="currentColor" />
  </svg>
)

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const FeaturedWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'other'>('featured')

  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ marginBottom: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}
        >
          <div>
            <p style={{
              fontSize: 10.5, fontWeight: 900, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#8b7d60', marginBottom: 8,
              fontFamily: "'Lato', sans-serif",
            }}>
              Portfolio
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 900,
              fontSize: 'clamp(30px, 4vw, 44px)', color: '#1a1208', lineHeight: 1.1,
            }}>
              Selected Work
            </h2>
          </div>

          {/* Tab switcher */}
          <div style={{ display: 'flex', borderRadius: 2, border: '1.5px solid rgba(26,18,8,0.14)', overflow: 'hidden' }}>
            {(['featured', 'other'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '8px 18px',
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  border: 'none',
                  background: activeTab === tab ? '#1a1208' : 'transparent',
                  color: activeTab === tab ? '#f5f0e0' : '#8b7d60',
                  transition: 'background 0.22s, color 0.22s',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                {tab === 'featured' ? 'Featured' : 'More Projects'}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Featured grid ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gap: 24 }}
              className="sm:grid-cols-2"
            >
              {featuredProjects.map((project, i) => (
                <motion.article
                  key={project.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(26,18,8,0.1)' }}
                  transition={{ hover: { duration: 0.2 } }}
                  className="card-vintage"
                  style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#8b7d60' }}>
                        <TagIcon />
                        <span style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Lato', sans-serif" }}>
                          {project.category}
                        </span>
                      </div>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Visit ${project.title}`}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 28, height: 28, borderRadius: 2,
                          border: '1px solid rgba(26,18,8,0.14)',
                          color: '#8b7d60', textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={12} />
                      </motion.a>
                    </div>

                    <h3 style={{
                      fontFamily: "'Playfair Display', serif", fontWeight: 800,
                      fontSize: 19, color: '#1a1208', lineHeight: 1.25, marginBottom: 7,
                    }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c9873e', marginBottom: 14, fontFamily: "'Lato', sans-serif" }}>
                      {project.metric}
                    </p>

                    <p style={{ fontSize: 13.5, lineHeight: 1.7, color: '#4a3f28', fontFamily: "'Lato', sans-serif" }}>
                      {project.description}
                    </p>
                  </div>

                  <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-pill" style={{ fontSize: 10 }}>{tech}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* ── Other projects list ── */}
          {activeTab === 'other' && (
            <motion.div
              key="other"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                style={{ borderTop: '1px solid rgba(26,18,8,0.08)' }}
              >
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={listItemVariants}
                    style={{
                      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                      gap: 16, padding: '1.25rem 0',
                      borderBottom: '1px solid rgba(26,18,8,0.08)',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8b7d60', fontFamily: "'Lato', sans-serif" }}>
                        {project.category}
                      </span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: '#1a1208', marginTop: 2 }}>
                        {project.title}
                      </h3>
                      <p style={{ fontSize: 13, color: '#4a3f28', lineHeight: 1.7, marginTop: 4, fontFamily: "'Lato', sans-serif" }}>
                        {project.description}
                      </p>
                      {project.technologies && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                          {project.technologies.map((t) => (
                            <span key={t} className="skill-pill" style={{ fontSize: 10 }}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      style={{
                        marginTop: 4, display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0,
                        fontSize: 11.5, fontWeight: 900, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: '#8b7d60', textDecoration: 'none',
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

        <motion.hr
          className="divider-dotted"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ marginTop: '4rem', transformOrigin: 'left' }}
        />
      </div>
    </section>
  )
}
