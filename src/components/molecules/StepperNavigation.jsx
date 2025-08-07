import React from "react";
import { ButtonRoundedSimple } from "../atoms/ButtonRoundedSimple";
export const StepperNavigation = ({
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  return (
    <div className="w-[250px] md:w-[350px] py-4 flex justify-between mx-auto items-center">
      <ButtonRoundedSimple
        onClick={() => {currentIndex - 1 > 0 && setCurrentIndex(currentIndex -1)}}
        className="hover:bg-neutral-secondary-120 px-4 py-2 sm:px-4 py-3"
        text="anterior"
      />
      <p>
        {currentIndex}/{total}
      </p>
      <ButtonRoundedSimple
        onClick={() => setCurrentIndex(currentIndex + 1)}
        className="hover:bg-neutral-secondary-120 px-4 py-2 sm:px-4 py-3"
        text="próximo"
      />
    </div>
  );
};
