import About from "@/components/sections/about-section";
import CombinedExperienceSection from "@/components/sections/combined-experience";
import ContactSection from "@/components/sections/contact-section";
import GreetingSection from "@/components/sections/greeting-section";
import ProjectStatsSection from "@/components/sections/project-stats";
import ProjectTimelineSection from "@/components/sections/project-timeline";
import SkillSection from "@/components/sections/skills-section";
import { Separator } from "@/components/ui/separator";
import { MobileTabbar } from "@/components/ui/mobile-tabbar";

export default function HomePage() {
  return (
    <main className="flex flex-col pb-16 md:pb-0">
      {/* Hero Section */}
      <section id="home-section" className="min-h-screen">
        <GreetingSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Skills Section */}
      <section id="skills-section">
        <SkillSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Project Statistics */}
      <section id="stats-section">
        <ProjectStatsSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Experience & Education */}
      <section id="experience-section">
        <CombinedExperienceSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Project Timeline */}
      <section id="projects-section">
        <ProjectTimelineSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* About Section */}
      <section id="about-section">
        <About />
      </section>
      
      <Separator className="my-4" />
      
      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection />
      </section>
      
      {/* Mobile Navigation */}
      <MobileTabbar />
    </main>
  );
}
