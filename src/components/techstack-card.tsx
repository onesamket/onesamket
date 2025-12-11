import { tools } from '@/constants/tools';
import React from 'react';
import { getBadgeStyle } from '@/lib/utils';



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