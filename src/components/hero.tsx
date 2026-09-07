import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Check, Copy, ArrowRight } from 'lucide-react'
import { PillBadge } from '@/components/pill-badge'

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
    <section id="about" className="section section-hero" aria-label="Introduction">
      <div className="aurora aurora-a" aria-hidden="true" />
      <div className="site-wrap" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <motion.div {...fadeUp(0)}>
            <PillBadge>Available for projects</PillBadge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: 'inherit',
              fontSize: 'clamp(32px, 8.5vw, 68px)',
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#f4f7fb',
              margin: '28px 0 0',
              maxWidth: 720,
            }}
          >
            <span className="sr-only">
              Tewodros Birhanu, full-stack and product engineer.{' '}
            </span>
            Build fast. Ship clean.
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            style={{
              marginTop: 18,
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(196, 210, 230, 0.72)',
              maxWidth: 520,
            }}
          >
            Co-Founder of <strong style={{ color: '#f4f7fb', fontWeight: 600 }}>MeadMenus</strong>{' '}
            and Founder at <strong style={{ color: '#f4f7fb', fontWeight: 600 }}>Siket</strong>.
            I engineer high-performance web apps, AI-powered workspaces, and
            smooth mobile experiences for startups.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="hero-actions">
            <motion.a
              href="#projects"
              className="btn-ink"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.15 }}
            >
              View my work <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.15 }}
            >
              Get in touch
            </motion.a>
            <motion.button
              type="button"
              onClick={handleCopyEmail}
              className="btn-outline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              style={{ gap: 6 }}
              aria-label="Copy email address"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied!' : 'Copy email'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
