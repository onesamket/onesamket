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
      <div className="flex items-center justify-around border-t border-border bg-background/80 px-2 py-1 backdrop-blur-lg">
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
        'relative flex h-14 w-16 flex-col items-center justify-center rounded-lg transition-colors',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      <div className="relative">
        {isActive && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute -inset-1 rounded-full bg-primary/10"
            transition={{ type: 'spring', duration: 0.5 }}
          />
        )}
        <div className="relative z-10">{tab.icon}</div>
      </div>
      <span className="mt-1 text-xs font-medium">{tab.name}</span>
      {isActive && (
        <motion.div
          layoutId="tab-dot"
          className="absolute bottom-1 h-1 w-1 rounded-full bg-primary"
          transition={{ type: 'spring', duration: 0.5 }}
        />
      )}
    </button>
  );
}
