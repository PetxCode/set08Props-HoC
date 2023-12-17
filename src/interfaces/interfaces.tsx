import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonVariable } from "./authority";

export interface iIcon {
  icon: React.ReactNode;
  bg?: string;
  bg2?: string;
  onClick?: () => void;
}

export interface iSideNav {
  text: string;
  icon: React.ReactNode;
  content?: string;
  present?: React.ReactNode;
  onClick?: () => void;
}

export interface iNav {
  text: string;
}

export interface iProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariable> {
  children: ReactNode;
}
