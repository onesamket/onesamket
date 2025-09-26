'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-300 dark:border-slate-800">
        {theme === 'light' ? (
          <Moon
            className="h-4 w-4 cursor-pointer"
            onClick={() => setTheme('dark')}
          />
        ) : (
          <Sun
            className="h-4 w-4 cursor-pointer"
            onClick={() => setTheme('light')}
          />
        )}
      </div>
    </div>
  );
}
