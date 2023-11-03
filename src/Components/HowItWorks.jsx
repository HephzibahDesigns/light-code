import React from "react";
import WorkCard from "./WorkCard";

const HowItWorks = () => {
  return (
    <div className="bg-color-primary-light h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="space-y-6 mx-auto flex justify-center items-center flex-col">
          <h4 className="font-medium text-lg text-color-secondary">
            How it Works
          </h4>
          <h1 className="font-bold text-3xl w-[450px] leading-8 text-center md:text-4xl">
            Grow Up Your Savings Money
          </h1>
        </div>
        <div className="flex justify-center items-center pt-[5rem] space-x-24">
          <WorkCard num="1" title="Install the App" />
          <WorkCard num="2" title="Setup your Profile" />
          <WorkCard
            num="3"
            title="Enjoy the Features"
            p="We use a Customized application specifically designed for you"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
