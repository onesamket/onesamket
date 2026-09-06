import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { experiences } from '@/constants/experience'

// ── Company domain map ──
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
      borderRadius: 8,
      background: 'rgba(201,135,62,0.1)',
      border: '1.5px solid rgba(201,135,62,0.22)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: "'Playfair Display', serif",
      fontWeight: 900,
      fontSize: 15,
      color: '#c9873e',
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
        borderRadius: 8,
        objectFit: 'contain',
        border: '1.5px solid rgba(26,18,8,0.1)',
        background: 'rgba(255,255,255,0.75)',
        padding: 4,
        flexShrink: 0,
      }}
    />
  )
}

// ── Stagger container variants ──
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
    <section id="experience" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{ marginBottom: 48 }}
        >
          <p style={{
            fontSize: 10.5, fontWeight: 900, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#8b7d60', marginBottom: 8,
            fontFamily: "'Lato', sans-serif",
          }}>
            Career
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: 'clamp(30px, 4vw, 44px)', color: '#1a1208', lineHeight: 1.1,
          }}>
            Work Experience
          </h2>
        </motion.div>

        {/* ── Timeline list ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {experiences.map((exp, i) => {
            const isOpen = expanded === i
            return (
              <motion.div
                key={`${exp.company}-${i}`}
                variants={rowVariants}
                style={{ display: 'flex', gap: '1.25rem' }}
              >
                {/* ── Favicon + dashed connector ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 20 }}>
                  <CompanyFavicon company={exp.company} />
                  {i < experiences.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1.5,
                        marginTop: 8,
                        background: 'repeating-linear-gradient(to bottom, rgba(26,18,8,0.18) 0px, rgba(26,18,8,0.18) 4px, transparent 4px, transparent 10px)',
                        minHeight: 24,
                      }}
                    />
                  )}
                </div>

                {/* ── Content ── */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Toggle row */}
                  <motion.button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    aria-expanded={isOpen}
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
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                      <div>
                        <p style={{
                          fontSize: 10.5, fontWeight: 900, letterSpacing: '0.18em',
                          textTransform: 'uppercase', color: '#8b7d60', marginBottom: 3,
                          fontFamily: "'Lato', sans-serif",
                        }}>
                          {exp.location}
                        </p>
                        <h3 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 800, fontSize: 18, color: '#1a1208', lineHeight: 1.2, margin: 0,
                        }}>
                          {exp.role}
                        </h3>
                        <p style={{
                          marginTop: 2, fontSize: 13, fontWeight: 800,
                          color: '#4a3f28', fontFamily: "'Lato', sans-serif",
                        }}>
                          {exp.company}
                        </p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: '#8b7d60',
                          fontFamily: "'Lato', sans-serif",
                        }}>
                          {exp.period}
                        </span>
                        {/* Animated + / × */}
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          style={{ fontSize: 20, color: isOpen ? '#c9873e' : '#8b7d60', fontWeight: 300, lineHeight: 1, display: 'inline-block' }}
                        >
                          +
                        </motion.span>
                      </div>
                    </div>
                  </motion.button>

                  {/* Expanded panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        variants={expandVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ paddingBottom: 28 }}>
                          {/* Tech pills */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}
                          >
                            {exp.technologies.map((t) => (
                              <span key={t} className="skill-pill" style={{ fontSize: 10 }}>{t}</span>
                            ))}
                          </motion.div>

                          {/* Highlights — staggered */}
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } } }}
                            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}
                          >
                            {exp.highlights.map((h, j) => (
                              <motion.li
                                key={j}
                                variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.32 } } }}
                                style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13.5, lineHeight: 1.7, color: '#4a3f28', fontFamily: "'Lato', sans-serif" }}
                              >
                                <span
                                  style={{ marginTop: 9, flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#c9873e' }}
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
                                marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 4,
                                fontSize: 11.5, fontWeight: 900, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: '#c9873e', textDecoration: 'none',
                              }}
                            >
                              Visit Company →
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {i < experiences.length - 1 && (
                    <div style={{ borderTop: '1px dashed rgba(26,18,8,0.08)' }} />
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <hr className="divider-dotted" style={{ marginTop: '4rem' }} />
      </div>
    </section>
  )
}
