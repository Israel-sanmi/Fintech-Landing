import React from "react";

import care from "../../assets/images/Fintech/Customer-care.png";
import bbc from "../../assets/images/Fintech/Clients/bbc.png";
import cnbc from "../../assets/images/Fintech/Clients/cnbc.png";
import fintech from "../../assets/images/Fintech/Clients/fintech.png";
import wef from "../../assets/images/Fintech/Clients/wef.png";
import switchCard from "../../assets/images/Fintech/Images/switchcare.png";

const Sponsors = () => {
  return (
    <div className="">
      {" "}
      <div className="bg-[#5976FF] my-10  text-white">
        <div className="md:inline-block block md:ml-5 ml-12 md:mx-0 mx-12 md:pl-28 pl-0 -mt-14">
          <div className="md:flex block items-center gap-2 p-4 w-full rounded-md bg-white shadow-lg">
            <img
              src={bbc}
              className="md:w-1/2 w-auto mx-auto h-auto object-cover"
              alt=""
            />
            <img
              src={cnbc}
              className="md:w-1/2 mx-auto w-auto h-auto object-cover"
              alt=""
            />
            <img
              src={fintech}
              className="md:w-1/2 w-auto mx-auto h-auto object-cover"
              alt=""
            />
            <img
              src={wef}
              className="md:w-1/2 w-auto mx-auto h-auto object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="md:px-28 px-5 py-2 md:flex block items-center justify-around">
          <img src={care} className="w-full my-5 h-auto block md:hidden" alt="" />
          <div>
            <h1 className="md:text-xl text-2xl font-bold">
              We’re always happy to <br /> help you.
            </h1>
            <p className="md:text-xs text-lg leading-8 py-5">
              You can chat with us on the app, slide into our DMs, tweet, leave
              an <br />
              Instagram comment, send an email or call. However you choose to
              reach <br />
              out, there’ll always be a friendly person there to make your life{" "}
              <br />
              easy.
            </p>
            <p className="text-xs cursor-pointer border border-white rounded-md p-4 inline-block my-2">
              Get help
            </p>
          </div>
          <img src={care} className="w-1/2 h-auto md:block hidden -mt-14" alt="" />
        </div>
      </div>
      <div className="md:flex block items-center justify-around">
        <div>
          <img src={switchCard} className="py-10 md:py-0" alt="" />
        </div>
        <div className="px-5 md:px-0">
          <h1 className="font-semibold md:block hidden text-lg leading-8">
            Instant Virtual Card for <br /> instant use securely.
          </h1>
          <h1 className="font-semibold text-2xl md:hidden block leading-8">
            Instant Virtual Card for <br /> instant use securely.
          </h1>
          <p className="text-xs text-[#797979] w-full md:w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit{" "}
            malesuada ornare viverra mauris, pellentesque venenatis, vulputate.
            Accumsan, hendrerit nunc platea metus, pretium quam et vel commodo.
            Eget aliquet iaculis at in placerat egestas aliquam morbi. Odio
            rhoncus nunc urna, pretium amet orci habitasse. Urna morbi sit nulla
            lacus. Diam accumsan urna non felis, nibh sit faucibus placerat.
            Sodales tristique est, orci sit non habitant cursus.
          </p>
          <br />
          <p className="text-xs text-[#797979] w-full md:w-96">
            Amet nulla nulla non imperdiet. Sollicitudin viverra mi gravida{" "}
            suspendisse pellentesque. Tortor eget vestibulum, sollicitudin sed
            vestibulum vel. Nibh morbi risus in convallis. Purus convallis
            lobortis viverra penatibus pellentesque cras sodales in. Volutpat
            et, gravida lorem euismod proin in sed. Fermentum dui, amet lorem
            scelerisque feugiat lacus. Et commodo nunc arcu sed arcu. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
