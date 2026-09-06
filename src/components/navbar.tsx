import React, { useEffect, useState } from 'react'
import { Download, X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)

      // Active section detection
      const ids = NAV_LINKS.map((l) => l.href.slice(1)).reverse()
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Top bar ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(245,240,224,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,18,8,0.1)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(26,18,8,0.06)' : 'none',
        }}
        className="animate-fade-in-down"
      >
        <div
          style={{
            maxWidth: 1000,
            margin: '0 auto',
            padding: '0 2rem',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 900,
              color: '#1a1208',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            TB.
          </button>

          {/* Desktop nav links */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    position: 'relative',
                    fontSize: 11.5,
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: isActive ? '#1a1208' : '#4a3f28',
                    transition: 'color 0.2s',
                    paddingBottom: 2,
                  }}
                >
                  {label}
                  {/* Animated underline */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 1.5,
                      background: '#c9873e',
                      borderRadius: 1,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/docs/tewodros-birhanu-resume.pdf"
            download
            className="btn-outline hidden md:inline-flex"
            style={{ padding: '7px 16px', fontSize: 11, gap: 6 }}
          >
            <Download size={11} />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1a1208',
              padding: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: '#f5f0e0',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          padding: '2rem',
        }}
      >
        {NAV_LINKS.map(({ label, href }, i) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 36,
              fontWeight: 700,
              color: '#1a1208',
              textDecoration: 'none',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.35s ${i * 0.06}s, transform 0.35s ${i * 0.06}s`,
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="/docs/tewodros-birhanu-resume.pdf"
          download
          className="btn-ink"
          style={{
            marginTop: 8,
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.35s 0.32s`,
          }}
        >
          <Download size={13} />
          Download CV
        </a>
      </div>
    </>
  )
}
