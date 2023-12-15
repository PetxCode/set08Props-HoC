import { FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { PiGraphLight } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Icon } from "./HeaderIcon";
import { useState } from "react";

const Header = () => {
  const [state, setState] = useState<boolean>(false);
  const [numb, setNumb] = useState<number>(0);

  const onStateChange = () => {
    setState(!state);

    console.log(state);
  };

  const onNumbChange = () => {
    setNumb(Math.floor(Math.random() * 10000));
    console.log(numb);
  };

  return (
    <div className="h-[70px] w-full border-b flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-between">
        <div className="flex items-center ">
          <div className="flex w-[200px] items-center justify-between mr-2">
            <div className="text-[30px]">Logo</div>
            <Icon icon={<IoMenuSharp />} onClick={onStateChange} />
          </div>
          <div>
            <div className="flex items-center border h-[45px] pl-2 rounded-md w-[500px] ">
              <Icon icon={<FaSearch />} bg="d" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-[90%] outline-none"
              />
              <Icon icon={<PiGraphLight />} />
            </div>
          </div>
        </div>

        <div className="flex items-center ">
          <div>
            <Icon icon={<IoIosNotificationsOutline />} onClick={onNumbChange} />
          </div>
          <div
            className="flex items-center justify-between w-[80px] p-1 rounded-full min-h-[40px] duration-300 transition-all
             hover:bg-blue-500 bg-[lightgray] "
          >
            <img className="w-10 h-10 rounded-full border bg-green-500" />
            <Icon icon={<CiSettings />} bg2="l" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
