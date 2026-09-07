import React from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/providers/theme-provider'
import type { Theme } from '@/providers/theme-provider'

const OPTIONS: Array<{ value: Theme; label: string; Icon: typeof Sun }> = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
]

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          className={theme === value ? 'is-active' : undefined}
          aria-pressed={theme === value}
          aria-label={label}
          title={label}
          onClick={() => setTheme(value)}
        >
          <Icon size={14} strokeWidth={2} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
