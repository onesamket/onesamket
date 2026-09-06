import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Copy, ArrowRight } from 'lucide-react'

// ─── Clean paper-plane SVG illustration ───
const HeroIllustration: React.FC = () => (
  <svg
    viewBox="0 0 360 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', maxWidth: 360, display: 'block' }}
  >
    <ellipse cx="150" cy="298" rx="80" ry="9" fill="rgba(26,18,8,0.07)" />
    <path d="M 175 128 C 210 95 255 68 310 40" stroke="#1a1208" strokeWidth="1.5" strokeDasharray="5 6" opacity="0.3" />
    <g className="animate-float" style={{ transformOrigin: '305px 46px' }}>
      <path d="M288 55 L330 36 L310 64 Z" stroke="#1a1208" strokeWidth="1.8" fill="rgba(201,135,62,0.18)" strokeLinejoin="round" />
      <path d="M310 64 L294 58 L288 55 Z" stroke="#1a1208" strokeWidth="1.4" fill="rgba(201,135,62,0.1)" />
      <line x1="300" y1="50" x2="310" y2="64" stroke="#1a1208" strokeWidth="0.9" opacity="0.4" />
    </g>
    <ellipse cx="130" cy="291" rx="14" ry="5" fill="#1a1208" opacity="0.85" />
    <ellipse cx="170" cy="293" rx="11" ry="4.5" fill="#1a1208" opacity="0.85" />
    <path d="M138 272 Q132 282 130 291" stroke="#1a1208" strokeWidth="8" strokeLinecap="round" />
    <path d="M152 270 Q162 280 170 293" stroke="#1a1208" strokeWidth="8" strokeLinecap="round" />
    <rect x="126" y="240" width="40" height="36" rx="5" fill="#1a1208" opacity="0.88" />
    <rect x="118" y="192" width="52" height="54" rx="7" fill="#3d3426" />
    <line x1="144" y1="193" x2="144" y2="244" stroke="#f5f0e0" strokeWidth="1" opacity="0.25" />
    <path d="M137 193 L144 210 L151 193" fill="#c9873e" />
    <path d="M118 202 Q96 174 78 152" stroke="#3d3426" strokeWidth="16" strokeLinecap="round" />
    <path d="M78 152 Q72 145 66 138" stroke="#c9a075" strokeWidth="12" strokeLinecap="round" />
    <path d="M170 208 Q182 224 184 238" stroke="#3d3426" strokeWidth="14" strokeLinecap="round" />
    <circle cx="63" cy="135" r="9" fill="#c9a075" />
    <rect x="137" y="178" width="14" height="18" rx="5" fill="#c9a075" />
    <ellipse cx="144" cy="162" rx="26" ry="28" fill="#c9a075" />
    <path d="M120 148 Q144 126 168 148" stroke="#1a1208" strokeWidth="3" fill="rgba(26,18,8,0.9)" />
    <path d="M118 144 Q144 122 170 144" stroke="#1a1208" strokeWidth="1.5" fill="none" opacity="0.4" />
    <ellipse cx="136" cy="162" rx="4" ry="4.5" fill="#1a1208" />
    <ellipse cx="152" cy="162" rx="4" ry="4.5" fill="#1a1208" />
    <circle cx="135" cy="160" r="1.2" fill="white" />
    <circle cx="151" cy="160" r="1.2" fill="white" />
    <path d="M144 165 Q147 172 144 174" stroke="#a36830" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M136 177 Q144 183 152 177" stroke="#1a1208" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <path d="M136 170 Q140 173 144 171 Q148 173 152 170" stroke="#1a1208" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="118" y="136" width="52" height="7" rx="2.5" fill="#1a1208" />
    <rect x="124" y="112" width="40" height="26" rx="4" fill="#1a1208" />
    <rect x="124" y="130" width="40" height="6" rx="1" fill="#c9873e" opacity="0.6" />
    <rect x="72" y="282" width="50" height="9" rx="2" fill="#3d3426" />
    <rect x="74" y="273" width="46" height="11" rx="2" fill="#c9873e" opacity="0.75" />
    <rect x="76" y="264" width="42" height="11" rx="2" fill="#8b7d60" opacity="0.65" />
    <line x1="74" y1="278" x2="74" y2="291" stroke="#f5f0e0" strokeWidth="1" opacity="0.3" />
    <line x1="76" y1="268" x2="76" y2="283" stroke="#f5f0e0" strokeWidth="1" opacity="0.3" />
  </svg>
)

// Shared fade-up variant
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.58, ease: 'easeOut' as const, delay },
})

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('onesamket@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="about" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}
          className="lg:flex-row lg:items-start lg:justify-between"
        >
          {/* ── TEXT ── */}
          <div style={{ flex: 1, maxWidth: 560 }}>
            <motion.p {...fadeUp(0)} style={{
              fontSize: 10.5, fontWeight: 900, letterSpacing: '0.26em',
              textTransform: 'uppercase', color: '#8b7d60', marginBottom: 16,
              fontFamily: "'Lato', sans-serif",
            }}>
              Full-Stack Developer · MERN · PostgreSQL · Prisma · React Native
            </motion.p>

            <motion.h1 {...fadeUp(0.1)} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(46px, 7vw, 82px)',
              fontWeight: 900, lineHeight: 1.04,
              letterSpacing: '-0.015em', color: '#1a1208', margin: 0,
            }}>
              Build fast.
              <br />
              <em style={{ color: '#c9873e', fontStyle: 'italic' }}>Ship clean.</em>
            </motion.h1>

            <motion.p {...fadeUp(0.18)} style={{
              marginTop: 24, fontSize: 15, lineHeight: 1.75,
              color: '#4a3f28', fontFamily: "'Lato', sans-serif", maxWidth: 480,
            }}>
              Co-Founder of{' '}
              <strong style={{ color: '#1a1208', fontWeight: 900 }}>MeadMenus</strong> and
              Founder at{' '}
              <strong style={{ color: '#1a1208', fontWeight: 900 }}>Siket</strong>.
              I engineer high-performance web apps, AI-powered workspaces, and smooth
              mobile experiences for startups.
            </motion.p>

            {/* Badges */}
            <motion.div {...fadeUp(0.26)} style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                'Co-Founder @ MeadMenus',
                'Founder @ Siket',
                'B.Sc. IT · Haramaya Univ.',
                'Addis Ababa & Remote',
              ].map((badge) => (
                <span key={badge} className="skill-pill" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.34)} style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <motion.a
                href="#projects"
                className="btn-ink"
                whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(26,18,8,0.18)' }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                View My Work <ArrowRight size={14} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.15 }}
              >
                Get In Touch
              </motion.a>
              <motion.button
                onClick={handleCopyEmail}
                className="btn-outline"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                style={{ gap: 6 }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </motion.button>
            </motion.div>
          </div>

          {/* ── ILLUSTRATION ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: 340, flexShrink: 0 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        <motion.hr
          className="divider-dotted"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          style={{ marginTop: '4rem' }}
        />
      </div>
    </section>
  )
}
