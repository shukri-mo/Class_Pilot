import React from "react";
import MainNav from "./MainNav";
import Logo from "./Logo";
import {  HiOutlineUser } from "react-icons/hi2";
import { useSelector  } from "react-redux";

function Sidebar() {

  // const { user } = useSelector((state) => state.auth)

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-6 p-4">
        <Logo />
        <MainNav />
      </div>
      {/* User section  at the bottom */}
    <hr className="border-t-[0.5px] w-full border-[#716f92]" />

      <div className="flex items-center gap-3 p-4 mb-2">
        <div className=" w-10 h-9 rounded-tr-lg rounded-br-lg rounded-bl-md rounded-tl-md bg-gradient-to-r from-[#f57264] to-[#d9856d]  flex items-center justify-center shadow-md">
          <HiOutlineUser className="text-white" size={20} />
        </div>

        <div>
          <h1 className="text-white  font-bold">Welcome Back! </h1>
          <span>
            <h3>Sarah Johnson</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
