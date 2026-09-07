import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { SkillsMatrix } from '@/components/skills-matrix'
import { ThemeToggle } from '@/components/theme-toggle'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const FOOTER_NAV = [
  { label: 'Home', href: '#top' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const FOOTER_SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/onesamket' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ln-onesamket' },
  { label: 'Twitter', href: 'https://twitter.com/onesamket' },
  { label: 'Telegram', href: 'https://t.me/onesamket' },
  { label: 'Email', href: 'mailto:onesamket@gmail.com' },
]

function HomePage() {
  return (
    <div className="page">
      <div className="page-grain" aria-hidden="true" />

      <Navbar />

      <main id="main" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <FeaturedWork />
        <ExperienceTimeline />
        <SkillsMatrix />
        <AboutSection />
        <ContactSection />

        <footer style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="site-wrap"
            style={{
              paddingTop: '2.5rem',
              paddingBottom: '2.75rem',
              borderTop: '1px solid var(--line)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '2rem',
                marginBottom: '2rem',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    className="logo-mark"
                    aria-hidden="true"
                    style={{ width: 24, height: 24 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="8" cy="8" r="1.15" fill="currentColor" />
                    </svg>
                  </span>
                  onesamket
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: 'var(--text-muted)',
                    maxWidth: 280,
                    lineHeight: 1.6,
                  }}
                >
                  Engineering elegant solutions from concept to production.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                <nav aria-label="Footer">
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'var(--text-faint)',
                      marginBottom: 14,
                    }}
                  >
                    Navigate
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {FOOTER_NAV.map((item) => (
                      <li key={item.href} style={{ marginBottom: 8 }}>
                        <a href={item.href} className="footer-link">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <nav aria-label="Social">
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'var(--text-faint)',
                      marginBottom: 14,
                    }}
                  >
                    Connect
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {FOOTER_SOCIAL.map(({ label, href }) => (
                      <li key={label} style={{ marginBottom: 8 }}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer me"
                          className="footer-link"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <p
                style={{
                  fontSize: 12.5,
                  color: 'var(--text-faint)',
                }}
              >
                &copy; {new Date().getFullYear()} Tewodros Birhanu. All rights reserved.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
