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
    <div
      className="min-h-screen"
      style={{ background: '#f5f0e0', color: '#1a1208' }}
    >
      {/* ── Global Navigation ── */}
      <Navbar />

      {/* ── One-Flow Sections ── */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Projects / Featured Work */}
        <FeaturedWork />

        {/* 3. Work Experience */}
        <ExperienceTimeline />

        {/* 4. Skills */}
        <SkillsMatrix />

        {/* 5. Contact */}
        <ContactSection />

        {/* ── Footer ── */}
        <footer
          className="border-t py-10 text-center"
          style={{
            borderColor: 'rgba(26,18,8,0.12)',
            background: '#ede8d4',
          }}
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            {/* Wordmark */}
            <p
              className="mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 900,
                color: '#1a1208',
              }}
            >
              TB.
            </p>

            {/* Links */}
            <div className="mb-5 flex flex-wrap justify-center gap-x-7 gap-y-2">
              {[
                { label: 'Back to Top', href: '#about', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'GitHub', href: 'https://github.com/onesamket' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ln-onesamket/' },
                { label: 'Email', href: 'mailto:onesamket@gmail.com' },
              ].map(({ label, href, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="nav-link"
                  style={{ fontSize: 11 }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="text-[11.5px]"
              style={{ color: '#8b7d60', fontFamily: "'Lato', sans-serif" }}
            >
              © {new Date().getFullYear()} Tewodros Birhanu · Full-Stack &
              Product Engineer · Built with React, TypeScript & TanStack
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
