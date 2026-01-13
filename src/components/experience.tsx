
import { experiences } from '@/constants/experience';
import React from 'react';

const Experience: React.FC = () => {


  return (
    <section>
      <h2 className="text-4xl serif-font mb-10">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative pl-8 border-l border-gray-300">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400 group-hover:bg-[#4D807B] transition-colors" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{exp.role}</h3>
                <p className="text-[#4D807B] font-medium">{exp.company}</p>
              </div>
              <div className="text-right mt-1 md:mt-0">
                <span className="text-sm font-medium text-gray-500 block">{exp.period}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{exp.location}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 font-light max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
