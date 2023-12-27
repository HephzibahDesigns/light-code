import React from "react";
import FeaturesCard from "./FeaturesCard";
import { BsCalendar2Date, BsClipboardData } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const Features = () => {
  return (
    <div className="bg-color-primary-light min-h-screen">
      <div className="container mx-auto py-32">
        <div className="space-y-6 mx-auto flex justify-center items-center flex-col">
          <h4 className="font-medium text-lg text-color-secondary">
            Our Future
          </h4>
          <h1 className="text-xl w-[320px] font-bold leading-8 text-center lg:text-4xl lg:w-[450px] md:text-3xl md:w-[380px]">
            Easy To Manage Your All Payments By Our App
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center pt-[2rem] space-x-0 space-y-5 lg:flex lg:justify-center lg:items-center  lg:space-x-10 md:flex md:justify-center md:items-center md:flex-wrap md:space-x-6  md:[&>*:nth-child(1)]:mt-5 md:[&>*:nth-child(3)]:mt-10 sm:space-x-7 [&>*:nth-child(1)]:mt-4 ">
          <FeaturesCard
            icon={<BsCalendar2Date />}
            title="Expense Tracking"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesCard
            icon={<BsClipboardData />}
            title="Expense Tracking"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <FeaturesCard
            icon={<BiSolidPhoneCall />}
            title="Expense Tracking"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
