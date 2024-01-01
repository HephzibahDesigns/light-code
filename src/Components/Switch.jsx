import React, { useState } from "react";

const Switch = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggle = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={
        isSelected
          ? "flex w-20 h-10 bg-color-secondary rounded-full duration-200 ease-in-out"
          : "flex w-20 h-10 bg-white rounded-full duration-200 ease-in-out"
      }
      onClick={toggle}
    >
      <span
        className={
          isSelected
            ? "bg-white w-10 h-10 rounded-full ml-10 duration-200 ease-in-out"
            : "bg-color-secondary w-10 h-10 rounded-full duration-200 ease-in-out"
        }
      />
    </div>
  );
};

export default Switch;
