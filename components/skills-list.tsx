import { SkillShare } from "./skill-share";
import { Badge } from "./ui/badge";

const skills = [
  "Typescript",
  "React",
  "Tailwindcss",
  "React Native",
  "Remix.run",
  "React query",
  "Expo",
  "Express.js",
  "Hapi.js",
  "Hono.js",
  "Fresh",
  "Bun",
  "Prisma",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Rest API",
  "Supabase",
  "Git & Github",
  "More ++",
];

const BadgeItem = ({ children }: { children: React.ReactNode }) => (
  <Badge className="min-w-max transition-transform duration-300 ease-in-out transform hover:scale-105">
    {children}
  </Badge>
);

export default function SkillsList() {
  return (
    <main className="mx-auto text-center p-10 w-full ">
      <h3 className="font-inter text-3xl font-bold leading-normal">
        Tech stacks{" "}
      </h3>
      <div className="w-fit  mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-7">
        {skills.map((skill) => (
          <BadgeItem key={skill}>{skill}</BadgeItem>
        ))}
      </div>
      {/* <div className="w-full"> */}
      <SkillShare />
      {/* </div> */}
    </main>
  );
}
