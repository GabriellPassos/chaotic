import React from "react";
import { ButtonSquareSimple } from "../atoms/ButtonSquareSimple";
export const CardWithButton = ({ buttonText, text1, text2}) => {

  return (
    <div className="bg-neutral-secondary-100 p-2">
      <div className="flex justify-between text-left">
        <div>
          <p className="text-white">{text1}</p>
          <p className="text-white">{text2}</p>
        </div>
        <ButtonSquareSimple text={buttonText} />
      </div>
    </div>
  );
};
