import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import FrontCard from "../Components/FrontCard";
import BackCard from "../Components/BackCard";
import Switch from "../Components/Switch";

const Pricing = () => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center py-12">
          <p className="text-xs font-medium text-color-secondary lg:text-xl md:text-lg sm:text-base">
            Pricing
          </p>

          <h1 className="text-xl pt-4 w-[320px] font-bold leading-8 text-center lg:text-4xl lg:w-[450px] md:text-3xl md:w-[380px] sm:text-2xl">
            Get at a Reasonable Price
          </h1>

          <div className="py-12 flex justify-center items-center space-x-10">
            <p>Bill Monthly</p>

            <Switch />

            <p>Bill Anually</p>
          </div>

          <div className="py-16 flex justify-center items-center space-x-16">
            <FrontCard priceTag="20" priceLevel="Basic" />
            <FrontCard priceTag="50" priceLevel="Standard" />
            <FrontCard priceTag="100" priceLevel="Premium" />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Pricing;
