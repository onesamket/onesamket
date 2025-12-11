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

/**
 * Get the badge style for the tool
 * @param name
 * @returns
 */
export const getBadgeStyle = (name: string) => {
  const styles = [
    'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
    'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
    'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  ]
  const index = name.length % styles.length
  return styles[index]
}
