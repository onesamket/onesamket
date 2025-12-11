import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import { projects } from '@/constants/projects'
const ProjectsGrid: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-brand-black dark:text-white px-1">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col justify-between group hover:translate-y-[-2px] hover:shadow-md transition-all duration-300">
            <div>
              <div className={`w-12 h-12 rounded-2xl ${project.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center mb-4`}>
                <project.icon className={`w-6 h-6 ${project.color.replace('bg-', 'text-')}`} />
              </div>

              <h3 className="text-lg font-bold text-brand-black dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-brand-black dark:text-white text-sm font-medium hover:bg-brand-black hover:text-white dark:hover:bg-white dark:hover:text-brand-black transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 hover:text-brand-black dark:hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;