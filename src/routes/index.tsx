import Contact from '@/components/contact'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import AuthorSection from '@/components/author-section'
import SkillLists from '@/components/skill-lists'
import SoftwareSkills from '@/components/software-skills'
import Header from '@/components/header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f0e8] text-[#073f8f]">
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 md:py-12 lg:px-10">
        <div className="space-y-16 md:space-y-20">
          <Header />

          <Experience />

          <div className="grid grid-cols-1 gap-10 border-t-2 border-[#0759bd] pt-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">
            <Education />
            <SoftwareSkills />
          </div>

          <SkillLists />

          <Projects />

          <Contact />
        </div>
        <div className="mt-16 md:mt-20">
          <AuthorSection
            name="Tewodros Birhanu"
            avatar="https://github.com/onesamket.png"
          />
        </div>
        <footer className="mt-16 border-t-2 border-[#0759bd] pt-8 text-center text-sm text-[#073f8f] md:mt-20">
          <div className="mb-4 flex flex-wrap justify-center gap-x-8 gap-y-3">
            <button
              onClick={() => window.scrollTo({ top: 0 })}
              className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0759bd] hover:underline"
            >
              Back to Top
            </button>
            <a
              href="https://github.com/onesamket"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0759bd] hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ln-onesamket/"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0759bd] hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[#335f99]">
            &copy; {new Date().getFullYear()} Tewodros Birhanu.
          </p>
        </footer>
      </main>
    </div>
  )
}
