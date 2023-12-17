import { VariantProps, cva } from "class-variance-authority";
import clsx, { ClassValue } from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof differentButton> {
  children: ReactNode;
}

const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

const MyButton: FC<iProps> = ({
  children,
  className,
  myTypes,
  size,
  ...props
}) => {
  return (
    <button {...props} className={cn(differentButton({ myTypes, size }))}>
      {children}
    </button>
  );
};

export default MyButton;

const differentButton = cva("m-2 border rounded-md py-2 px-6", {
  variants: {
    myTypes: {
      pry: "text-black",
      sec: " text-white bg-red-500 hover:bg-red-700",
      others: "text-white bg-black hover:bg-neutral-700",
    },
    size: {
      sm: "text-[12px]",
      md: "text-[18px]",
      lg: "text-[26px]",
    },
  },
  defaultVariants: {
    myTypes: "pry",
    size: "md",
  },
});
