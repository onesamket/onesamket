"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      {theme === "light" && (
        <Button size="icon">
          <Moon
            className="cursor-pointer w-4 h-5"
            onClick={() => setTheme("dark")}
          />
        </Button>
      )}

      {theme === "dark" && (
        <Button size="icon">
          <Sun
            className="cursor-pointer w-4 h-5"
            onClick={() => setTheme("light")}
          />
        </Button>
      )}
    </div>
  );
}
