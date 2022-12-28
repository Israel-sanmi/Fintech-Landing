import React from "react";
import google from "../../assets/images/Fintech/download_apk.svg";
import apple from "../../assets/images/Fintech/download_apple.svg";
import phone from "../../assets/images/Fintech/Images/hero-phone.png";



const HeroContent = () => {
  return (
    <div>
      <div className="my-10 block md:flex items-center justify-between">
        <div className="flex justify-start flex-col gap-3">
          <h1 className="font-bold leading-8 text-3xl md:text-4xl text-gray-600">
            The most trusted & <br />
            secure Fintech wallet
          </h1>
          <p className="text-gray-400 md:text-md py-5 md:py-0 text-sm leading-6">
            We're here to help you get the best out of your <br /> money, no
            strings attached. Welcome to your <br /> freedom!
          </p>
          <button className="w-48 text-white bg-[#5976FF] md:my-0 my-4 rounded-md text-md px-3 py-4 cursor-pointer hover:bg-blue-400">
            Create free account
          </button>
          <div className="flex items-center gap-4">
            <img
              className=" md:w-36 w-full h-auto cursor-pointer"
              src={google}
              alt=""
            />
            <img
              className=" md:w-36 w-full h-auto cursor-pointer"
              src={apple}
              alt=""
            />
          </div>
        </div>
        <div className="md:m-0 my-10" >
          <img src={phone} className=" object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
