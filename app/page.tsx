import About from '@/components/sections/about-section';
import CombinedExperienceSection from '@/components/sections/experience';
import GreetingSection from '@/components/sections/greeting-section';
import SkillSection from '@/components/sections/skills-section';
import { MobileTabbar } from '@/components/ui/mobile-tabbar';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="flex flex-col pb-16 md:pb-0"
        role="main"
      >
        {/* Hero Section */}
        <section
          id="home-section"
          className="min-h-screen"
          aria-label="Introduction and contact information"
        >
          <GreetingSection />
        </section>

        <Separator className="my-4" />

        {/* Skills Section */}
        <section id="skills-section" aria-label="Skills and technologies">
          <SkillSection />
        </section>

        <Separator className="my-4" />

        {/* Experience & Education */}
        <section
          id="experience-section"
          aria-label="Professional experience and education"
        >
          <CombinedExperienceSection />
        </section>

        <Separator className="my-4" />

        {/* About Section */}
        <section
          id="about-section"
          aria-label="About me and personal information"
        >
          <About />
        </section>

        {/* Mobile Navigation */}
        <MobileTabbar />
      </main>
    </>
  );
}
