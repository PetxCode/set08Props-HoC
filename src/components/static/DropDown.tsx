import { FC } from "react";
import { iNav } from "../../interfaces/interfaces";

export const Nav: FC<iNav> = ({ text }) => {
  return (
    <div className="flex ml-8 items-center gap-4">
      <div className="w-[2px] h-[35px] border-r-2" />
      <div className="w-1 h-1 rounded-full bg-black" />
      <div>{text}</div>
    </div>
  );
};
