import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn2 = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};
