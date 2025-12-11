import React, { useState, useEffect, useRef } from 'react';
import { Menu, Moon, Sun, X, Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';

const Header: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between py-8 relative z-50">
      <div className="flex items-center gap-3">
        {/* Logo / Profile Image */}
        <div className="w-10 h-10 relative">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full rounded-full border border-gray-200 dark:border-white/10 object-cover"
          />
        </div>
        <div>

          <a href="mailto:hey@onesamket.com" className="text-sm font-medium text-brand-black dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors hidden sm:block">
            onesamket@gmail.com
          </a>
          <p className=' text-xs'>
            +251 918 039 771
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 relative" ref={menuRef}>
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="p-2 rounded-full bg-white dark:bg-brand-darkCard shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-colors border border-gray-100 dark:border-white/10 group"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 group-hover:text-brand-black transition-colors" />
          )}
        </button>

        <button
          onClick={toggleMenu}
          className={`p-2 rounded-full shadow-sm border transition-all duration-200 z-50 relative ${isMenuOpen
            ? 'bg-brand-black text-white border-brand-black dark:bg-white dark:text-brand-black dark:border-white'
            : 'bg-white dark:bg-brand-darkCard text-brand-black dark:text-white border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10'
            }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full right-0 mt-3 w-56 p-2 rounded-2xl bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-xl border border-gray-100 dark:border-white/10 shadow-2xl transform transition-all duration-200 origin-top-right ${isMenuOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
            }`}
        >
          <nav className="flex flex-col gap-1">
            {[
              { name: 'Home', href: '#' },
              { name: 'Experience', href: '#experience' },
              { name: 'How I Work', href: '#work' },
              { name: 'Services', href: '#services' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-brand-black dark:hover:text-white transition-all flex items-center justify-between group"
              >
                {link.name}
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
          </nav>

          <div className="h-px bg-gray-100 dark:bg-white/5 my-2 mx-2"></div>

          <div className="flex justify-between px-2 pb-1">
            <a href="https://github.com/onesamket" className="p-2 rounded-lg text-gray-400 hover:text-brand-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://x.com/onesamket" className="p-2 rounded-lg text-gray-400 hover:text-[#1DA1F2] hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/ln-onesamket/" className="p-2 rounded-lg text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;