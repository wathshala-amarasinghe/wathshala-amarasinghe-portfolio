// ─────────────────────────────────────────────
//  cn — Class Name Utility
//  Merges clsx + tailwind-merge for safe class
//  composition without style conflicts.
// ─────────────────────────────────────────────

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
