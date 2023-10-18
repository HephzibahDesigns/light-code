import React from "react";
import FeaturesCard from "./FeaturesCard";
import { BsCalendar2Date, BsClipboardData } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const Features = () => {
  return (
    <div className=" bg-color-primary-light h-screen">
      <div className="container mx-auto py-32">
        <div className="space-y-6 mx-auto flex justify-center items-center flex-col">
          <h4 className="font-medium text-lg text-color-secondary">
            Our Future
          </h4>
          <h1 className="font-bold text-3xl w-[450px] leading-8 text-center md:text-4xl">
            Easy To Manage Your All Payments By Our App
          </h1>
        </div>

        <div className="flex justify-center items-center pt-[5rem] space-x-10">
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
