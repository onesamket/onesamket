import React from 'react'
import { motion } from 'motion/react'

interface Skill {
  name: string
  level: 1 | 2 | 3 // 1=familiar 2=proficient 3=expert
}
interface SkillCategory {
  label: string
  tag: string
  color: string // dot color
  skills: Skill[]
}

const skillGroups: SkillCategory[] = [
  {
    label: 'Frontend', tag: '01', color: '#c9873e',
    skills: [
      { name: 'React & Next.js', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'React Native', level: 3 },
      { name: 'TanStack Router', level: 3 },
      { name: 'TanStack Query', level: 2 },
      { name: 'CSS / Tailwind', level: 3 },
      { name: 'Vite', level: 2 },
    ],
  },
  {
    label: 'Backend', tag: '02', color: '#1a1208',
    skills: [
      { name: 'Node.js', level: 3 },
      { name: 'Express', level: 2 },
      { name: 'PostgreSQL', level: 2 },
      { name: 'Prisma ORM', level: 3 },
      { name: 'REST API', level: 3 },
      { name: 'Supabase', level: 2 },
    ],
  },
  {
    label: 'AI & Tooling', tag: '03', color: '#4a3f28',
    skills: [
      { name: 'OpenAI API', level: 2 },
      { name: 'RAG Pipelines', level: 2 },
      { name: 'LLM Evaluation', level: 2 },
      { name: 'GitHub Actions', level: 2 },
      { name: 'Vercel & Railway', level: 3 },
      { name: 'Webpack', level: 2 },
    ],
  },
  {
    label: 'Design & Product', tag: '04', color: '#8b7d60',
    skills: [
      { name: 'Figma', level: 2 },
      { name: 'UI/UX Design', level: 2 },
      { name: 'WCAG Accessibility', level: 2 },
      { name: 'SEO & CWV', level: 2 },
      { name: 'Product Strategy', level: 2 },
      { name: 'Agile / Scrum', level: 2 },
    ],
  },
  {
    label: 'AI Coding Tools', tag: '05', color: '#c9873e',
    skills: [
      { name: 'Cursor', level: 3 },
      { name: 'v0 by Vercel', level: 3 },
      { name: 'Claude', level: 3 },
      { name: 'OpenAI Codex', level: 2 },
      { name: 'Grok (xAI)', level: 2 },
    ],
  },
]

// Level → dot pattern
const LevelDots: React.FC<{ level: 1 | 2 | 3; color: string }> = ({ level, color }) => (
  <span style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
    {[1, 2, 3].map((n) => (
      <span
        key={n}
        style={{
          width: 5, height: 5, borderRadius: '50%',
          background: n <= level ? color : 'rgba(26,18,8,0.12)',
          flexShrink: 0,
        }}
      />
    ))}
  </span>
)

const levelLabel = (l: 1 | 2 | 3) =>
  l === 3 ? 'Expert' : l === 2 ? 'Proficient' : 'Familiar'

export const SkillsMatrix: React.FC = () => (
  <section id="skills" style={{ padding: '5rem 0' }}>
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>

      {/* Header */}
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
          Expertise
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 900,
          fontSize: 'clamp(30px, 4vw, 44px)', color: '#1a1208', lineHeight: 1.1,
        }}>
          Skills & Craft
        </h2>

        {/* Legend */}
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
          {([1, 2, 3] as const).map((l) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#8b7d60', fontFamily: "'Lato', sans-serif" }}>
              <LevelDots level={l} color="#1a1208" />
              {levelLabel(l)}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── Skill category cards ── */}
      <div style={{ display: 'grid', gap: 20 }} className="sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="card-vintage"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: gi * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ padding: '1.5rem 1.75rem' }}
          >
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, paddingBottom: 14, borderBottom: '1px dashed rgba(26,18,8,0.1)' }}>
              <span style={{
                width: 28, height: 28, borderRadius: 8,
                background: `${group.color}18`,
                border: `1.5px solid ${group.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5, fontWeight: 700, color: group.color,
                flexShrink: 0,
              }}>
                {group.tag}
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800, fontSize: 15, color: '#1a1208', margin: 0,
              }}>
                {group.label}
              </h3>
            </div>

            {/* Skill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.07 + si * 0.04, duration: 0.3 }}
                  title={levelLabel(skill.level)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(26,18,8,0.05)',
                    border: '1.5px solid rgba(26,18,8,0.1)',
                    borderRadius: 999,
                    padding: '5px 12px',
                    fontSize: 11.5, fontWeight: 700, color: '#1a1208',
                    fontFamily: "'Lato', sans-serif",
                    cursor: 'default',
                    transition: 'background 0.18s, border-color 0.18s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${group.color}12`
                    e.currentTarget.style.borderColor = `${group.color}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(26,18,8,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(26,18,8,0.1)'
                  }}
                >
                  <LevelDots level={skill.level} color={group.color} />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom strip */}
      <motion.div
        className="card-vintage"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginTop: 20, padding: '1.5rem 2rem' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 4rem', alignItems: 'flex-start' }}>
          <div>
            <p style={{
              fontSize: 10, fontWeight: 900, letterSpacing: '0.26em',
              textTransform: 'uppercase', color: '#8b7d60', marginBottom: 10,
              fontFamily: "'Lato', sans-serif",
            }}>
              Languages Spoken
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[{ lang: 'Amharic', note: 'Native' }, { lang: 'English', note: 'Professional' }].map(({ lang, note }) => (
                <span key={lang} className="skill-pill">{lang} — {note}</span>
              ))}
            </div>
          </div>
          <div style={{ width: 1, background: 'rgba(26,18,8,0.1)', alignSelf: 'stretch', minHeight: 40 }} />
          <div>
            <p style={{
              fontSize: 10, fontWeight: 900, letterSpacing: '0.26em',
              textTransform: 'uppercase', color: '#8b7d60', marginBottom: 10,
              fontFamily: "'Lato', sans-serif",
            }}>
              Education
            </p>
            <p style={{ fontSize: 13.5, fontWeight: 800, color: '#1a1208', fontFamily: "'Lato', sans-serif" }}>
              B.Sc. Information Technology
            </p>
            <p style={{ fontSize: 12.5, color: '#4a3f28', fontFamily: "'Lato', sans-serif", marginTop: 2 }}>
              Haramaya University · 2020 – 2024
            </p>
          </div>
        </div>
      </motion.div>

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
