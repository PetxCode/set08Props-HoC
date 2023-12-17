import { FC } from "react";
import { cn2 } from "./cn2";
import { iProps } from "../../interfaces/interfaces";
import { buttonVariable } from "../../interfaces/authority";
import { cva } from "class-variance-authority";

const GlobalButton: FC<iProps> = ({
  children,
  intents,
  size,
  className,
  ...props
}) => {
  return (
    <button {...props} className={cn2(buttonVariable({ intents, size }))}>
      {children}
    </button>
  );
};

export default GlobalButton;
