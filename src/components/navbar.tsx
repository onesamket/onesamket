import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Download, X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const LogoMark = () => (
  <span className="logo-mark" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="1.15" fill="currentColor" />
    </svg>
  </span>
)

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = NAV_LINKS.map((l) => l.href.slice(1)).reverse()
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', closeOnDesktop)
    return () => mq.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <>
      <motion.header
        className={`site-header${scrolled ? ' is-scrolled' : ''}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="site-wrap site-header-inner">
          <button
            className="wordmark"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <LogoMark />
            onesamket
          </button>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={isActive ? 'is-active' : undefined}
                >
                  {label}
                </a>
              )
            })}
          </nav>

          <div className="nav-end">
            <a
              className="nav-cta"
              href="/docs/tewodros-birhanu-resume.pdf"
              download
            >
              Download CV
            </a>
            <button
              className="nav-burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              key="backdrop"
              type="button"
              className="nav-drawer-backdrop"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              key="drawer"
              className="nav-drawer"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.28 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: 14,
                    textDecoration: 'none',
                    background:
                      active === href.slice(1)
                        ? 'rgba(255,255,255,0.06)'
                        : 'transparent',
                    fontFamily: 'inherit',
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#f4f7fb',
                  }}
                >
                  {label}
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: 'rgba(160,178,204,0.52)',
                    }}
                  >
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href="/docs/tewodros-birhanu-resume.pdf"
                download
                className="btn-ink"
                style={{ marginTop: 8, justifyContent: 'center', width: '100%' }}
                onClick={() => setMenuOpen(false)}
              >
                <Download size={13} />
                Download CV
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
