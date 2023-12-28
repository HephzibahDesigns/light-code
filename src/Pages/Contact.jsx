import React, { Fragment } from "react";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center py-12">
          <p className="text-xs font-medium text-color-secondary lg:text-xl md:text-lg sm:text-base">
            Have a Question ?
          </p>

          <h1 className="text-2xl pt-4 w-[320px] font-bold leading-8 text-center lg:text-4xl lg:w-[450px]  md:text-3xl md:w-[380px] sm:text-3xl">
            Get In Touch
          </h1>

          <div className="py-12">
            <div className="flex justify-center items-center space-y-5 flex-col lg:flex lg:justify-center lg:items-center lg:flex-row lg:space-y-0 md:flex md:justify-center md:items-center md:flex-row md:space-y-0 sm:flex sm:justify-center sm:items-center sm:flex-row sm:space-y-0 py-6">
              <input
                type="text"
                placeholder="Name"
                className="mx-2 pr-36 px-2 py-3 rounded-md text-black lg:pr-40 md:pr-28 sm:pr-20"
              />
              <input
                type="email"
                placeholder="Email"
                className="mx-2 pr-36 px-2 py-3 rounded-md text-black lg:pr-40 md:pr-28 sm:pr-20"
              />
            </div>

            <div className="flex justify-center items-center space-y-5 flex-col lg:flex lg:justify-center lg:items-center lg:flex-row lg:space-y-0 md:flex md:justify-center md:items-center md:flex-row md:space-y-0 sm:flex sm:justify-center sm:items-center sm:flex-row sm:space-y-0">
              <input
                type="number"
                placeholder="Phone Number"
                className="mx-2 pr-36 px-2 py-3 rounded-md text-black lg:pr-40 md:pr-28 sm:pr-20"
              />
              <input
                type="text"
                placeholder="Company"
                className="mx-2 pr-36 px-2 py-3 rounded-md text-black lg:pr-40 md:pr-28 sm:pr-20"
              />
            </div>

            <div className="flex justify-center items-center pt-10">
              <textarea
                className="text-left text-black pr-[9rem] pb-20 py-2 px-2 rounded-lg lg:pr-[32.4rem] lg:pb-20 lg:text-left
                md:pr-[27rem] md:pb-20 sm:pr-[23rem] sm:pb-20
                "
                placeholder="Message"
              />
            </div>
            <div className="flex justify-center items-center pt-8">
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
