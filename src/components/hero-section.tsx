import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black dark:text-white leading-[1.1] transition-colors duration-300">
          <span className="block mb-2 md:mb-4">
            Hi, I’m
            <span className="inline-block align-middle mx-2 md:mx-4 w-12 h-12 md:w-16 md:h-16 relative -mt-2">
              <img
                src="/images/avatar.jpg"
                alt="Tewodros Birhanu"
                className="w-full h-full rounded-2xl object-cover border-4 border-white dark:border-brand-darkCard shadow-lg rotate-3 transition-colors duration-300"
              />
            </span>
            Tewodros Birhanu!
          </span>
          <span className="block text-gray-300 dark:text-gray-600">
            Experienced
          </span>
          <span className="block text-brand-orange">
            Fullstack Developer.
          </span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Open to work badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-sm transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Open to work</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="bg-brand-black dark:bg-white text-white dark:text-brand-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
            Book a call
          </button>

          <p className="text-gray-500 dark:text-gray-400 max-w-xs text-sm leading-relaxed transition-colors">
            Feel free to explore my portfolio and reach out —I'd love to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;