import { ExternalLink, Play } from 'lucide-react';
import React from 'react';

const MusicCard: React.FC = () => {
  return (
    <a
      href="https://open.spotify.com/artist/2CMA5fXRHJUfaokzsmGucv?si=XU5ZDnP_TTOIj747EkiiYQ"
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full relative overflow-hidden group transition-colors duration-300 cursor-pointer hover:shadow-md">
        <div className="flex justify-between items-start mb-4 z-10 relative">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">On Repeat</h3>
          <ExternalLink className="w-4 h-4 text-brand-orange/50 group-hover:text-brand-orange transition-colors" />
        </div>

        <div className="flex justify-center items-center mt-4 relative z-10">
          <div className="relative w-36 h-36">
            <div className="absolute top-4 -left-10 w-24 h-24 rounded-lg overflow-hidden shadow-md transform -rotate-12 opacity-60 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-rotate-15">
              <img
                src="/images/aster.jpeg"
                alt="Aster Aweke"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-4 -right-10 w-24 h-24 rounded-lg overflow-hidden shadow-md transform rotate-12 opacity-60 transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-15">
              <img
                src="/images/teddy-tadese.jpeg"
                alt="Tewodros Tadesse"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-brand-darkCard mx-auto z-20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src="/images/teddy.jpeg"
                alt="Teddy Afro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="bg-white/90 dark:bg-black/80 p-3 rounded-full backdrop-blur-sm">
                  <Play className="w-5 h-5 text-brand-black dark:text-white fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center z-10 relative">
          <h4 className="font-bold text-brand-black dark:text-white text-lg transition-colors truncate">Theodros Kassahun</h4>
          <p className="text-xs text-brand-textGray mt-1">Teddy Afro • Popular on Spotify</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-brand-darkCard via-white/80 dark:via-brand-darkCard/80 to-transparent z-0 pointer-events-none transition-colors duration-300"></div>
      </div>
    </a>
  );
};

export default MusicCard;