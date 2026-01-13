
import { Download } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 overflow-hidden">

      {/* Main Content Area */}
      <div className="max-w-4xl px-6 lg:ml-24 flex flex-col items-start text-left space-y-12 relative">
        {/* Handwritten Accent */}
        <div className="absolute -top-12 -left-4 md:-left-12 opacity-80">
          <p className="script-font text-3xl md:text-4xl text-[#4D807B] -rotate-12">
            Hello, I am
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl serif-font leading-[0.9] tracking-tighter text-gray-900">
            Tewodros <br /> Birhanu
          </h1>

          <div className="relative inline-block">
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 tracking-wide uppercase italic">
              Fullstack  Web <br className="md:hidden" />
              <span className="relative">
                & Mobile Application Developer
                {/* Hand-drawn underline effect */}
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#4D807B]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-xl space-y-10">
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Crafting high-performance web applications and seamless mobile experiences with a focus on clean architecture and artistic precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="/docs/tewodros-resume.pdf" download>
              <button className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#4D807B] transition-all shadow-xl hover:shadow-[#4D807B]/20 transform hover:-translate-y-1">
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </button>
            </a>

            <div className="flex flex-col items-start">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Based in</p>
              <p className="text-sm font-medium italic border-b border-gray-300">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Extra Handwritten Note */}
        <div className="pt-12 hidden md:block">
          <p className="script-font text-2xl text-gray-400 rotate-3">
            Available for remote collaboration worldwide...
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4D807B]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};



export default Header;
