
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { primaryProjects, technicalProjects } from '@/constants/projects';

const Projects: React.FC = () => {
  const allProjects = [...primaryProjects, ...technicalProjects];

  return (
    <section className="py-12 border-t border-gray-300">
      <div className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl serif-font text-gray-900">Projects</h2>
          <span className="text-sm text-gray-400 font-light">{allProjects.length} total</span>
        </div>

        <ul className="divide-y divide-gray-200">
          {allProjects.map((proj, idx) => (
            <ProjectRow key={idx} {...proj} index={idx + 1} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const ProjectRow: React.FC<{ title: string; description: string; link: string; index: number }> = ({ title, description, link, index }) => (
  <li className="group py-5 flex items-start gap-4 md:gap-6 hover:bg-gray-50/50 transition-colors -mx-4 px-4 rounded-lg">
    <span className="text-xs font-mono text-gray-300 w-6 flex-shrink-0 pt-1">
      {String(index).padStart(2, '0')}
    </span>
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-gray-400 hover:text-[#4D807B] transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>
      <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mt-1 max-w-2xl">
        {description}
      </p>
    </div>
  </li>
);

export default Projects;
