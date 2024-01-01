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

          <div className="flex justify-center items-center space-x-24">
            <div className="py-12">
              <img
                src={Blog1}
                alt="blog img"
                className="w-96 h-72 rounded-2xl"
              />

              <div className="flex justify-start items-center space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="font-medium text-2xl w-96 underline cursor-pointer">
                  Four ways to cheer yourself up on blue Monday
                </h1>

                <p className="w-96 py-4 font-normal font-sans text-base text-gray-400">
                  On the Second edition of Serious Business, inc. Editor Jim
                  Ledbetter and Fusion senior editor salmon debate....
                </p>

                <p className="underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
                  Read More
                </p>
              </div>
            </div>

            <div className="py-12">
              <img
                src={Blog2}
                alt="blog img"
                className="w-96 h-72 rounded-2xl"
              />

              <div className="flex justify-start items-center space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="font-medium text-2xl w-96 underline cursor-pointer">
                  How to organize your budget for maximum productivity ?
                </h1>

                <p className="w-96 py-4 font-normal font-sans text-base text-gray-400">
                  Global Provider connected products for consumers and
                  enterprises worldwide, supply chain control is everything...
                </p>

                <p className="underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
                  Read More
                </p>
              </div>
            </div>

            <div className="py-12">
              <img
                src={Blog3}
                alt="blog img"
                className="w-96 h-72 rounded-2xl"
              />

              <div className="flex justify-start items-center space-x-6 py-4">
                <p className="font-medium">20 August 2023</p>
                <p>1 min read</p>
              </div>

              <div className="flex justify-center items-start flex-col">
                <h1 className="font-medium text-2xl w-96 underline cursor-pointer">
                  Should small businesses be entitled to system ?
                </h1>

                <p className="w-96 py-4 font-normal font-sans text-base text-gray-400">
                  Our team provides skilled and experienced managers who know
                  the intricacies of this vertical and focus....
                </p>

                <p className="underline font-medium cursor-pointer hover:text-gray-400 ease-in duration-200">
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
