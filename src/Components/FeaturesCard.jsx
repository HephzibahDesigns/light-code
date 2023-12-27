import React from "react";

const FeaturesCard = ({ icon, title, text }) => {
  return (
    <div className="flex justify-center items-center flex-col text-center lg:w-[320px] h-[320px] bg-none rounded-xl border-2 border-solid border-gray-600 hover:bg-blue-950 ease-in-out duration-200 md:w-[280px] ">
      <div className="font-bold text-5xl bg-color-secondary px-2 py-2 rounded-lg">
        {icon}
      </div>

      <h1 className="py-6 font-bold text-lg">{title}</h1>
      <h3 className="font-medium leading-7 w-[250px]">{text}</h3>
    </div>
  );
};

export default FeaturesCard;
