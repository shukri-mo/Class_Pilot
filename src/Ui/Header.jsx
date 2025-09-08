import React, { use, useEffect } from "react";
import Logo from "./Logo";
import { MdWavingHand } from "react-icons/md";
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { HiOutlineChatBubbleBottomCenter, HiOutlineChatBubbleLeft, HiOutlineChatBubbleLeftEllipsis, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../Features/Authentication/AuthSlice";

function Header() {
const { user } = useSelector((state) => state.auth);
console.log("User ID:" ,user.name);  // ✅ Safe access

  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-900 to-indigo-600 bg-clip-text text-transparent">
          welcome {user.name}!
        </h1>
        <MdWavingHand className="text-purple-600 text-2xl transform -scale-x-100" />
      </div>

      <div className="flex align-baseline gap-5 mr-2 ">
        <div className="search w-[400px]">
          <div className=" flex items-center  border border-gray-300 rounded-md shadow-sm px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <HiOutlineSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search from subjects assignments"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

       <div className="relative pt-2">
  <HiOutlineBell size={28} className="text-gray-700" />
  <span className="absolute top-0 right-0 translate-x-4 -translate-y-1 bg-red-400 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
    3
  </span>
</div>

        <div className="pt-2">
          <HiOutlineChatBubbleLeft size={28}/>
        </div>
      </div>
    </>
  );
}

export default Header;
