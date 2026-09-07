import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ContactSection } from '@/components/contact-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { SkillsMatrix } from '@/components/skills-matrix'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const FOOTER_NAV = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const FOOTER_SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/onesamket' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ln-onesamket' },
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
        <ContactSection />

        <footer style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="site-wrap"
            style={{
              paddingTop: '2.5rem',
              paddingBottom: '2.75rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
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
                    color: '#f4f7fb',
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
                    color: 'rgba(196,210,230,0.62)',
                    maxWidth: 280,
                    lineHeight: 1.6,
                  }}
                >
                  Full-Stack & Product Engineer. Building from Addis Ababa, shipping worldwide.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
                <nav aria-label="Footer">
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: 'rgba(160,178,204,0.52)',
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
                      color: 'rgba(160,178,204,0.52)',
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

            <p
              style={{
                fontSize: 12.5,
                color: 'rgba(160,178,204,0.42)',
              }}
            >
              &copy; {new Date().getFullYear()} Tewodros Birhanu. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
