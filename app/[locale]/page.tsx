import About from "@/components/sections/about-section";
import GreetingSection from "@/components/sections/greeting-section";
import ProjectsSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5 text-center">
      <GreetingSection />
      <SkillSection />
      <ProjectsSection />
      {/* <TestimonialSection /> */}
      <About />
    </main>
  );
}
