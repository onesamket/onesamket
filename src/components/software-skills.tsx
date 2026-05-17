import React from 'react';

const SoftwareSkills: React.FC = () => {
  const coreTech = [
    { name: 'TypeScript / JavaScript', level: 9.5 },
    { name: 'Node.js, Express, NestJS', level: 9 },
    { name: 'Electron', level: 8.5 },
    { name: 'React / Next.js', level: 9 },
    { name: 'React Native', level: 8.5 },
    { name: 'Tailwind CSS', level: 9 },
  ];

  return (
    <section>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0759bd]">Focus</p>
      <h2 className="mt-2 mb-8 text-4xl font-black leading-none text-[#0759bd]">Core Expertise</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {coreTech.map((skill, idx) => (
          <article key={idx} className="rounded-md border border-[#0759bd]/30 bg-[#f8f5ef] px-4 py-3">
            <p className="text-sm font-extrabold text-[#073f8f]">{skill.name}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#527db4]">
              Level {skill.level}/10
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SoftwareSkills;
