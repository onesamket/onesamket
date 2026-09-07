import React from 'react'
import { motion } from 'motion/react'
import { PillBadge } from '@/components/pill-badge'

interface SkillCategory {
  label: string
  blurb: string
  skills: string[]
}

const skillGroups: SkillCategory[] = [
  {
    label: 'Frontend',
    blurb: 'Interfaces that feel fast and stay maintainable.',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'React Native',
      'TanStack Router',
      'TanStack Query',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    label: 'Backend',
    blurb: 'APIs, data, and the glue between products.',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
      'Supabase',
    ],
  },
  {
    label: 'AI & Tooling',
    blurb: 'Applied LLM work, evals, and shipping pipelines.',
    skills: [
      'OpenAI API',
      'RAG pipelines',
      'LLM evaluation',
      'GitHub Actions',
      'Vercel',
      'Railway',
    ],
  },
  {
    label: 'Product',
    blurb: 'Design sense with the discipline to ship.',
    skills: [
      'Figma',
      'UI / UX',
      'WCAG',
      'SEO & CWV',
      'Product strategy',
      'Agile',
    ],
  },
  {
    label: 'AI coding',
    blurb: 'Daily drivers for design, code, and review.',
    skills: ['Cursor', 'v0', 'Claude', 'OpenAI Codex', 'Grok'],
  },
]

export const SkillsMatrix: React.FC = () => (
  <section id="skills" className="section section-skills" aria-labelledby="skills-heading">
    <div className="site-wrap">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="section-head"
      >
        <PillBadge>Expertise</PillBadge>
        <h2 id="skills-heading" className="section-title" style={{ marginTop: 22 }}>
          Skills & craft
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gap: 12 }}>
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="skill-row"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: gi * 0.06,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: 'var(--text)',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                {group.label}
              </h3>
              <p
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: 'var(--text-faint)',
                }}
              >
                {group.blurb}
              </p>
            </div>
            <div className="skill-row-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
