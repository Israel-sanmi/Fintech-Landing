import React from "react";
import { FaChevronRight } from "react-icons/fa";

import shield from "../../assets/images/shield.svg";
import middleImg from "../../assets/images/Fintech/images/middleImg.png";
import thirdImg from "../../assets/images/Fintech/images/thirdImg.png";

const Priority = () => {
  return (
    <div className="py-10 md:px-0">
      <div className="flex md:px-0 px-5 justify-center">
        <div className="md:flex block items-center gap-3">
          <img
            src={shield}
            className="md:object-contain w-16 md:hidden py-3 block  h-auto"
            alt=""
          />
          <img
            src={shield}
            className="md:object-contain md:block hidden"
            alt=""
          />
          <div>
            <h1 className="font-semibold text-lg">
              Your security is our priority.
            </h1>
            <p className="text-xs md:block hidden text-[#797979] md:py-0 py-5 leading-[27.2px]">
              Fintech uses the highest level of Internet Security and it is
              secured by 256 bits SSL <br /> security encryption to ensure that
              your information is comepletely protected from fraud.
            </p>
            <p className="text-xs block md:hidden text-[#797979] md:py-0 py-5 leading-[27.2px]">
              Fintech uses the highest level of Internet Security and it is
              secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </p>
            <p className="text-xs cursor-pointer transition-all flex items-center gap-1 text-[#5976FF]">
              Learn more
              <FaChevronRight className="text-xs" />
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="md:flex block items-center">
          <div>
            <img
              className=" h-auto object-cover md:hidden block"
              src={middleImg}
              alt=""
            />
          </div>
          <div className="md:m-5 m-2 md:pl-28 pl-0">
            <h1 className="font-semibold text-lg mb-10 md:block hidden">
              Your phone + our app + a <br /> debit card = a simpler life.
            </h1>
            <h1 className="font-semibold md:hidden block text-2xl mb-5">
              Your phone + our app + a debit card = a simpler life.
            </h1>
            <p className="text-xs text-[#797979] md:w-96 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit{" "}
              malesuada ornare viverra mauris, pellentesque venenatis,
              vulputate. Accumsan, hendrerit nunc platea metus, pretium quam et
              vel commodo. Eget aliquet iaculis at in placerat egestas aliquam
              morbi. Odio rhoncus nunc urna, pretium amet orci habitasse. Urna
              morbi sit nulla lacus. Diam accumsan urna non felis, nibh sit
              faucibus placerat. Sodales tristique est, orci sit non habitant
              cursus.
            </p>
            <br />
            <p className="text-xs text-[#797979] md:w-96 w-full">
              Amet nulla nulla non imperdiet. Sollicitudin viverra mi gravida{" "}
              suspendisse pellentesque. Tortor eget vestibulum, sollicitudin sed{" "}
              vestibulum vel. Nibh morbi risus in convallis. Purus convallis{" "}
              lobortis viverra penatibus pellentesque cras sodales in. Volutpat{" "}
              et, gravida lorem euismod proin in sed. Fermentum dui, amet lorem{" "}
              scelerisque feugiat lacus. Et commodo nunc arcu sed arcu. <br />
            </p>
          </div>
          <div>
            <img
              className=" h-auto object-cover md:block hidden"
              src={middleImg}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="md:flex block my-10 gap-3 justify-evenly items-center">
            <div>
              <img className="" src={thirdImg} alt="" />
            </div>
            <div className="md:m-5 m-2 md:pl-28 pl-0">
              <h1 className="font-semibold text-lg mb-10 md:block hidden">
                Transaction Anaysis with <br /> stress free.
              </h1>
              <h1 className="font-semibold md:hidden py-3 block text-2xl mb-5">
                Transaction Anaysis with stress free.
              </h1>
              <p className="text-xs text-[#797979] md:w-96 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sit{" "}
                malesuada ornare viverra mauris, pellentesque venenatis,
                vulputate. Accumsan, hendrerit nunc platea metus, pretium quam
                et vel commodo. Eget aliquet iaculis at in placerat egestas
                aliquam morbi. Odio rhoncus nunc urna, pretium amet orci
                habitasse. Urna morbi sit nulla lacus. Diam accumsan urna non
                felis, nibh sit faucibus placerat. Sodales tristique est, orci
                sit non habitant cursus.
              </p>
              <br />
              <p className="text-xs text-[#797979] md:w-96 w-full">
                Amet nulla nulla non imperdiet. Sollicitudin viverra mi gravida{" "}
                suspendisse pellentesque. Tortor eget vestibulum, sollicitudin
                sed vestibulum vel. Nibh morbi risus in convallis. Purus
                convallis lobortis viverra penatibus pellentesque cras sodales
                in. Volutpat et, gravida lorem euismod proin in sed. Fermentum
                dui, amet lorem scelerisque feugiat lacus. Et commodo nunc arcu
                sed arcu. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priority;
