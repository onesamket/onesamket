import React from 'react';

const tools = [
  "Javascript", "Typescript", "Tailwindcss", "Shadcn", "Nativewind", "React",
  "Framer Motion", "Next.js", "React router", "Tanstack router", "Tanstack Query",
  "React Native", "Zustand", "Expo", "Express", "Encore.ts", "NestJS", "Bun",
  "Socket.io", "VideoSDK", "PeerJs", "Prisma", "MySQL", "MongoDB", "GraphQL",
  "Rest API", "Supabase", "Docker", "Git & Github"
];

// Helper to assign a visual style based on the tool name length/char code to keep it deterministic but varied
const getBadgeStyle = (name: string) => {
  const styles = [
    'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
    'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
    'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  ];
  const index = name.length % styles.length;
  return styles[index];
};

const TechStackCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full flex flex-col group hover:shadow-md transition-all duration-300">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">Skills & Technologies</h3>

      <div className="flex flex-wrap gap-2 content-start">
        {tools.map((tool, index) => (
          <span
            key={index}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm transition-colors ${getBadgeStyle(tool)}`}
          >
            {tool}
          </span>
        ))}
        <span className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 hover:text-brand-black dark:hover:text-white transition-colors cursor-default">
          More ++
        </span>
      </div>
    </div>
  );
};

export default TechStackCard;