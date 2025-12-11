import React from 'react';
import { Monitor, Smartphone, Globe, MessageSquare, Server } from 'lucide-react';

const services = [
  { icon: Globe, label: "Web Design" },
  { icon: Smartphone, label: "App Design" },
  { icon: Monitor, label: "Desktop Design" },
  { icon: Server, label: "System Design" },
  { icon: MessageSquare, label: "Consultancy" },
];

const ServicesCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full flex flex-col group hover:shadow-md transition-all duration-300 relative overflow-hidden">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 relative z-10">Services</h3>
      
      <div className="flex flex-wrap gap-3 relative z-10">
        {services.map((service, index) => (
          <div key={index} className="flex-grow flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 dark:bg-white/5 group-hover:bg-brand-gray dark:group-hover:bg-white/10 transition-colors gap-2 text-center min-w-[100px] basis-[calc(33%-0.75rem)]">
            <service.icon className="w-5 h-5 text-brand-black dark:text-white" strokeWidth={1.5} />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">{service.label}</span>
          </div>
        ))}
      </div>

       {/* Subtle background decoration */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-10 -mt-10 transition-colors"></div>
    </div>
  );
};

export default ServicesCard;