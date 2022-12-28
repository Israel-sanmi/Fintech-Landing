import React from "react";

import { AiFillCreditCard, AiFillPieChart } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsPiggyBank } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";

const middleFloat = () => {
  return (
    <div>
      <div className="px-20">
        <div>
          <div className="bg-white shadow-xl rounded-lg md:flex block items-center justify-around p-5 relative -mt-20">
            <div className="flex gap-2 md:py-0 py-5 flex-col items-center">
              <div className=" p-3 rounded-full inline-block bg-blue-100">
                <AiFillCreditCard className="text-blue-600 text-xl text-center" />
              </div>
              <p className="text-xs text-center text-gray-400">
                Get a virtual debit card
              </p>
            </div>
            <div className="flex gap-2 md:py-0 py-5 flex-col items-center">
              <div className="  p-3 rounded-full inline-block bg-red-100">
                <RiSendPlaneFill className="text-red-600 text-xl text-center" />
              </div>
              <p className="text-xs text-center text-gray-400">
                Send money with just <br /> low fee
              </p>
            </div>
            <div className="flex gap-2 md:py-0 py-5 flex-col items-center">
              <div className=" p-3 rounded-full inline-block bg-purple-100">
                <BsPiggyBank className="text-purple-600 text-xl text-center" />
              </div>
              <p className="text-xs text-center text-gray-400">
                Save and security
              </p>
            </div>
            <div className="flex gap-2 md:py-0 py-5 flex-col items-center">
              <div className="  p-3 rounded-full inline-block bg-orange-100">
                <FaNetworkWired className="text-orange-600 text-xl text-center" />
              </div>
              <p className="text-xs text-center text-gray-400">
                Get no worries aout <br /> transaction info issues
              </p>
            </div>
            <div className="flex gap-2 md:py-0 py-5 flex-col items-center">
              <div className="  p-3 rounded-full inline-block bg-green-100">
                <AiFillPieChart className="text-green-600 text-xl text-center" />
              </div>
              <p className="text-xs text-center text-gray-400">
                Create budget to help <br /> control spending
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default middleFloat;
