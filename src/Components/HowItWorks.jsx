import React from "react";
import WorkCard from "./WorkCard";

const HowItWorks = () => {
  return (
    <div className="bg-color-primary-light h-screen">
      <div className="container mx-auto py-32">
        <div className="space-y-6 mx-auto flex justify-center items-center flex-col">
          <h4 className="font-medium text-lg text-color-secondary">
            How it Works
          </h4>
          <h1 className="font-bold text-3xl w-[450px] leading-8 text-center md:text-4xl">
            Grow Up Your Savings Money
          </h1>
        </div>
        <div className="flex justify-center items-center pt-[5rem] space-x-[12rem]">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
