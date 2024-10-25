import SparklesText from "@/components/anim/sparkles-text";
import WordPullUp from "@/components/anim/word-pullup";
import About from "@/components/sections/about-section";
import FooterSection from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skills-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5 text-center">
      <section className="flex flex-col gap-5">
        <HeroSection />
        <SparklesText
          className="text-2xl md:text-4xl"
          text="Hi, I'm Tewodros Birhanu"
        />
        <WordPullUp
          className=" font-normal md:text-xl tracking-tight md:font-bold text-black dark:text-white"
          words="Software Engineer. Building future..."
        />
        <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
          <Button className=" h-full">View Resume</Button>
        </Link>
      </section>

      <SkillSection />
      <ProjectsSection />
      {/* <TestimonialSection /> */}
      <About />
    </main>
  );
}
