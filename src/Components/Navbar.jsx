import React from "react";
import logo from "../../assets/images/Fintech/Logo.svg";
import {HiChevronDown} from 'react-icons/hi'
import { WiMoonWaningCrescent2 } from 'react-icons/wi'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <img className="w-14 h-14 object-contain" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li className="flex items-center text-xs font-semibold cursor-pointer">
            Features
            <HiChevronDown />
          </li>
          <li className="flex items-center text-xs font-semibold cursor-pointer">
            Company
            <HiChevronDown />
          </li>
          <li className="flex items-center text-xs font-semibold cursor-pointer">
            Help
            <HiChevronDown />
          </li>
          <li className="flex items-center text-xs font-semibold cursor-pointer">
            Language
            <HiChevronDown />
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-blue-500 bg-white border border-[#5976FF] rounded-md py-3 px-3 text-sm cursor-pointer">
          Sign in
        </button>
        <button className="text-white bg-[#5976FF] rounded-md text-sm p-3 cursor-pointer hover:bg-blue-400">
          Create free account
        </button>
        <div className="bg-[#5976FF] hover:bg-blue-400 rounded-full p-2">
          <WiMoonWaningCrescent2 className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
