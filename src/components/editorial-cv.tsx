import { Check, ExternalLink, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { experiences } from '@/constants/experience'

const hardSkills = [
  'React',
  'React Native',
  'TypeScript',
  'Next.js',
  'Node.js',
  'MEAN Stack',
  'TanStack Router',
  'WebRTC',
  'Prisma ORM',
  'Supabase',
  'Tailwind CSS',
  'Docker & CI/CD',
  'REST & GraphQL',
]

const softSkills = [
  'Start-up Leadership',
  'Product Strategy',
  'Clean Architecture',
  'Core Web Vitals',
  'Problem Solving',
  'UX Engineering',
]

export const EditorialCV: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://onesamket.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#1a3be8]/20 bg-white p-6 shadow-xl sm:p-10 lg:p-14">
      {/* Blurred vertical typographic watermark directly from the reference image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/3 select-none [writing-mode:vertical-rl] text-7xl font-black uppercase tracking-[0.25em] text-[#1a3be8]/[0.06] blur-[1px] md:-right-10 md:text-8xl lg:text-9xl"
      >
        curriculum vitae
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-10 lg:border-r lg:border-[#1a3be8]/25 lg:pr-12">
          {/* Contacts */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#1a3be8]">
              Contacts
            </h2>
            <div className="mt-5 space-y-3.5 text-sm">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#57648f]">
                  e-mail
                </span>
                <a
                  href="mailto:onesamket@gmail.com"
                  className="font-bold text-[#141a33] hover:text-[#1a3be8] hover:underline"
                >
                  onesamket@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#57648f]">
                  location
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#141a33]">
                  <MapPin size={14} className="text-[#1a3be8]" />
                  Addis Ababa, Ethiopia · Remote
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#57648f]">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/ln-onesamket/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#141a33] hover:text-[#1a3be8] hover:underline"
                >
                  linkedin.com/in/ln-onesamket
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#57648f]">
                  GitHub
                </span>
                <a
                  href="https://github.com/onesamket"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#141a33] hover:text-[#1a3be8] hover:underline"
                >
                  github.com/onesamket
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#57648f]">
                  Portfolio
                </span>
                <a
                  href="https://onesamket.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#141a33] hover:text-[#1a3be8] hover:underline"
                >
                  onesamket.com
                </a>
              </div>
            </div>
          </div>

          {/* Hard Skills */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#1a3be8]">
              Hard Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {hardSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#dbe4fc] px-3.5 py-1.5 text-xs font-bold text-[#1a3be8] transition-colors hover:bg-[#ccd9fa]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#1a3be8]">
              Soft Skills
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#dbe4fc] px-3.5 py-1.5 text-xs font-bold text-[#1a3be8] transition-colors hover:bg-[#ccd9fa]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Position Sought with Vertical Badge */}
          <div className="rounded-2xl border border-[#1a3be8]/20 bg-[#f4f7fd] p-5">
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                <span className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-black uppercase tracking-[0.24em] text-[#1a3be8]">
                  Position Sought
                </span>
              </div>
              <div className="space-y-2 text-xs font-medium leading-relaxed text-[#232d52]">
                <p>
                  I aspire to roles as{' '}
                  <strong className="font-black text-[#1a3be8]">
                    Full-Stack Developer
                  </strong>
                  ,{' '}
                  <strong className="font-black text-[#1a3be8]">
                    Product Engineer
                  </strong>
                  , or{' '}
                  <strong className="font-black text-[#1a3be8]">
                    Frontend Engineer
                  </strong>
                  , focusing on high-performance web applications, AI-enabled
                  features, and modern UI systems.
                </p>
                <p>
                  I also appreciate roles as{' '}
                  <strong className="font-black text-[#1a3be8]">
                    React Native Mobile Engineer
                  </strong>{' '}
                  crafting fluid 60fps cross-platform mobile apps.
                </p>
              </div>
            </div>
          </div>

          {/* Circular Stamp Graphic with Avatar (Matching image style) */}
          <div className="pt-2">
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
              {/* Rotating Circular Text */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full animate-[spin_25s_linear_infinite] overflow-visible"
              >
                <path
                  id="stampCircle"
                  d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
                  fill="none"
                />
                <text className="fill-[#1a3be8] text-[10px] font-black uppercase tracking-[0.26em]">
                  <textPath href="#stampCircle" startOffset="0%">
                    · FULL-STACK · REACT NATIVE · TYPESCRIPT · ETHIOPIA ·
                  </textPath>
                </text>
              </svg>

              {/* Portrait Image */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#1a3be8]/40 bg-[#dbe4fc] p-1 shadow-md">
                <img
                  src="https://github.com/onesamket.png"
                  alt="Tewodros Birhanu"
                  className="h-full w-full rounded-full object-cover grayscale contrast-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#1a3be8]">
              Education
            </h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-[#1a3be8]/20 bg-[#f8faff] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-black text-[#141a33]">
                    Bachelor&apos;s Degree in Information Technology
                  </h3>
                  <span className="rounded-full bg-[#dbe4fc] px-3 py-0.5 text-xs font-black text-[#1a3be8]">
                    2020 – 2024
                  </span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#1a3be8]">
                  Haramaya University · Ethiopia
                </p>
                <p className="mt-2.5 text-xs font-medium leading-relaxed text-[#57648f]">
                  Rigorous focus on software engineering fundamentals,
                  relational and distributed databases, computer networks, and
                  scalable web and mobile application architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline (with vertical solid line and blue nodes matching the image) */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#1a3be8]">
              Experience
            </h2>

            <div className="relative mt-8 space-y-8 pl-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-[2px] before:bg-[#1a3be8]">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot Node (Solid blue with white ring, matching image) */}
                  <div className="absolute -left-[31px] top-1.5 flex h-[16px] w-[16px] items-center justify-center rounded-full border-2 border-[#1a3be8] bg-white shadow-sm">
                    <div className="h-[8px] w-[8px] rounded-full bg-[#1a3be8]" />
                  </div>

                  {/* Experience Content */}
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-[#141a33]">
                          {exp.company}
                        </h3>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#1a3be8] hover:underline"
                            aria-label={`Open ${exp.company} website`}
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                      <span className="text-xs font-black text-[#1a3be8]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="mt-0.5 flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-[#1a3be8]">
                        {exp.role}
                      </p>
                      <span className="text-xs font-semibold text-[#57648f]">
                        · {exp.location}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-1.5 text-xs font-medium leading-relaxed text-[#232d52]">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#1a3be8]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-[#f0f4fd] px-2 py-0.5 text-[10px] font-semibold text-[#1a3be8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Interests Horizontal Sub-grid (Directly from reference image) */}
          <div className="grid gap-6 border-t border-[#1a3be8]/20 pt-8 sm:grid-cols-2">
            {/* Languages with dot ratings */}
            <div className="flex gap-4">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black uppercase tracking-[0.24em] text-[#1a3be8]">
                Languages
              </span>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs font-black text-[#141a33]">
                    <span>Amharic</span>
                    <span className="text-[10px] font-bold text-[#57648f]">
                      Native
                    </span>
                  </div>
                  <div className="mt-1 flex gap-1 text-[#1a3be8]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3 text-xs font-black text-[#141a33]">
                    <span>English</span>
                    <span className="text-[10px] font-bold text-[#57648f]">
                      Professional
                    </span>
                  </div>
                  <div className="mt-1 flex gap-1 text-[#1a3be8]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#1a3be8]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-[#1a3be8] bg-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="flex gap-4">
              <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black uppercase tracking-[0.24em] text-[#1a3be8]">
                Interests
              </span>
              <div className="space-y-1.5 text-xs font-bold text-[#141a33]">
                <p>• Open Source Tooling</p>
                <p>• Ethiopic Typography & Localization</p>
                <p>• Real-Time Audio & WebRTC</p>
                <p>• Mobile UI Micro-Interactions</p>
                <p>• Clean Software Architecture</p>
              </div>
            </div>
          </div>

          {/* Giant Editorial Typography Identity Block (Matching GAIA PUPELLA / Designer in the image) */}
          <div className="border-t border-[#1a3be8]/20 pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#57648f]">
                  TEWODROS BIRHANU
                </p>
                <h1 className="mt-1 text-5xl font-black leading-none tracking-tight text-[#1a3be8] sm:text-6xl md:text-7xl">
                  Full-Stack
                  <br />
                  Developer
                </h1>
              </div>

              {/* QR Code / Portfolio Box with Copy Action */}
              <button
                onClick={handleCopyUrl}
                title="Click to copy website URL"
                className="flex items-center gap-3 rounded-2xl border border-[#1a3be8]/30 bg-[#f4f7fd] p-3 text-left transition-all hover:border-[#1a3be8] hover:bg-[#eaf0fc]"
              >
                <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-black uppercase tracking-[0.24em] text-[#1a3be8]">
                  Portfolio
                </span>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-[#1a3be8]/25 bg-white p-1 shadow-sm">
                  {/* SVG QR Code graphic */}
                  <svg
                    viewBox="0 0 48 48"
                    className="h-full w-full fill-[#1a3be8]"
                  >
                    <path d="M4 4h14v14H4V4zm4 4v6h6V8H8zm22-4h14v14H30V4zm4 4v6h6V8h-6zM4 30h14v14H4V30zm4 4v6h6v-6H8zm26-4h4v4h-4v-4zm-4 4h4v4h-4v-4zm4 4h4v4h-4v-4zm4-4h4v4h-4v-4zm0 8h4v4h-4v-4zm-8 0h4v4h-4v-4zm-4-14h4v4h-4v-4zm8 4h4v4h-4v-4zm4-4h4v4h-4v-4zm-16 8h4v4h-4v-4zm0-8h4v4h-4v-4zm4 4h4v4h-4v-4z" />
                  </svg>
                  {copied && (
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#1a3be8] text-white">
                      <Check size={18} />
                    </div>
                  )}
                </div>
                <div className="text-[11px] font-bold text-[#1a3be8]">
                  <p>{copied ? 'URL Copied!' : 'Scan or Click'}</p>
                  <p className="text-[9px] font-semibold text-[#57648f]">
                    onesamket.com
                  </p>
                </div>
              </button>
            </div>

            {/* Outcome-oriented Bio with Highlight Banner (Directly from reference image) */}
            <div className="mt-6 space-y-3 text-sm font-medium leading-relaxed text-[#232d52]">
              <p>
                Co-Founder of MeadMenus and Founder & Product Engineer at Siket.
                I am a developer with{' '}
                <span className="rounded bg-[#1a3be8] px-2 py-0.5 font-bold text-white">
                  solid experience
                </span>{' '}
                in full-stack web, mobile, and AI products. Throughout my
                career, I have refined my skills in TypeScript, React, React
                Native, and scalable backend architecture.
              </p>
              <p className="font-bold text-[#141a33]">
                My goal is to build reliable, high-impact software and transform
                client ideas and user needs into engaging, high-performance
                digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
