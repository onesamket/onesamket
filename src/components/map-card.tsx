import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const MapCard: React.FC = () => {
  return (
    <a
      href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <div className="bg-white dark:bg-brand-darkCard rounded-[32px] shadow-sm border border-gray-100 dark:border-white/5 h-full relative overflow-hidden group min-h-[160px] transition-colors duration-300 cursor-pointer">
        <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/38.763611,9.005401,12,0/400x400?access_token=Pk')] bg-cover bg-center grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-50 dark:group-hover:opacity-30">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M0 100 Q 150 50 300 120 T 600 80" stroke="#d1d5db" strokeWidth="2" fill="none" />
            <path d="M50 0 Q 80 150 40 300" stroke="#d1d5db" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-white/50 dark:border-white/10 z-10 transition-colors group-hover:bg-brand-black dark:group-hover:bg-white group-hover:border-transparent">
          <span className="text-xs font-semibold text-brand-black dark:text-white flex items-center gap-1 transition-colors group-hover:text-white dark:group-hover:text-brand-black">
            <MapPin className="w-3 h-3 text-brand-orange fill-brand-orange" />
            Addis Ababa, ET
          </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2 rounded-full shadow-sm border border-white/50 dark:border-white/10 z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ExternalLink className="w-4 h-4 text-brand-black dark:text-white" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20 pointer-events-none"></div>
      </div>
    </a>
  );
};

export default MapCard;