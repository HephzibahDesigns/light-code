import React, { Fragment, useState } from "react";
import Images from "../Components/Images";

const UserReview = () => {
  const [active, setActive] = useState("user1");

  return (
    <div className="container h-screen flex justify-center items-center mx-auto ">
      <div className="mx-auto flex justify-center items-center flex-col">
        <h4 className="font-medium text-lg text-color-secondary py-2">
          UserReview
        </h4>
        <h1 className="font-bold leading-6 text-xl w-[300px] lg:text-3xl lg:w-[500px] text-center md:text-2xl">
          What client Says About Our App After Using it
        </h1>

        <div className="flex justify-center items-center py-10 flex-wrap space-y-5 ">
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

        <div className="flex justify-center items-center">
          {Images.map((image) => (
            <Fragment>
              {active === `${image.activeItem}` ? (
                <div className="flex justify-center items-center flex-col ">
                  <h1 className="font-medium text-base my-8 text-center w-[300px] md:text-lg md:w-[500px] lg:w-full ">
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
