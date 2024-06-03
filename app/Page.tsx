import AboutSection from "@/components/section/about-section";
import ContactSection from "@/components/section/contact-section";
import ExperienceSection from "@/components/section/experience-section";
import HeroSection from "@/components/section/hero-section";
import ProjectSection from "@/components/section/projects-section";

export default function HomePage() {
  return (
    <main >
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <div className="bg-base-300">
        <AboutSection />
      </div>
      <ContactSection />
    </main>
  );
}