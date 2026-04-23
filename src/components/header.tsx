
import { Download, ArrowDown } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4D807B]/10 rounded-full blur-[100px] -z-10" />

      {/* Main Content */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-8">
        {/* Handwritten greeting */}
        <p className="script-font text-2xl md:text-3xl text-[#4D807B]">
          Hello, I am
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl serif-font leading-[0.95] tracking-tight text-gray-900">
          Tewodros Birhanu
        </h1>

        {/* Title with underline */}
        <div className="relative">
          <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 tracking-wide uppercase">
            Fullstack Web & Mobile Developer
          </p>
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#4D807B]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
          Crafting high-performance web applications and seamless mobile experiences with a focus on clean architecture and artistic precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <a href="/docs/tewodros-resume.pdf" download>
            <button className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-[#4D807B] transition-all duration-300 shadow-lg hover:shadow-xl">
              <Download size={18} />
              Download CV
            </button>
          </a>

          <a href="#contact" className="flex items-center gap-2 text-gray-600 hover:text-[#4D807B] transition-colors px-6 py-4 font-medium text-sm">
            Get in Touch
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>

        {/* Location */}
        <div className="pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Based in Addis Ababa, Ethiopia
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};



export default Header;
