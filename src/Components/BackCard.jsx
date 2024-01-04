import React from "react";
import { CgPentagonDown } from "react-icons/cg";

const BackCard = ({ priceTag, priceLevel }) => {
  return (
    <div className="w-[20rem] h-[38rem] border border-gray-600 rounded-xl px-6 py-6 mt-5 lg:w-[25rem] md:w-[26rem] sm:w-[25rem]  md:mt-10 sm:mt-5">
      <div className="flex justify-start items-center">
        <h1 className="text-5xl font-medium">${priceTag}</h1>
        <p className="pt-4"> / Annum</p>
      </div>

      <div className="py-10">
        <h1 className="font-medium text-2xl">{priceLevel}</h1>
        <p className="pt-2 text-base">
          For Beginners who want to scale Business Globally
        </p>

        <div className="py-10 space-y-4">
          <div className="flex justify-start items-center">
            <CgPentagonDown fontSize={28} />
            <p>Expense Management</p>
          </div>

          <div className="flex justify-start items-center">
            <CgPentagonDown fontSize={28} />
            <p>Card Management</p>
          </div>

          <div className="flex justify-start items-center">
            <CgPentagonDown fontSize={28} />
            <p>Instant Statistics</p>
          </div>

          <div className="flex justify-start items-center">
            <CgPentagonDown fontSize={28} />
            <p>Book Function</p>
          </div>

          <div className="flex justify-start items-center">
            <CgPentagonDown fontSize={28} />
            <p>Accounting System</p>
          </div>
        </div>
      </div>

      <button className="px-20 py-3 font-medium rounded-lg bg-color-secondary hover:bg-[#ed6927] ease-in duration-200 cursor-pointer lg:px-32 md:px-28">
        Get Started
      </button>
    </div>
  );
};

export default BackCard;
