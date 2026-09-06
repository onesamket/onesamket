import { createFileRoute } from '@tanstack/react-router'
import { ContactSection } from '@/components/contact-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { FeaturedWork } from '@/components/featured-work'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { SkillsMatrix } from '@/components/skills-matrix'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f0e0', color: '#1a1208' }}>
      {/* Navigation */}
      <Navbar />

      {/* One-flow content */}
      <main>
        <Hero />
        <FeaturedWork />
        <ExperienceTimeline />
        <SkillsMatrix />
        <ContactSection />

        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid rgba(26,18,8,0.1)',
            background: '#ede8d4',
            padding: '3rem 0 2rem',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem' }}>
            {/* Top row: wordmark + links */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px dashed rgba(26,18,8,0.12)',
              }}
            >
              {/* Wordmark */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26,
                  fontWeight: 900,
                  color: '#1a1208',
                  letterSpacing: '-0.02em',
                  padding: 0,
                }}
              >
                TB.
              </button>

              {/* Nav links */}
              <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem 2rem' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/onesamket' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ln-onesamket/' },
                  { label: 'Email', href: 'mailto:onesamket@gmail.com' },
                  { label: 'Back to Top', href: '#', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                ].map(({ label, href, onClick }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={onClick}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: '#4a3f28',
                      transition: 'color 0.18s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1208')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#4a3f28')}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom row: copy + stack note */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}
            >
              <p style={{
                fontSize: 11.5,
                color: '#8b7d60',
                fontFamily: "'Lato', sans-serif",
                margin: 0,
              }}>
                &copy; {new Date().getFullYear()} Tewodros Birhanu · Full-Stack & Product Engineer
              </p>
              <p style={{
                fontSize: 11,
                color: '#8b7d60',
                fontFamily: "'Lato', sans-serif",
                margin: 0,
                letterSpacing: '0.04em',
              }}>
                Built with React · TypeScript · TanStack
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
