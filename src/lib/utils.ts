import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

/**
 * Get the class name for the level of the contribution
 * @param level - The level of the contribution
 * @returns The class name for the level of the contribution
 */
export const getLevelClass = (level: number) => {
  switch (level) {
    case 1:
      return 'bg-brand-orange/30 dark:bg-brand-orange/30'
    case 2:
      return 'bg-brand-orange/50 dark:bg-brand-orange/50'
    case 3:
      return 'bg-brand-orange/80 dark:bg-brand-orange/80'
    case 4:
      return 'bg-brand-orange dark:bg-brand-orange'
    default:
      return 'bg-gray-100 dark:bg-white/5'
  }
}
