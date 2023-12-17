import { cva } from "class-variance-authority";

export const buttonVariable = cva(
  "m-2 border px-4 py-2 rounded-md transition-all duration-300",
  {
    variants: {
      intents: {
        primary: "text-black ",
        secondary: "text-white bg-blue-500 hover:bg-blue-600  ",
        danger: "text-white bg-red-500 hover:bg-red-600  ",
      },
      size: {
        sm: "text-[12px]",
        md: "text-[18px]",
        lg: "text-[25px]",
      },
    },
    defaultVariants: {
      intents: "primary",
      size: "md",
    },
  }
);
