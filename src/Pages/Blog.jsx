import React, { Fragment } from "react";
import Footer from "../Components/Footer";
import Blog1 from "../img/blog1.jpg";
import Blog2 from "../img/blog2.jpg";
import Blog3 from "../img/blog3.jpg";

const Blog = () => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center py-12">
          <p className="text-xs font-medium text-color-secondary lg:text-xl md:text-lg sm:text-base">
            Innovation And Quality Improvement
          </p>

          <h1 className="text-xl pt-4 w-[320px] font-bold leading-8 text-center lg:text-4xl lg:w-[450px] md:text-3xl md:w-[380px] sm:text-2xl">
            Latest Updates, Solutions And Company News
          </h1>

          <div className="lg:flex lg:justify-center lg:items-center lg:space-x-24 flex-wrap md:flex md:justify-center md:items-center">
            <div className="py-12">
              <img
                src={Blog1}
                alt="blog img"
                className="w-80 h-60 mx-auto lg:w-96 lg:h-72 md:w-96 md:h-60 sm:w-96 rounded-2xl "
              />

              <div className="flex justify-center items-center lg:flex lg:justify-start lg:items-center md:flex md:justify-start md:items-center  space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="text-center text-xl w-72 mx-auto lg:text-left lg:mx-0 md:mx-0 md:text-left font-medium lg:text-2xl lg:w-96 underline cursor-pointer">
                  Four ways to cheer yourself up on blue Monday
                </h1>

                <p className="w-80 mx-auto md:mx-0 md:text-left text-center lg:w-96  py-4 font-normal font-sans text-base text-gray-400 md:w-80">
                  On the Second edition of Serious Business, inc. Editor Jim
                  Ledbetter and Fusion senior editor salmon debate....
                </p>

                <p className="mx-auto lg:mx-0 md:mx-0 underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
                  Read More
                </p>
              </div>
            </div>

            <div className="py-12">
              <img
                src={Blog2}
                alt="blog img"
                className="w-80 h-60 lg:w-96 mx-auto lg:h-72 md:w-96 md:h-60 sm:w-96 rounded-2xl"
              />

              <div className="flex justify-center items-center lg:flex lg:justify-start lg:items-center md:flex md:justify-start md:items-center space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="text-center text-xl w-72 mx-auto lg:text-left lg:mx-0 md:mx-0 md:text-left font-medium lg:text-2xl lg:w-96 underline cursor-pointer">
                  How to organize your budget for maximum productivity ?
                </h1>

                <p className="w-80 mx-auto md:mx-0 md:text-left text-center lg:w-96  py-4 font-normal font-sans text-base text-gray-400 md:w-80">
                  Global Provider connected products for consumers and
                  enterprises worldwide, supply chain control is everything...
                </p>

                <p className="mx-auto lg:mx-0 md:mx-0 underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
                  Read More
                </p>
              </div>
            </div>

            <div className="py-12">
              <img
                src={Blog3}
                alt="blog img"
                className="w-80 h-60 mx-auto lg:w-96 lg:h-72 md:w-96 md:h-60 sm:w-96 rounded-2xl"
              />

              <div className="flex justify-center items-center lg:flex lg:justify-start lg:items-center md:flex md:justify-start md:items-center space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="text-center text-xl w-72 mx-auto  lg:text-left lg:mx-0 md:mx-0 md:text-left font-medium lg:text-2xl lg:w-96 underline cursor-pointer">
                  Should small businesses be entitled to system ?
                </h1>

                <p className="w-80 mx-auto md:mx-0 md:text-left text-center lg:w-96  py-4 font-normal font-sans text-base text-gray-400 md:w-80">
                  Our team provides skilled and experienced managers who know
                  the intricacies of this vertical and focus....
                </p>

                <p className="mx-auto lg:mx-0 md:mx-0 underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Blog;
