import { VariantProps, cva } from "class-variance-authority";
import clsx, { ClassValue } from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof diff> {
  children: ReactNode;
}

const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

const ButtonBuild: FC<iProps> = ({
  children,
  start,
  size,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn(diff({ start, size }))}>
      {children}
    </button>
  );
};

export default ButtonBuild;

const diff = cva(
  "m-2 py-2 px-4 rounded-md hover:scale-[1.05] transition-all duration-300 ",
  {
    variants: {
      start: {
        pry: "border",
        sec: "bg-red-500 hover:bg-red-600",
        other: "bg-black hover:bg-neutral-700",
      },
      size: {
        sm: "text-[12px]",
        md: "text-[18px]",
        lg: "text-[25px]",
      },
    },
    defaultVariants: {
      start: "pry",
      size: "sm",
    },
  }
);
