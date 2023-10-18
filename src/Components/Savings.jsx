import React from "react";
import Piggy from "../img/hero3.png";

const Savings = () => {
  return (
    <div className=" bg-color-primary h-screen px-10 flex justify-between items-center mx-auto">
      <div className="container flex justify-between items-center">
        <img
          src={Piggy}
          alt="Piggy saving"
          className="lg:w-[550px]  md:w-[350px] mt-12"
        />
      </div>

      <div className="space-y-5 container">
        <p className="font-medium text-lg text-color-secondary">Saving Money</p>
        <h1 className="text-4xl font-bold w-96">
          Best Financing App To Save Your Money
        </h1>
        <p className="text-xl w-[500px] lg:text-left md:leading-normal text-center">
          Best finacing app in the world. Easy to use and very user friendly for
          mobile banking. You can control your card easily and send money to
          someone with just one click.
        </p>

        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default Savings;
