import React from "react";
import HeroContent from "./HeroContent";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[#5976FF0D]/5 md:px-28 px-5 pb-20">
      <div>
        <div className=" hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
      <HeroContent />
    </div>
  );
};

export default Hero;
