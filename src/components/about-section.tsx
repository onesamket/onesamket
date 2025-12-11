import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/5 flex flex-col md:flex-row gap-12 items-start transition-colors duration-300">
      {/* Left Column: Image & Stats */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://github.com/onesamket.png" 
               alt="Tewodros Birhanu Portrait" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-3 rounded-xl border border-white/20 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex items-center gap-2 text-brand-black dark:text-white font-semibold text-sm">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    <span>Fullstack Developer</span>
                </div>
             </div>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">
         <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-brand-gray dark:bg-white/5 text-brand-textGray dark:text-gray-400 text-xs font-medium uppercase tracking-wider transition-colors">
            About Me
         </div>
         
         <h2 className="text-3xl md:text-4xl font-bold text-brand-black dark:text-white leading-tight transition-colors">
            I craft scalable digital solutions that blend <span className="text-brand-orange">performance</span> with <span className="italic font-serif font-light text-gray-400 dark:text-gray-500">elegance</span>.
         </h2>

         <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors">
            <p>
               Hi, I'm Tewodros. With 4 years of experience in software development, I've had the privilege of building robust applications for innovative companies. My journey began with a curiosity for how things work, which quickly evolved into a passion for clean code and seamless user experiences.
            </p>
            <p>
               Currently, I work as a Fullstack Developer, focusing on creating performant interfaces and scalable backends. I specialize in the modern web stack and enjoy tackling complex system design challenges.
            </p>
            <p>
               I believe that great software is invisible—it solves problems before the user even realizes they exist. My approach is deeply rooted in engineering best practices, data-driven insights, and an obsessive attention to detail.
            </p>
         </div>

         <div className="pt-6 border-t border-gray-100 dark:border-white/10 mt-2 grid grid-cols-2 gap-6 transition-colors">
             <div>
                <h4 className="text-2xl font-bold text-brand-black dark:text-white transition-colors">4+</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Years Exp.</p>
             </div>
             <div>
                <h4 className="text-2xl font-bold text-brand-black dark:text-white transition-colors">15+</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Projects</p>
             </div>
         </div>
      </div>
    </div>
  );
};

export default AboutSection;