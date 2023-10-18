import React from "react";
import HeroIMG from "../img/hero4.png";
import { Features, Savings } from "../Components/export2";

const Hero = () => {
  return (
    <div>
      <div className="container lg:flex justify-between items-center py-10 px-10 mx-auto md:flex-row ">
        <div className="lg:flex flex-col justify-center items-start space-y-6 md:text-center">
          <h1 className="text-4xl font-bold lg:text-left  md:text-center">
            Awesome App for your financial
          </h1>
          <p className="w-[500px] text-xl lg:text-left   md:leading-normal text-center">
            This should be used to tell a story and let your users know a little
            more about app and it’s use, How can benefit them.
          </p>

          <button className="btn">Download App</button>
        </div>

        <div className="container flex justify-center items-center">
          <img
            src={HeroIMG}
            alt="hero img"
            className="lg:w-[400px]  md:w-[350px] mt-12"
          />
        </div>
      </div>
      <Features />
      <Savings />
    </div>
  );
};

export default Hero;
