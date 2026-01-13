
import React from 'react';



const SoftwareSkills: React.FC = () => {
  const coreTech = [
    { name: 'TypeScript / Javascript', level: 9.5 },
    { name: 'Node.js, Express, NestJS', level: 9 },
    { name: 'Electron', level: 8.5 },
    { name: 'React / Next.js', level: 9 },
    { name: 'React Native', level: 8.5 },
    { name: 'Tailwind CSS', level: 9 },
  ];

  return (
    <section>
      <h2 className="text-4xl serif-font mb-8">Core Expertise</h2>
      <div className="space-y-6">
        {coreTech.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-xs uppercase tracking-widest font-bold text-gray-500">
              <span>{skill.name}</span>
            </div>
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4D807B] rounded-full transition-all duration-1000"
                style={{ width: `${skill.level * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareSkills;
