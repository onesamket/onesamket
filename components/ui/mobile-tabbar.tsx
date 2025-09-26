'use client';

import { cn } from '@/libs/utils';
import { motion } from 'framer-motion';
import { Briefcase, Code, Home, User } from 'lucide-react';
import * as React from 'react';

type TabItem = {
  name: string;
  icon: React.ReactNode;
  targetId: string;
};

const tabs: TabItem[] = [
  {
    name: 'Home',
    icon: <Home className="h-5 w-5" />,
    targetId: 'home-section',
  },
  {
    name: 'Skills',
    icon: <Code className="h-5 w-5" />,
    targetId: 'skills-section',
  },
  {
    name: 'Experience',
    icon: <Briefcase className="h-5 w-5" />,
    targetId: 'experience-section',
  },
  {
    name: 'About',
    icon: <User className="h-5 w-5" />,
    targetId: 'about-section',
  },
];

export function MobileTabbar() {
  const [activeTab, setActiveTab] = React.useState('Home');

  // Track scroll position to update active tab
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => {
        const element = document.getElementById(tab.targetId);
        if (!element) return { id: tab.name, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id: tab.name,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      // Find the section that's currently most visible in the viewport
      const viewportHeight = window.innerHeight;
      const activeSection = sections.reduce((prev, current) => {
        // If section is in viewport
        if (current.top < viewportHeight / 2 && current.bottom > 0) {
          // If previous section is not in viewport or current is closer to center
          if (prev.top < 0 || prev.top > current.top) {
            return current;
          }
        }
        return prev;
      }, sections[0]);

      setActiveTab(activeSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: TabItem) => {
    setActiveTab(tab.name);
    // Smooth scroll to section
    const element = document.getElementById(tab.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Safe area padding for devices with home indicator */}
      <div className="pb-safe">
        {/* Main tabbar container with rounded top corners */}
        <div className="mx-4 mb-4 rounded-2xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-around px-2 py-2">
            {tabs.map(tab => (
              <TabButton
                key={tab.name}
                tab={tab}
                isActive={activeTab === tab.name}
                onClick={() => handleTabClick(tab)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: TabItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex h-12 w-12 flex-col items-center justify-center rounded-xl transition-all duration-300 ease-out',
        'active:scale-95 active:bg-primary/5',
        isActive
          ? 'text-primary'
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {/* Active background with smooth animation */}
      {isActive && (
        <motion.div
          layoutId="tab-background"
          className="absolute inset-0 rounded-xl bg-primary/10"
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            mass: 0.8
          }}
        />
      )}

      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{
            scale: isActive ? 1.1 : 1,
            rotate: isActive ? [0, -5, 5, 0] : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            duration: 0.3
          }}
        >
          {tab.icon}
        </motion.div>
      </div>



      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          layoutId="tab-dot"
          className="absolute -bottom-1 h-1 w-1 rounded-full bg-primary"
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            mass: 0.5
          }}
        />
      )}
    </button>
  );
}
