import React from "react";
import {
  HiChatBubbleLeft,
  HiOutlineBookOpen,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { BsChat } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="flex ">
      <ul className="flex flex-col gap-8 ">
        <NavItem
          to="/dashboard"
          label="Dashboard"
          icon={<HiOutlineHome size={20} />}
        />
        <NavItem
          to="/Students"
          label="Students"
          icon={<HiOutlineUsers size={20} />}
        />
        <NavItem
          to="/classes"
          label="Classess"
          icon={<HiOutlineBookOpen size={20} />}
        />
        <div className="pr-2">
          <hr className="border-t-[0.5px] w-50 border-[#716f92] [#716f92]" />
        </div>
        {/* <NavItem to="/messages" label="Messsages" icon={<HiChatBubbleLeft size={20} />} /> */}
        <NavItem
          to="/profile"
          label="Profile"
          icon={<HiOutlineCog6Tooth size={20} />}
        />
      </ul>
    </nav>
  );
}
function NavItem({ to, label, icon }) {
  // Define a color for each route
  const activeIconBgColors = {
    "/dashboard": "#1D4ED8",
    "/Students": "#28a745",
    "/classess": "#007bff",
    "/messages": "#ffc107",
    "/profile": "#716f94",
  };

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-[1rem] py-2 mr-2 rounded-lg ${
            isActive
              ? "pl-2 pr-12 border border-[#716f92] bg-white/10 text-[#fff]"
              : "text-white"
          }`
        }
      >
        {({ isActive }) => {
          // Choose the icon background color
          const bgColor = isActive
            ? activeIconBgColors[to] || "#f57264" // fallback if route missing
            : "#514e9b"; // default inactive color

          return (
            <>
              <div
                className={`p-2 rounded-lg shadow-md flex items-center justify-center`}
                style={{ backgroundColor: bgColor }}
              >
                {React.cloneElement(icon, {
                  color: isActive ? "#fff" : "#d1d5db", // icon color
                })}
              </div>
              <span className="text-[18px] font-sans">{label}</span>
            </>
          );
        }}
      </NavLink>
    </li>
  );
}




export default MainNav;
