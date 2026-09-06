import { createFileRoute } from '@tanstack/react-router'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { EditorialCV } from '@/components/editorial-cv'
import Projects from '@/components/projects'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-[#edf2fc] text-[#141a33] selection:bg-[#1a3be8] selection:text-white">
      {/* Editorial Top Utility Bar */}
      <header className="border-b border-[#1a3be8]/15 bg-white/70 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-[#1a3be8]">
              Available for Full-Stack & Mobile Roles
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/docs/tewodros-birhanu-resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1a3be8] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-[#132db8]"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Download</span> CV
            </a>

            <a
              href="https://github.com/onesamket"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1a3be8]/25 text-[#1a3be8] transition-colors hover:bg-[#dbe4fc]"
            >
              <Github size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/ln-onesamket/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1a3be8]/25 text-[#1a3be8] transition-colors hover:bg-[#dbe4fc]"
            >
              <Linkedin size={15} />
            </a>

            <a
              href="mailto:onesamket@gmail.com"
              aria-label="Email"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1a3be8]/25 text-[#1a3be8] transition-colors hover:bg-[#dbe4fc]"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12">
        {/* Main Graphic Editorial CV Poster */}
        <EditorialCV />

        {/* Selected Work & Proof of Code Section */}
        <Projects />

        {/* Editorial Footer */}
        <footer className="mt-16 border-t border-[#1a3be8]/20 pt-8 pb-12 text-center text-xs text-[#57648f] sm:mt-24">
          <div className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-black uppercase tracking-[0.2em] text-[#1a3be8] hover:underline"
            >
              Back to Top
            </button>
            <a
              href="https://github.com/onesamket"
              target="_blank"
              rel="noreferrer"
              className="font-black uppercase tracking-[0.2em] text-[#1a3be8] hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ln-onesamket/"
              target="_blank"
              rel="noreferrer"
              className="font-black uppercase tracking-[0.2em] text-[#1a3be8] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:onesamket@gmail.com"
              className="font-black uppercase tracking-[0.2em] text-[#1a3be8] hover:underline"
            >
              onesamket@gmail.com
            </a>
          </div>
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Tewodros Birhanu · Full-Stack
            Developer
          </p>
        </footer>
      </main>
    </div>
  )
}
