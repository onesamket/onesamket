import React from 'react';
import { Heart, Coffee, Camera } from 'lucide-react';

const AboutCard: React.FC = () => {
   return (
      <div className="bg-brand-orange text-white rounded-[32px] p-6 shadow-sm border border-brand-orange dark:border-white/10 h-full flex flex-col justify-between relative overflow-hidden group transition-colors duration-300">
         <div className="relative z-10">
            <h3 className="text-sm font-medium text-white/80 mb-2">About me</h3>
            <p className="text-xl font-bold leading-tight">
               Pixel perfectionist with a love for details.
            </p>
         </div>

         <div className="relative z-10 mt-6 flex gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
               <Heart className="w-5 h-5 text-white fill-white/50" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
               <Camera className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
               <Coffee className="w-5 h-5 text-white" />
            </div>
         </div>

         {/* Decorative Circles */}
         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
         <div className="absolute top-10 -right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      </div>
   );
};

export default AboutCard;