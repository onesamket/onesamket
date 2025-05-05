import About from "@/components/sections/about-section";
import CombinedExperienceSection from "@/components/sections/combined-experience";
import ContactSection from "@/components/sections/contact-section";
import GreetingSection from "@/components/sections/greeting-section";
import ProjectStatsSection from "@/components/sections/project-stats";
import ProjectTimelineSection from "@/components/sections/project-timeline";
import SkillSection from "@/components/sections/skills-section";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen">
        <GreetingSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Skills Section */}
      <section>
        <SkillSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Project Statistics */}
      <section>
        <ProjectStatsSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Experience & Education */}
      <section>
        <CombinedExperienceSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* Project Timeline */}
      <section>
        <ProjectTimelineSection />
      </section>
      
      <Separator className="my-4" />
      
      {/* About Section */}
      <section>
        <About />
      </section>
      
      <Separator className="my-4" />

    </main>
  );
}
