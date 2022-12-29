import React from "react";

import google from "../../assets/images/Fintech/download_apk.svg";
import apple from "../../assets/images/Fintech/download_apple.svg";
import last from "../../assets/images/Fintech/Images/lastSection.png";
import design from "../../assets/images/Fintech/design.png";

const Info = () => {
  return (
    <div className="bg-[#5976FF]/20 p-10 flex justify-center items-center">
      <div className="bg-[#5976FF] absolute md:flex block m-10 p-10 rounded-lg">
        <div>
          <img src={last} alt="" className="block md:hidden object-cover" />
        </div>
        <div className="">
          <div className="flex justify-start flex-col gap-3">
            <h1 className="font-semibold text-2xl text-white">
              Get the app now, dump <br /> bank fees for good.
            </h1>
            <p className="text-white text-sm leading-6">
              It only takes a few minutes to start enjoying free benefits.
              Download Kuda on <br /> Google Play or the App Store.
            </p>
            <button className="w-48 text-blue-500 bg-white rounded-md text-md px-3 py-2 cursor-pointer hover:bg-slate-50">
              Create free account
            </button>
            <div className="md:flex block items-center gap-4">
              <img
                className=" md:w-36 w-full py-2 md:py-0 h-auto cursor-pointer"
                src={google}
                alt=""
              />
              <img
                className=" md:w-36 w-full py-2 md:py-0 h-auto cursor-pointer"
                src={apple}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <img src={last} alt="" className="md:block hidden object-cover" />
        </div>
      </div>
      <img src={design} className="relative z-1000" alt="" />
    </div>
  );
};

export default Info;
