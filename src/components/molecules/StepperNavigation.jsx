import React from "react";
import { ButtonRoundedSimple } from "../atoms/ButtonRoundedSimple";
export const StepperNavigation = ({ currentIndex, qntTotal }) => {
  return (
    <div className="w-[250px] md:w-[350px] py-4 flex justify-between mx-auto items-center">
      <ButtonRoundedSimple className="px-4 py-2 sm:px-4 py-3" text="anterior"/>
      <p>{currentIndex}/{qntTotal}</p>
      <ButtonRoundedSimple className="px-4 py-2 sm:px-4 py-3" text="próximo"/>
    </div>
  );
};
