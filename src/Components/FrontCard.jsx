import React from "react";

const FrontCard = ({ priceTag, priceLevel }) => {
  return (
    <div className="w-[25rem] h-[38rem] border border-gray-600 rounded-xl px-6 py-6">
      <div className="flex justify-start items-center">
        <h1 className="text-5xl font-medium">${priceTag}</h1>
        <p className="pt-4"> / Monthly</p>
      </div>

      <div className="py-10">
        <h1 className="font-medium text-2xl">{priceLevel}</h1>
        <p className="pt-2 text-base">
          For Beginners who want to scale Business Globally
        </p>

        <div className="py-10 space-y-4">
          <p>Expense Management</p>
          <p>Card Management</p>
          <p>Instant Statistics</p>
          <p>Book Function</p>
          <p>Accounting System</p>
        </div>
      </div>

      <button className="px-32 py-3 font-medium rounded-lg bg-color-secondary hover:bg-[#ed6927] ease-in duration-200 cursor-pointer">
        Get Started
      </button>
    </div>
  );
};

export default FrontCard;
