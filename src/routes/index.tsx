
import { createFileRoute } from '@tanstack/react-router'
import AboutSection from '@/components/about-section'
import BookCard from '@/components/book-card'
import ContactCard from '@/components/contact-card'
import ExperienceCard from '@/components/experience-card'
import GithubCard from '@/components/github-card'
import Header from '@/components/header-section'
import Hero from '@/components/hero-section'
import HowIWorkCard from '@/components/hiw-card'
import MapCard from '@/components/map-card'
import MusicCard from '@/components/music-card'
import ProjectsGrid from '@/components/projects-grid'
import ServicesCard from '@/components/services-card'
import TechStackCard from '@/components/techstack-card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-brand-darkBg px-4 md:px-8 lg:px-12 pb-20 selection:bg-brand-orange selection:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <Header />

        <main>
          {/* Hero Section */}
          <Hero />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 auto-rows-[minmax(180px,auto)]">
            {/* Experience Section */}
            <div className="md:col-span-4 md:row-span-2" id="experience">
              <ExperienceCard />
            </div>

            {/* Music Section */}
            <div className="md:col-span-4 md:row-span-1 min-h-[280px]">
              <MusicCard />
            </div>

            {/* Reading Section */}
            <div className="md:col-span-4 md:row-span-1 min-h-[280px]">
              <BookCard />
            </div>

            {/* Map Section */}
            <div className="md:col-span-4 md:row-span-1 min-h-[160px]">
              <MapCard />
            </div>

            {/* How I Work Section */}
            <div className="md:col-span-4 md:row-span-1 min-h-[160px]" id="work">
              <HowIWorkCard />
            </div>

            {/* Services & Tech Section */}
            <div className="md:col-span-6 md:row-span-1 min-h-[220px]" id="services">
              <ServicesCard />
            </div>

            <div className="md:col-span-6 md:row-span-1 min-h-[220px]">
              <TechStackCard />
            </div>

            {/* Projects Section */}
            <div className="md:col-span-12 mt-6">
              <ProjectsGrid />
            </div>

            {/* GitHub Section */}
            <div className="md:col-span-12 mt-6">
              <GithubCard />
            </div>

            {/* About Section (Full width) */}
            <div className="md:col-span-12 mt-6" id="about">
              <AboutSection />
            </div>

            {/* Contact Section - Full width */}
            <div className="md:col-span-12 min-h-[300px] mt-6" id="contact">
              <ContactCard />
            </div>

          </div>
        </main>

        <footer className="mt-20 py-8 border-t border-gray-100 dark:border-white/10 flex flex-col-reverse md:flex-row justify-between items-center text-gray-400 dark:text-gray-500 text-sm gap-6 md:gap-0 transition-colors">
          <p className="text-center md:text-left">© 2024 Tewodros Birhanu. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="https://x.com/onesamket" className="hover:text-brand-black dark:hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/ln-onesamket/" className="hover:text-brand-black dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/onesamket" className="hover:text-brand-black dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://t.me/onesamket" className="hover:text-brand-black dark:hover:text-white transition-colors">Telegram</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
