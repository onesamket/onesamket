'use client';

import { skillsList } from '@/constants/skills';
import { Badge } from '@/components/ui/badge';

const BadgeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-within:scale-105">
    <Badge className="w-full min-w-min transition-shadow duration-200 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
      {children}
    </Badge>
  </div>
);

export default function SkillSection() {
  return (
    <main className="mx-auto mt-12 w-full max-w-5xl px-4 py-12 text-center sm:px-6 md:px-10">
      <h2 className="mb-2 text-3xl font-bold sm:text-4xl">Skills & Technologies</h2>
      <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
        Technologies and tools I work with
      </p>
      <div
        className="mx-auto mt-7 grid w-full grid-cols-2 gap-3 sm:w-fit sm:grid-cols-3 md:grid-cols-5"
        role="list"
        aria-label="List of skills and technologies"
      >
        {skillsList.map((skill) => (
          <div key={skill.label} role="listitem">
            <BadgeItem>{skill.label}</BadgeItem>
          </div>
        ))}
      </div>
    </main>
  );
}