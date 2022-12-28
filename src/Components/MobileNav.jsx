import React, { useState } from "react";

import { WiMoonWaningCrescent2 } from "react-icons/wi";
import { HiMenu } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

import logo from "../../assets/images/Fintech/Logo.svg";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="py-5">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-14 h-14 object-contain" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-blue-500 hover:bg-blue-400 rounded-full p-2">
            <WiMoonWaningCrescent2 className="text-white text-2xl" />
          </div>
          <div>
            <HiMenu onClick={handleOpen} className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-slate-100 z-10 off">
          <ul>
            <li className="flex items-center hover:text-slate-300 justify-center py-5 text-lg uppercase font-semibold cursor-pointer">
              Features
              <HiChevronDown />
            </li>
            <li className="flex items-center hover:text-slate-300 justify-center py-5 text-lg uppercase font-semibold cursor-pointer">
              Company
              <HiChevronDown />
            </li>
            <li className="flex items-center hover:text-slate-300 justify-center py-5 text-lg uppercase font-semibold cursor-pointer">
              Help
              <HiChevronDown />
            </li>
            <li className="flex items-center hover:text-slate-300 justify-center py-5 text-lg uppercase font-semibold cursor-pointer">
              Language
              <HiChevronDown />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
