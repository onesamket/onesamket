import AboutMe from "@/components/about-me";
import { AvatarComponent } from "@/components/avatar-component";
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
        <h1 className="text-2xl md:text-4xl font-bold">
          Hi, I&apos;m Tewodros Birhanu{" "}
        </h1>
        <WordPullUp
          className=" font-normal md:text-xl tracking-tight md:font-bold text-black dark:text-white"
          words="ET based full-stack developer. I build websites & applications for the peoples"
        />
        <Link
          target="_blank"
          href={
            "https://szfvzxibeztcmqpyuuxd.supabase.co/storage/v1/object/public/Drive/Tewodros-resume-V2.pdf?t=2024-06-03T12%3A20%3A26.031Z"
          }
        >
          <Button className=" h-full">Download Resume</Button>
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
