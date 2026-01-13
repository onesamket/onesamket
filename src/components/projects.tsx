
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { primaryProjects, technicalProjects } from '@/constants/projects';

const Projects: React.FC = () => {
  return (
    <section className="py-12 border-t border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Column 1: Featured Projects */}
        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl serif-font text-gray-900">Selected Projects</h2>
          <ul className="space-y-10">
            {primaryProjects.map((proj, idx) => (
              <ProjectItem key={idx} {...proj} />
            ))}
          </ul>
        </div>

        {/* Column 2: Libraries & Open Source */}
        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl serif-font text-gray-900">Libraries & Labs</h2>
          <ul className="space-y-10">
            {technicalProjects.map((proj, idx) => (
              <ProjectItem key={idx} {...proj} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => (
  <li className="group flex items-start gap-4">
    <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-3" aria-hidden="true" />
    <div className="space-y-2">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-md">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#4D807B] hover:text-black transition-colors pt-2 border-b border-transparent hover:border-black"
      >
        Visit Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  </li>
);

export default Projects;
