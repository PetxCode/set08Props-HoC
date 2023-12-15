import { FC } from "react";
import { iIcon } from "../../interfaces/interfaces";

export const Icon: FC<iIcon> = ({ icon, bg, bg2, onClick }) => {
  return (
    <div
      className={`text-[25px] cursor-pointer 
            ${
              bg
                ? "text-[#414141] text-[20px] hover:text-[#414141] hover:bg-[#414141] hover:bg-transparent "
                : "bg-purple-200"
            } 
            ${
              bg2
                ? "text-blue-500 bg-transparent mr-0 text-[20px] hover:text-white hover:bg-transparent "
                : "text-black"
            } 
            
            p-1 rounded-lg  hover:text-white hover:bg-purple-700 duration-300 transition-all mr-2`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};
