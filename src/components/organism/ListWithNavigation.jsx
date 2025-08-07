import React from "react";
import { StepperNavigation } from "../molecules/StepperNavigation";
export const ListWithNavigation = ({ className, titleCols = [], children, total,currentIndex, setCurrentIndex }) => {
  return (
    <>
      <div className={`${className}  grid grid-cols-3`}>
        {titleCols.map((_, index) => (
          <div key={index} className=" py-2">
            {_}
          </div>
        ))}
        {children}
      </div>
      <StepperNavigation currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} total={total} />
    </>
  );
};
