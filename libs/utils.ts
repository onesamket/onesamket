import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind helper
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
