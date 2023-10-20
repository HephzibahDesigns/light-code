import React from "react";

const WorkCard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="px-8 py-6 rounded-lg bg-color-secondary flex justify-center items-center">
        <h1 className="font-bold text-3xl">1</h1>
      </div>

      <div className="flex justify-center items-center flex-col text-center pt-10">
        <h1>Install the App</h1>
        <p>We use a Customized application specifically designed</p>
      </div>
    </div>
  );
};

export default WorkCard;
