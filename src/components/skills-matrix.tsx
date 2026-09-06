import React from 'react'

interface Skill {
  name: string
  level: number // 0-100
}

interface SkillCategory {
  label: string
  skills: Skill[]
  icon: string
}

const skillGroups: SkillCategory[] = [
  {
    label: 'Frontend',
    icon: '🖥',
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
    icon: '⚙️',
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
    icon: '🤖',
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
    icon: '🎨',
    skills: [
      { name: 'Figma & UI/UX Design', level: 80 },
      { name: 'Web Accessibility (WCAG)', level: 78 },
      { name: 'SEO & Core Web Vitals', level: 78 },
      { name: 'Product Strategy', level: 75 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
]

/* Tiny vintage progress bar component */
const ProgressBar: React.FC<{ level: number }> = ({ level }) => (
  <div
    className="relative h-1.5 w-full overflow-hidden rounded-full"
    style={{ background: 'rgba(26,18,8,0.1)' }}
    role="progressbar"
    aria-valuenow={level}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
      style={{
        width: `${level}%`,
        background: 'linear-gradient(90deg, #c9873e 0%, #1a1208 100%)',
      }}
    />
  </div>
)

export const SkillsMatrix: React.FC = () => (
  <section id="skills" className="py-20 sm:py-28">
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#8b7d60]">
          Expertise
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
          Skills & Craft
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="card-vintage p-6">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="text-lg">{group.icon}</span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: '#1a1208',
                }}
              >
                {group.label}
              </h3>
            </div>

            <div className="space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex justify-between">
                    <span
                      className="text-[12.5px] font-bold text-[#1a1208]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {skill.name}
                    </span>
                    <span
                      className="text-[11px] font-black tabular-nums text-[#8b7d60]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <ProgressBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages spoken */}
      <div className="mt-10 card-vintage p-6">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#8b7d60]">
              Languages Spoken
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: 'Amharic', note: 'Native' },
                { lang: 'English', note: 'Professional' },
                { lang: 'Afaan Oromo', note: 'Conversational' },
              ].map(({ lang, note }) => (
                <span
                  key={lang}
                  className="skill-pill"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {lang} — {note}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#8b7d60]">
              Education
            </p>
            <p
              className="text-sm font-bold text-[#1a1208]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              B.Sc. Information Technology
            </p>
            <p className="text-[12px] text-[#4a3f28]">
              Haramaya University · 2020 – 2024
            </p>
          </div>
        </div>
      </div>

      <hr className="divider-dotted mt-16 sm:mt-20" />
    </div>
  </section>
)
