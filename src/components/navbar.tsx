import React, { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      // Highlight active section
      const sections = navLinks.map((l) => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#f5f0e0]/95 backdrop-blur-sm border-b border-[rgba(26,18,8,0.1)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Wordmark */}
          <a
            href="#about"
            className="flex items-center gap-2 no-underline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Tiny vintage monogram */}
            <span
              className="animate-fade-in-down"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 900,
                color: '#1a1208',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              TB.
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex animate-fade-in-down animate-delay-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/docs/tewodros-birhanu-resume.pdf"
            download
            className="btn-outline hidden items-center gap-2 md:inline-flex animate-fade-in-down animate-delay-200"
            style={{ padding: '8px 18px', fontSize: 11 }}
          >
            <Download size={12} />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-[#1a1208] transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1a1208] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#1a1208] transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#f5f0e0] transition-transform duration-500 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="animate-fade-in-up"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 700,
                color: '#1a1208',
                textDecoration: 'none',
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/docs/tewodros-birhanu-resume.pdf"
            download
            className="btn-ink mt-4 animate-fade-in-up animate-delay-400"
          >
            <Download size={13} />
            Download CV
          </a>
        </div>
      </div>
    </>
  )
}
