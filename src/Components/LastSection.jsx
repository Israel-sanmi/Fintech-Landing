import React from "react";

import logo from "../../assets/images/Fintech/Logo.svg";

import twitter from '../../assets/images/Fintech/Social/twitter.svg'
import insta from '../../assets/images/Fintech/Social/insta.svg'
import fb from '../../assets/images/Fintech/Social/fb.svg'
import link from '../../assets/images/Fintech/Social/link.svg'


const LastSection = () => {
  return (
    <div className="px-5 md:px-28 md:mt-0 mt-64 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-5">
        <div>
          <img className="w-14 h-14 object-contain" src={logo} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-md">Features</h1>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Spend</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Save</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Budget</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Company</h1>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Blog</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">
            Join our team
          </p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">About Us</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">FAQs</p>
        </div>
        <div>
          <h1 className="font-bold text-md">Legal</h1>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Terms</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Privacy</p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 cursor-pointer">Security</p>
        </div>
        <div className="hidden md:block">
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ut euismod viverra sem posuere porttitor.
          </p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-right">
            Info@fintech.com
          </p>
          <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-right">
            +234-000-000-0000
          </p>
        </div>
      </div>
      <div className="md:hidden block">
        <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ut euismod viverra sem posuere porttitor.
        </p>
        <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-center">
          Info@fintech.com
        </p>
        <p className="md:text-sm text-xs text-[#797979] md:py-2 py-1 text-center">
          +234-000-000-0000
        </p>
      </div>
      <div className="md:flex block justify-around gap-3 my-10">
        <div className="flex justify-center items-center gap-2">
          <img src={twitter} className="object-cover cursor-pointer" alt="" />
          <img src={fb} className="object-cover cursor-pointer" alt="" />
          <img src={insta} className="object-cover cursor-pointer" alt="" />
          <img src={link} className="object-cover cursor-pointer" alt="" />
        </div>
        <div>
          <p className="text-center text-[#797979] md:text-sm text-xs">
            Fintech is the leading online Investing and farming platform in
            Nigeria. Our customers have invested and earned <br /> billions of
            Naira that they would love to invest more.
          </p>
          <p className="text-xs text-blue-500 py-5 text-center">
            2021 - 2022 Fintech Limited - RC 0000000
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
