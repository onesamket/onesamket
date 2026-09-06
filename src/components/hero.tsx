import React, { useState } from 'react'
import { Check, Copy, ArrowRight } from 'lucide-react'

/* ─── Vintage SVG: person tossing a paper plane ─── */
const HeroIllustration: React.FC = () => (
  <svg
    viewBox="0 0 320 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="animate-fade-in animate-delay-400 w-full max-w-xs sm:max-w-sm"
  >
    {/* Ground shadow */}
    <ellipse cx="120" cy="240" rx="72" ry="8" fill="rgba(26,18,8,0.07)" />

    {/* Paper plane trajectory (dashed scribble) */}
    <path
      d="M 155 120 Q 200 80 260 45 Q 290 28 310 18"
      stroke="#1a1208"
      strokeWidth="1.5"
      strokeDasharray="5 5"
      opacity="0.35"
    />

    {/* Paper plane */}
    <g className="animate-float" style={{ transformOrigin: '270px 60px' }}>
      <path
        d="M260 62 L295 48 L278 72 Z"
        stroke="#1a1208"
        strokeWidth="1.5"
        fill="rgba(201,135,62,0.15)"
        strokeLinejoin="round"
      />
      <path
        d="M278 72 L265 68 L260 62 Z"
        stroke="#1a1208"
        strokeWidth="1.2"
        fill="rgba(201,135,62,0.08)"
      />
      <line x1="270" y1="60" x2="278" y2="72" stroke="#1a1208" strokeWidth="0.8" opacity="0.5" />
    </g>

    {/* Vintage character — body */}
    <g className="animate-walk" style={{ transformOrigin: '120px 180px' }}>
      {/* Feet */}
      <ellipse cx="100" cy="232" rx="12" ry="5" fill="#1a1208" opacity="0.9" />
      <ellipse cx="136" cy="234" rx="10" ry="4" fill="#1a1208" opacity="0.9" />

      {/* Legs */}
      <path d="M108 220 Q102 228 100 232" stroke="#1a1208" strokeWidth="7" strokeLinecap="round" />
      <path d="M120 218 Q130 227 136 234" stroke="#1a1208" strokeWidth="7" strokeLinecap="round" />

      {/* Trousers */}
      <rect x="97" y="190" width="36" height="34" rx="4" fill="#1a1208" opacity="0.88" />

      {/* Body / jacket */}
      <rect x="92" y="148" width="46" height="48" rx="6" fill="#4a3f28" />
      <path d="M115 148 L115 196" stroke="#f5f0e0" strokeWidth="1" opacity="0.3" />

      {/* Collar + tie */}
      <path d="M110 148 L115 162 L120 148" fill="#c9873e" opacity="0.9" />

      {/* Left arm (raised – throwing) */}
      <path
        d="M92 158 Q74 138 62 120"
        stroke="#4a3f28"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M62 120 Q58 116 56 112"
        stroke="#c9a075"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Right arm (down) */}
      <path
        d="M138 162 Q148 174 150 186"
        stroke="#4a3f28"
        strokeWidth="13"
        strokeLinecap="round"
      />

      {/* Hand at tip of throwing arm */}
      <circle cx="56" cy="110" r="7" fill="#c9a075" />

      {/* Neck */}
      <rect x="109" y="134" width="12" height="16" rx="4" fill="#c9a075" />

      {/* Head */}
      <ellipse cx="115" cy="122" rx="22" ry="24" fill="#c9a075" />

      {/* Hair (hatched top) */}
      <path d="M95 110 Q115 92 135 110" stroke="#1a1208" strokeWidth="2.5" fill="none" />
      <path d="M97 106 Q115 90 133 106" stroke="#1a1208" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="108" cy="122" rx="3.5" ry="4" fill="#1a1208" />
      <ellipse cx="122" cy="122" rx="3.5" ry="4" fill="#1a1208" />
      {/* Eye shine */}
      <circle cx="107" cy="120" r="1" fill="white" />
      <circle cx="121" cy="120" r="1" fill="white" />

      {/* Nose */}
      <path d="M115 124 Q117 130 115 132" stroke="#a36830" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M107 134 Q115 139 123 134" stroke="#1a1208" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Moustache */}
      <path d="M107 128 Q111 131 115 129 Q119 131 123 128" stroke="#1a1208" strokeWidth="1.8" fill="none" strokeLinecap="round" />

      {/* Hat */}
      <rect x="95" y="102" width="40" height="6" rx="2" fill="#1a1208" />
      <rect x="100" y="84" width="30" height="20" rx="3" fill="#1a1208" />

      {/* Books / laptop on ground */}
      <rect x="56" y="224" width="44" height="8" rx="1.5" fill="#4a3f28" />
      <rect x="58" y="216" width="40" height="10" rx="1.5" fill="#c9873e" opacity="0.8" />
      <rect x="60" y="208" width="36" height="10" rx="1.5" fill="#8b7d60" opacity="0.7" />
    </g>
  </svg>
)

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('onesamket@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="about"
      className="pt-28 sm:pt-36 pb-20 sm:pb-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Two-column layout: text left, illustration right */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* TEXT */}
          <div className="flex-1 lg:max-w-xl">
            {/* Eyebrow */}
            <p
              className="animate-fade-in-up mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#8b7d60]"
            >
              Full-Stack Developer · MERN · PostgreSQL · Prisma · React Native
            </p>

            {/* Main headline — Playfair Display editorial */}
            <h1
              className="animate-fade-in-up animate-delay-100"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(44px, 7vw, 80px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
                color: '#1a1208',
              }}
            >
              Build fast.
              <br />
              <span style={{ color: '#c9873e' }}>Ship clean.</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="animate-fade-in-up animate-delay-200 mt-6 max-w-lg text-base font-normal leading-relaxed text-[#4a3f28]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Co-Founder of{' '}
              <strong className="font-black text-[#1a1208]">MeadMenus</strong> and
              Founder & Product Engineer at{' '}
              <strong className="font-black text-[#1a1208]">Siket</strong>. I
              engineer high-performance web applications, AI-powered workspaces,
              and fluid mobile apps for teams and startups.
            </p>

            {/* Quick context badges */}
            <div className="animate-fade-in-up animate-delay-300 mt-8 flex flex-wrap gap-2">
              {[
                '⚡ Co-Founder @ MeadMenus',
                '🚀 Founder @ Siket',
                '🎓 B.Sc. IT · Haramaya Univ.',
                '📍 Addis Ababa & Remote',
              ].map((badge) => (
                <span
                  key={badge}
                  className="skill-pill"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-in-up animate-delay-400 mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-ink">
                View My Work
                <ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <button
                onClick={handleCopyEmail}
                className="btn-outline"
                style={{ gap: '6px', paddingLeft: 16, paddingRight: 16 }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* ILLUSTRATION */}
          <div className="flex items-center justify-center lg:w-80">
            <HeroIllustration />
          </div>
        </div>

        {/* Dotted divider */}
        <hr className="divider-dotted mt-16 sm:mt-20" />
      </div>
    </section>
  )
}
