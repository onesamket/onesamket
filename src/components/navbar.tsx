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

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Top bar ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div
          style={{
            margin: '12px 16px 0',
            borderRadius: 16,
            transition: 'background 0.3s, border 0.3s',
            background: scrolled
              ? 'rgba(245,240,224,0.92)'
              : 'rgba(245,240,224,0.6)',
            backdropFilter: 'blur(14px)',
            border: scrolled
              ? '1.5px solid rgba(26,18,8,0.12)'
              : '1.5px solid rgba(26,18,8,0.06)',
          }}
        >
          <div
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              padding: '0 1.5rem',
              height: 58,
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
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: 22, fontWeight: 900, color: '#1a1208',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}
            >
              TB.
            </button>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
              className="hidden md:flex">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = active === href.slice(1)
                return (
                  <a
                    key={href}
                    href={href}
                    style={{
                      position: 'relative',
                      fontSize: 11.5, fontWeight: 800,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: isActive ? '#1a1208' : '#4a3f28',
                      transition: 'color 0.2s',
                      paddingBottom: 2,
                    }}
                  >
                    {label}
                    <motion.span
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: 1.5, background: '#c9873e', borderRadius: 1,
                        transformOrigin: 'left',
                      }}
                    />
                  </a>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <motion.a
              href="/docs/tewodros-birhanu-resume.pdf"
              download
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.15 }}
              className="hidden md:inline-flex"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: '#1a1208', color: '#f5f0e0',
                border: '1.5px solid #1a1208', borderRadius: 10,
                padding: '7px 16px', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textDecoration: 'none', cursor: 'pointer',
              }}
            >
              <Download size={11} />
              Download CV
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#1a1208', padding: 4, display: 'flex', alignItems: 'center',
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden"
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: '#f5f0e0',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '2.5rem', padding: '2rem',
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 34, fontWeight: 700, color: '#1a1208',
                  textDecoration: 'none',
                }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="/docs/tewodros-birhanu-resume.pdf"
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              style={{
                marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#1a1208', color: '#f5f0e0',
                border: '1.5px solid #1a1208', borderRadius: 12,
                padding: '12px 28px', fontSize: 12, fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              }}
            >
              <Download size={13} />
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
