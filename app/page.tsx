import About from "@/components/sections/about-section";
import CombinedExperienceSection from "@/components/sections/experience";
import GreetingSection from "@/components/sections/greeting-section";
import SkillSection from "@/components/sections/skills-section";
import { MobileTabbar } from "@/components/ui/mobile-tabbar";
import { Separator } from "@/components/ui/separator";

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
      
      {/* Experience & Education */}
      <section id="experience-section">
        <CombinedExperienceSection />
      </section>
      
      <Separator className="my-4" />
      
     
      
      
      {/* About Section */}
      <section id="about-section">
        <About />
      </section>
      
      
    
      
      {/* Mobile Navigation */}
      <MobileTabbar />
    </main>
  );
}
