import React from "react";
import HeroIMG from "../img/hero4.png";
import { Features, Footer, HowItWorks, Savings } from "../Components/export2";
import UserReview from "../Pages/UserReview";

const Hero = () => {
  return (
    <div>
      <div className="container lg:flex justify-between items-center py-10 px-10 mx-auto md:flex-row ">
        <div className="lg:flex flex-col justify-center items-start space-y-4 md:text-center sm:text-center">
          <h1 className="text-xl w-82 font-bold sm:text-3xl sm:w-full lg:text-4xl lg:text-left md:text-center">
            Awesome App for your Financial Needs
          </h1>
          <p className="text-base w-92 sm:mx-auto text-left sm:w-[550px] sm:text-center sm:text-lg lg:text-left md:text-center md:mx-auto  md:w-[550px] leading-normal">
            This should be used to tell a story and let your users know a little
            more about app and it’s use how can benefit them.
          </p>

          <button className="btn">Download App</button>
        </div>

        <div className="container flex justify-center items-center">
          <img
            src={HeroIMG}
            alt="hero img"
            className="w-[280px] lg:w-[400px]  md:w-[350px] mt-12 sm:w-[350px]"
          />
        </div>
      </div>
      <Features />
      <Savings />
      <HowItWorks />
      <UserReview />
      <Footer />
    </div>
  );
};

export default Hero;
