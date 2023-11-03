import React from "react";

const WorkCard = ({ num, title }) => {
  return (
    <div className="flex justify-center items-center flex-col w-[50%]">
      <div className="px-[3rem] py-4 rounded-lg bg-color-primary-dark  flex justify-center items-center hover:bg-color-secondary ease-in duration-300">
        <h1 className="font-bold text-[50px]">{num}</h1>
      </div>

      <div className="flex justify-center items-center flex-col text-center pt-10">
        <h1 className="text-2xl py-3">{title}</h1>
        <p className="text-base font-normal">
          We use a Customized application specifically designed
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
