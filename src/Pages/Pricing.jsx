import React, { Fragment, useState } from "react";
import Footer from "../Components/Footer";
import FrontCard from "../Components/FrontCard";
import BackCard from "../Components/BackCard";
import Switch from "../Components/Switch";
import ReactCardFlip from "react-card-flip";

const Pricing = () => {
  const [isFlipped, setIsFlipped] = useState(false);

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

            <Switch isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

            <p>Bill Anually</p>
          </div>

          <Fragment className="z-0">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div className="py-16 flex justify-center items-center flex-col lg:space-x-10 lg:flex lg:justify-center lg:items-center lg:flex-wrap lg:flex-row md:flex md:justify-center md:items-center md:flex-row md:flex-wrap sm:flex sm:justify-center sm::items-center sm:flex-col sm:ml-10">
                <FrontCard priceTag="20" priceLevel="Basic" />
                <FrontCard priceTag="50" priceLevel="Standard" />
                <div className="py-2 pr-9 ml-10 flex justify-center items-center flex-col lg:space-x-10 lg:flex lg:justify-center lg:items-center lg:flex-row lg:ml-10 md:flex md:justify-center md:items-center md:flex-row md:flex-wrap md:ml-10 sm:flex sm:justify-center sm::items-center sm:flex-col sm:ml-10">
                  <FrontCard priceTag="100" priceLevel="Premium" />
                </div>
              </div>

              <div className="py-16 flex justify-center items-center flex-wrap flex-col ml-0 lg:space-x-10 lg:flex lg:justify-center lg:items-center lg:flex-wrap md:flex md:justify-center md:items-center md:flex-row md:flex-wrap md:ml-10 sm:flex sm:justify-center sm::items-center sm:flex-col sm:ml-0">
                <BackCard priceTag="120" priceLevel="Basic" />
                <BackCard priceTag="150" priceLevel="Standard" />

                <div className="py-2 pr-0 flex justify-center items-center flex-wrap flex-col ml-0 lg:space-x-10 lg:flex lg:justify-center lg:items-center lg:ml-10 md:flex md:justify-center md:items-center md:flex-row md:flex-wrap md:ml-10 sm:flex sm:justify-center sm::items-center sm:flex-col sm:ml-0 sm:pr-10">
                  <BackCard priceTag="500" priceLevel="Premium" />
                </div>
              </div>
            </ReactCardFlip>
          </Fragment>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Pricing;
