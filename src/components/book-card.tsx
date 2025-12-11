import React from 'react';

const BookCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-darkCard rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-white/5 h-full relative overflow-hidden transition-colors duration-300 group">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Reading List</h3>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className="mb-4">
          <h4 className="font-bold text-brand-black dark:text-white text-lg leading-tight transition-colors mb-1">
            The Pragmatic Programmer
          </h4>
          <p className="text-xs text-brand-textGray">Andrew Hunt & David Thomas</p>
        </div>

        <div className="flex-1 flex justify-center items-end relative perspective-1000 min-h-[200px]">
          {/* React Book - Back */}
          <div className="absolute bottom-0 translate-x-12 -translate-y-6 rotate-[8deg] w-20 h-28 rounded-sm shadow-lg border-l-2 border-gray-400 dark:border-gray-600 overflow-hidden transition-all duration-500 group-hover:translate-x-14 group-hover:-translate-y-8 group-hover:rotate-[10deg] bg-gray-800 opacity-70">
            <img
              src="/images/react.png"
              alt="React"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TypeScript Book - Middle Back */}
          <div className="absolute bottom-0 translate-x-6 -translate-y-3 rotate-[4deg] w-22 h-32 rounded-sm shadow-xl border-l-2 border-gray-400 dark:border-gray-600 overflow-hidden transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-5 group-hover:rotate-[6deg] bg-gray-800 opacity-85">
            <img
              src="/images/typescript.jpeg"
              alt="TypeScript in 50 Lessons"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Node.js Book - Middle Front */}
          <div className="absolute bottom-0 translate-x-0 -translate-y-1 rotate-[2deg] w-24 h-36 rounded-sm shadow-xl border-l-2 border-gray-400 dark:border-gray-600 overflow-hidden transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-3 group-hover:rotate-[3deg] bg-gray-900 z-10">
            <img
              src="/images/nodejs.jpeg"
              alt="Node.js"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pragmatic Programmer - Front (Main) */}
          <div className="relative w-28 h-40 shadow-2xl rounded-r-md rounded-l-sm overflow-hidden border-l-4 border-l-gray-300 dark:border-l-gray-600 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-3xl z-20 bg-black">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-gray-200 dark:from-gray-600 to-transparent z-20"></div>
            <img
              src="/images/pragmatic-programmer.jpeg"
              alt="The Pragmatic Programmer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
    </div>
  );
};

export default BookCard;