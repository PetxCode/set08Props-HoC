import { FC } from "react";
import { iSideNav } from "../../interfaces/interfaces";

export const SideNav: FC<iSideNav> = ({
  onClick,
  present,
  text,
  icon,
  content,
}) => {
  return (
    <div className="w-[220px]">
      <h3>{content ? content : ""}</h3>
      <div
        className="w-full py-3 transition-all duration-300 cursor-pointer hover:bg-purple-100 rounded-lg flex gap-5 hover:text-purple-600 items-center "
        onClick={onClick}
      >
        <div className="ml-4 text-[20px] ">{icon}</div>
        <div>{text}</div>
        <div className="flex-1" />

        <div>{present && present}</div>
      </div>
    </div>
  );
};
