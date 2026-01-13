
import React from 'react';

const SkillLists: React.FC = () => {
  const coreSkills = [
    "TypeScript & JavaScript Development",
    "Full-stack React & Next.js Applications",
    "Cross-platform Mobile (React Native & Expo)",
    "Backend Engineering (NestJS, Node, Bun)",
    "Database Architecture (SQL, NoSQL, Prisma)",
    "API Design (REST, GraphQL, Socket.io)",
    "DevOps & Deployment (Docker, Git, CI/CD)"
  ];

  const softSkills = [
    "Responsible & Dedicated",
    "Well-organized Workflow",
    "Effective Team Collaboration",
    "Strategic Time Management",
    "Creative Problem Solving",
    "Initiative and Autonomy",
    "Technical Mentorship"
  ];

  return (
    <section className="py-12 border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Core Skills Column */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl serif-font text-gray-900">Core Skills</h2>
          <ul className="space-y-4">
            {coreSkills.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-4 text-gray-700 text-lg md:text-xl font-light">
                <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Column */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl serif-font text-gray-900">Soft Skills</h2>
          <ul className="space-y-4">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-4 text-gray-700 text-lg md:text-xl font-light">
                <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillLists;
