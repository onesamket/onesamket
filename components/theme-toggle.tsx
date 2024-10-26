"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div className=" w-[20px] h-[20px] flex items-center justify-center  border border-slate-300 dark:border-slate-800 rounded-full">
        {theme === "light" ? (
          <Moon
            className="cursor-pointer w-4 h-4"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Sun
            className="cursor-pointer w-4 h-4"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
}
