import React from "react";

const WorkCard = ({ num, title }) => {
  return (
    <div className="flex justify-center items-center flex-col w-[65%] py-5 lg:w-[50%] md:py-5 md:w-[40%] sm:py-6 sm:w-[38%]">
      <div className="px-[2rem] py-3 rounded-lg bg-color-primary-dark flex justify-center items-center hover:bg-color-secondary ease-in duration-300 md:px-[1.7rem] md:py-1 sm:px-[1.7rem]">
        <h1 className="font-bold text-[25px] lg:text-[50px] md:text-[40px] sm:text-[30px]">
          {num}
        </h1>
      </div>

      <div className="flex justify-center items-center flex-col text-center pt-2 sm:pt-2">
        <h1 className="lg:text-2xl md:text-xl md:py-2">{title}</h1>
        <p className="text-base font-normal">
          We use a Customized application specifically designed
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
