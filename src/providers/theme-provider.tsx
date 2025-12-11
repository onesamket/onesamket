import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme'
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    const currentTheme = storedTheme || defaultTheme

    setThemeState(currentTheme)
    setMounted(true)

    if (currentTheme === 'dark' || (currentTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setResolvedTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setResolvedTheme('light')
    }

    // Listen for system theme changes when using system theme
    if (currentTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('dark')
          setResolvedTheme('dark')
        } else {
          document.documentElement.classList.remove('dark')
          setResolvedTheme('light')
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [defaultTheme, storageKey])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)

    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setResolvedTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setResolvedTheme('light')
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
