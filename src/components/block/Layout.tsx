import Header from "../static/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../static/SideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="hidden md:flex">
          <SideBar />
        </div>
        <div className="flex justify-end w-[100%]">
          <div className="w-full transition-all duration-300 md:w-[calc(100%-220px)] flex bg-purple-50 m-2 p-2 rounded-md  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
