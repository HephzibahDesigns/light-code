import React from "react";
import Piggy from "../img/hero3.png";

const Savings = () => {
  return (
    <div className="bg-color-primary min-h-screen py-40">
      <div className="flex justify-center items-center flex-col lg:flex lg:flex-row lg:justify-evenly lg:items-center md:flex md:flex-col md:justify-center md:items-center">
        <div className="container flex justify-center items-center">
          <img
            src={Piggy}
            alt="Piggy Vest"
            className="w-[320px] lg:w-[480px] md:w-[350px]"
          />
        </div>

        <div className="container flex justify-center items-center flex-col lg:flex lg:justify-start lg:items-start lg:flex-col md:flex md:justify-center md:items-center md:flex-col ">
          <p className="text-lg font-medium text-color-secondary">
            Saving Money
          </p>
          <h1 className="text-xl w-56 text-center font-semibold py-2 sm:text-2xl sm:w-[450px] lg:py-1.5 lg:w-96 lg:text-left md:w-[600px] md:text-center">
            Best Financing App To Save Your Money
          </h1>
          <p className="text-center w-[340px]  pb-6 lg:w-96 lg:text-left text-[18px] lg:py-3 md:pb-4 font-normal sm:w-[550px]">
            Best financial app in the world. Easy to use very user friendly for
            mobile banking . You can control your card easily and send money
            with just one click
          </p>
          <button className="btn">Download App</button>
        </div>
      </div>
    </div>
  );
};

export default Savings;
