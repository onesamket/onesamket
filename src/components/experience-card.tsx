import React from 'react';
import { experiences } from '@/constants/experience';
const ExperienceCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full flex flex-col transition-colors duration-300">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">Experience & Education</h3>

      <div className="flex-1 relative">
        {/* Vertical Line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gray-100 dark:bg-white/5" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-4 items-start group">
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 z-10 border-2 transition-colors ${exp.isCurrent ? 'bg-brand-black dark:bg-white border-brand-black dark:border-white' : 'bg-white dark:bg-brand-darkCard border-gray-300 dark:border-gray-600'}`} />

              <div className="flex flex-col">
                <span className={`font-semibold text-base transition-colors ${exp.isCurrent ? 'text-brand-black dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {exp.role}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company}
                </span>
                <span className="text-xs text-brand-textGray mt-0.5">
                  {exp.period} · {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;