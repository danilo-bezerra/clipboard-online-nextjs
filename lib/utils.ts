import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNum(digits: number = 6) {
  const code = Math.floor(Math.random() * 1000000);
  const formattedCode = code.toString().padStart(digits, "0");

  return formattedCode;
}
