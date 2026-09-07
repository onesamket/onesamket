import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { experiences } from '@/constants/experience'
import { PillBadge } from '@/components/pill-badge'

const COMPANY_DOMAINS: Record<string, string> = {
  'Mead Menus': 'meadmenus.com',
  'Siket': 'siket.app',
  'Joveo': 'joveo.com',
  'Revelo': 'revelo.io',
  'Hineni': 'hineni.com',
  'Robotech Technology': 'robotechsolutions.com',
  'Prophecius Technologies': 'prophecius.com',
}

const InitialBadge: React.FC<{ company: string }> = ({ company }) => (
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: 12,
      background: 'rgba(183,212,255,0.08)',
      border: '1px solid rgba(183,212,255,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontWeight: 700,
      fontSize: 14,
      color: '#b7d4ff',
    }}
  >
    {company.charAt(0)}
  </div>
)

const CompanyFavicon: React.FC<{ company: string }> = ({ company }) => {
  const [failed, setFailed] = useState(false)
  const domain = COMPANY_DOMAINS[company]
  if (!domain || failed) return <InitialBadge company={company} />
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt={`${company} logo`}
      onError={() => setFailed(true)}
      style={{
        width: 36,
        height: 36,
        borderRadius: 12,
        objectFit: 'contain',
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.92)',
        padding: 4,
        flexShrink: 0,
      }}
    />
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const expandVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.28, ease: [0.55, 0, 1, 0.45] } },
}

export const ExperienceTimeline: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experience" className="section section-experience" aria-labelledby="experience-heading">
      <div className="site-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="section-head"
        >
          <PillBadge>Career</PillBadge>
          <h2 id="experience-heading" className="section-title" style={{ marginTop: 22 }}>
            Work experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="card-surface"
          style={{ padding: '0.5rem 1.25rem 0.75rem' }}
        >
          {experiences.map((exp, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={`${exp.company}-${i}`}
                variants={rowVariants}
                style={{ display: 'flex', gap: '1.25rem' }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 20,
                  }}
                >
                  <CompanyFavicon company={exp.company} />
                  {i < experiences.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        marginTop: 8,
                        background:
                          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 4px, transparent 4px, transparent 10px)',
                        minHeight: 24,
                      }}
                    />
                  )}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <motion.button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`exp-panel-${i}`}
                    aria-label={`${exp.role} at ${exp.company}, ${exp.period}`}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '18px 0 14px',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 8,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: 'rgba(160,178,204,0.62)',
                            marginBottom: 4,
                          }}
                        >
                          {exp.location}
                        </p>
                        <h3
                          style={{
                            fontWeight: 600,
                            fontSize: 18,
                            color: '#f4f7fb',
                            lineHeight: 1.25,
                            margin: 0,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            marginTop: 3,
                            fontSize: 14,
                            fontWeight: 500,
                            color: 'rgba(196,210,230,0.78)',
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          flexShrink: 0,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: 'rgba(160,178,204,0.62)',
                          }}
                        >
                          {exp.period}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          style={{
                            fontSize: 20,
                            color: isOpen ? '#b7d4ff' : 'rgba(160,178,204,0.62)',
                            fontWeight: 300,
                            lineHeight: 1,
                            display: 'inline-block',
                          }}
                        >
                          +
                        </motion.span>
                      </div>
                    </div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={`exp-panel-${i}`}
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingBottom: 28 }}>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}
                          >
                            {exp.technologies.map((t) => (
                              <span key={t} className="skill-pill" style={{ fontSize: 11 }}>
                                {t}
                              </span>
                            ))}
                          </motion.div>

                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
                            }}
                            style={{
                              listStyle: 'none',
                              padding: 0,
                              margin: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 10,
                            }}
                          >
                            {exp.highlights.map((h, j) => (
                              <motion.li
                                key={j}
                                variants={{
                                  hidden: { opacity: 0, x: -8 },
                                  visible: { opacity: 1, x: 0, transition: { duration: 0.32 } },
                                }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 10,
                                  fontSize: 14,
                                  lineHeight: 1.7,
                                  color: 'rgba(196,210,230,0.78)',
                                }}
                              >
                                <span
                                  style={{
                                    marginTop: 9,
                                    flexShrink: 0,
                                    width: 5,
                                    height: 5,
                                    borderRadius: '50%',
                                    background: '#b7d4ff',
                                  }}
                                  aria-hidden="true"
                                />
                                {h}
                              </motion.li>
                            ))}
                          </motion.ul>

                          {exp.link && (
                            <motion.a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.15 }}
                              style={{
                                marginTop: 14,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 4,
                                fontSize: 13,
                                fontWeight: 600,
                                color: '#b7d4ff',
                                textDecoration: 'none',
                              }}
                            >
                              Visit company →
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {i < experiences.length - 1 && (
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
