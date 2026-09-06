import React, { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.12) {
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

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  label: string
  tag: string
  skills: Skill[]
}

const skillGroups: SkillCategory[] = [
  {
    label: 'Frontend',
    tag: '01',
    skills: [
      { name: 'React & Next.js', level: 96 },
      { name: 'TypeScript', level: 93 },
      { name: 'React Native & Expo', level: 88 },
      { name: 'TanStack Router / Query', level: 87 },
      { name: 'CSS / Tailwind CSS', level: 90 },
    ],
  },
  {
    label: 'Backend',
    tag: '02',
    skills: [
      { name: 'Node.js & Express', level: 85 },
      { name: 'PostgreSQL', level: 83 },
      { name: 'Prisma ORM', level: 88 },
      { name: 'REST API Design', level: 85 },
      { name: 'Supabase', level: 78 },
    ],
  },
  {
    label: 'AI & Tooling',
    tag: '03',
    skills: [
      { name: 'OpenAI API & RAG', level: 75 },
      { name: 'LLM Evaluation & RLHF', level: 72 },
      { name: 'Vite / Webpack', level: 80 },
      { name: 'Git & GitHub Actions', level: 88 },
      { name: 'Vercel & Railway', level: 84 },
    ],
  },
  {
    label: 'Design & Product',
    tag: '04',
    skills: [
      { name: 'Figma & UI/UX Design', level: 80 },
      { name: 'Web Accessibility (WCAG)', level: 78 },
      { name: 'SEO & Core Web Vitals', level: 78 },
      { name: 'Product Strategy', level: 75 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
]

const ProgressBar: React.FC<{ level: number; animate: boolean }> = ({ level, animate }) => (
  <div
    style={{
      position: 'relative',
      height: 5,
      width: '100%',
      borderRadius: 999,
      background: 'rgba(26,18,8,0.09)',
      overflow: 'hidden',
    }}
    role="progressbar"
    aria-valuenow={level}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      style={{
        position: 'absolute',
        inset: '0 auto 0 0',
        borderRadius: 999,
        background: 'linear-gradient(90deg, #c9873e 0%, #1a1208 100%)',
        width: animate ? `${level}%` : '0%',
        transition: animate ? 'width 1s cubic-bezier(0.4,0,0.2,1)' : 'none',
      }}
    />
  </div>
)

export const SkillsMatrix: React.FC = () => {
  const { ref, inView } = useInView()

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '5rem 0' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
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
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gap: 24 }}
          className="sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className={`card-vintage ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                padding: '1.5rem',
                animationDelay: inView ? `${gi * 0.1}s` : '0s',
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, fontWeight: 500, color: '#8b7d60',
                  letterSpacing: '0.08em',
                }}>
                  {group.tag}
                </span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800, fontSize: 15, color: '#1a1208',
                }}>
                  {group.label}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{
                        fontSize: 12.5, fontWeight: 700, color: '#1a1208',
                        fontFamily: "'Lato', sans-serif",
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: '#8b7d60',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar level={skill.level} animate={inView} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip — languages + education */}
        <div
          className={`card-vintage ${inView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}
          style={{ marginTop: 24, padding: '1.5rem 2rem' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 4rem', alignItems: 'flex-start' }}>
            {/* Languages */}
            <div>
              <p style={{
                fontSize: 10, fontWeight: 900, letterSpacing: '0.26em',
                textTransform: 'uppercase', color: '#8b7d60', marginBottom: 10,
                fontFamily: "'Lato', sans-serif",
              }}>
                Languages Spoken
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  { lang: 'Amharic', note: 'Native' },
                  { lang: 'English', note: 'Professional' },
                ].map(({ lang, note }) => (
                  <span key={lang} className="skill-pill"
                    style={{ fontFamily: "'Lato', sans-serif" }}>
                    {lang} — {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Vertical divider */}
            <div style={{ width: 1, background: 'rgba(26,18,8,0.1)', alignSelf: 'stretch', minHeight: 40 }} />

            {/* Education */}
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
        </div>

        <hr className="divider-dotted" style={{ marginTop: '4rem' }} />
      </div>
    </section>
  )
}
