import React, { Fragment, useState } from "react";
import Images from "./Images";

const UserReview = () => {
  const [active, setActive] = useState("user1");

  return (
    <div className="container h-screen flex justify-center items-center mx-auto ">
      <div className="space-y-6 mx-auto flex justify-center items-center flex-col">
        <h4 className="font-medium text-lg text-color-secondary">UserReview</h4>
        <h1 className="font-bold text-3xl w-[500px] leading-8 text-center md:text-4xl">
          What client Says About Our App After Using it
        </h1>

        <div className="flex justify-center items-center py-10 ">
          {Images.map((image) => (
            <div className="flex justify-center items-center flex-col">
              <img
                className={
                  active === `${image.activeItem}`
                    ? "active"
                    : "w-24 h-24 rounded-full mx-5"
                }
                onClick={() => setActive(image.activeItem)}
                src={image.img}
                alt="pics"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center space-y-20">
          {Images.map((image) => (
            <Fragment>
              {active === `${image.activeItem}` ? (
                <div className="flex justify-center items-center flex-col ">
                  <h1 className="font-medium text-xl my-8 ">
                    " {image.details} "
                  </h1>

                  <h4 className="text-color-secondary font-bold text-2xl">
                    {image.name}
                  </h4>

                  <p className="font-medium text-sm mt-2"> {image.stack} </p>
                </div>
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReview;
