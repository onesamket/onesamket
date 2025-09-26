'use client';

import { skillsList } from '@/constants/skills';
import { Badge } from '@/components/ui/badge';

const BadgeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
    <Badge className="w-full min-w-min transition-shadow duration-200 hover:shadow-lg">
      {children}
    </Badge>
  </div>
);

export default function SkillSection() {
  return (
    <main className="mx-auto mt-12 w-full max-w-5xl px-4 py-12 text-center sm:px-6 md:px-10">
      <h3 className="font-inter text-2xl font-bold leading-normal sm:text-3xl">
        Skills & Technologies
      </h3>
      <div className="mx-auto mt-7 grid w-full grid-cols-2 gap-3 sm:w-fit sm:grid-cols-3 md:grid-cols-5">
        {skillsList.map((skill) => (
          <div key={skill.label}>
            <BadgeItem>{skill.label}</BadgeItem>
          </div>
        ))}
      </div>
    </main>
  );
}