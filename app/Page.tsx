import AboutMe from "@/components/about-me";
import { AvatarComponent } from "@/components/avatar-component";
import SparklesText from "@/components/magicui/sparkles-text";
import WordPullUp from "@/components/magicui/word-pullup";
import ProjectCard from "@/components/project-card";
import SkillsList from "@/components/skills-list";
import { Button } from "@/components/ui/button";
import { PROJECT_LIST } from "@/constants/project-list";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-5 text-center">
      <section className="flex flex-col gap-5">
        <AvatarComponent />
        <SparklesText
          className="text-2xl md:text-4xl"
          text="Hi, I'm Tewodros Birhanu"
        />
        <WordPullUp
          className=" font-normal md:text-xl tracking-tight md:font-bold text-black dark:text-white"
          words="Full-stack developer. I build websites & applications for the people"
        />
        <Link target="_blank" href="https://flowcv.com/resume/vkc21asr0g">
          <Button className=" h-full">View Resume</Button>
        </Link>
      </section>

      {/* skills sections  */}
      <SkillsList />

      {/* project section  */}
      <section className=" my-12">
        <h3 className=" text-3xl font-bold leading-normal py-5">
          Showcase works
        </h3>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-3 ">
          {PROJECT_LIST.map((project) => (
            <div key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                languages={project.languages}
                previewUrl={project.previewUrl}
                sourceCodeUrl={project.sourceCodeUrl}
              />
            </div>
          ))}
        </div>
      </section>

      {/* about me section  */}
      <AboutMe />
    </main>
  );
}
