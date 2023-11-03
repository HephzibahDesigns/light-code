import React from "react";
import Piggy from "../img/hero3.png";

const Savings = () => {
  return (
    <div className="bg-color-primary min-h-screen px-16">
      <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center md:flex md:flex-col md:justify-center md:items-center">
        <div className="container flex justify-center items-center">
          <img
            src={Piggy}
            alt="Piggy Vest"
            className="lg:w-[400px] md:w-[300px]"
          />
        </div>

        <div className="container lg:flex lg:justify-start lg:items-start lg:flex-col md:flex md:justify-center md:items-center md:flex-col md:text-center">
          <p className="text-lg font-medium text-color-secondary pb-3">
            Saving Money
          </p>
          <h1 className="text-3xl font-semibold py-2 lg:w-96">
            Best Financing App To Save Your Money
          </h1>
          <p className="lg:w-96 text-[18px] py-5 font-normal">
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
