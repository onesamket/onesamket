import React, { useState } from 'react';
import { MoveRight, MoveLeft, Search, Database, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Strategy",
    description: "Understanding requirements and planning the technical roadmap.",
    icon: Search
  },
  {
    title: "System Design",
    description: "Architecting scalable databases and efficient API structures.",
    icon: Database
  },
  {
    title: "Development",
    description: "Writing clean, maintainable code with modern tech stacks.",
    icon: Code2
  },
  {
    title: "Deployment",
    description: "CI/CD pipelines and production optimization.",
    icon: Rocket
  }
];

const HowIWorkCard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full flex flex-col justify-between group cursor-default hover:shadow-md transition-all duration-300 relative overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">My Workflow</h3>
        <div className="flex gap-1">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-6 bg-brand-orange' : 'w-1.5 bg-gray-200 dark:bg-white/10'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-2 z-10 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange">
            <CurrentIcon className="w-5 h-5" />
          </div>
          <p className="text-lg font-bold text-brand-black dark:text-white leading-tight transition-colors">
            {steps[currentStep].title}
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed h-8 line-clamp-2">
          {steps[currentStep].description}
        </p>
      </div>

      {/* Controls */}
      <div className="mt-2 flex justify-between items-center z-10">
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Previous step"
          >
            <MoveLeft className="w-4 h-4 text-brand-black dark:text-white" />
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            onClick={nextStep}
            className="w-8 h-8 rounded-full bg-brand-black dark:bg-white border border-transparent flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Next step"
          >
            <MoveRight className="w-4 h-4 text-white dark:text-brand-black" />
          </button>
        )}
      </div>

      {/* Decorative Background */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default HowIWorkCard;