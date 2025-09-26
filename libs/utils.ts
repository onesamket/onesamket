import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// tailwind helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
