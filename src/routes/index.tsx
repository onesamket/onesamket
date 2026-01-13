
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

    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-12 md:pb-20 lg:pb-24">
        <div className="space-y-24 animate-in fade-in duration-700">
          {/* Introduction & Header Section */}
          <Header />

          {/* Professional Journey */}
          <Experience />

          {/* Education & Tech Stack Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <Education />
            <SoftwareSkills />
          </div>

          {/* Skills & Technologies Grid */}
          <SkillLists />

          {/* Featured Projects */}
          <Projects />

          {/* Final Contact Section */}
          <Contact />
        </div>
        <div className="mt-24">
          <AuthorSection name="Tewodros Birhanu" avatar="https://github.com/onesamket.png" />
        </div>
        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-300 text-sm text-gray-500 text-center">
          <div className="flex justify-center gap-8 mb-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-black transition-colors uppercase tracking-widest text-[10px] font-bold">Back to Top</button>
            <a href="https://github.com/onesamket" target="_blank" className="hover:text-black transition-colors uppercase tracking-widest text-[10px] font-bold">GitHub</a>
            <a href="https://www.linkedin.com/in/ln-onesamket/" target="_blank" className="hover:text-black transition-colors uppercase tracking-widest text-[10px] font-bold">LinkedIn</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Tewodros Birhanu.</p>
        </footer>
      </main>
    </div>

  )
}
