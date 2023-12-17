import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "./cn";

interface iProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariable> {
  children: ReactNode;
}

const Button: FC<iProps> = ({
  children,
  intent,
  size,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn(buttonVariable({ intent, size }))}>
      {children}
    </button>
  );
};

export default Button;

const buttonVariable = cva("px-4 py-2 rounded-md", {
  variants: {
    intent: {
      primary: "m-1 rounded-md text-black border",
      secondary:
        "m-1 rounded-md text-white bg-blue-500 border hover:bg-blue-600",
      danger: "m-1 rounded-md text-white bg-red-400 border hover:bg-red-600",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[18px]",
      lg: "text-[25px]",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});
