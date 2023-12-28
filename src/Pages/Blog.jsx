import React, { Fragment } from "react";
import Footer from "../Components/Footer";

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
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Blog;
