import React, { useState } from "react";
import { ButtonSquareSimple } from "../atoms/ButtonSquareSimple";
import { Arrow } from "../../assets/svgs/icons";
export const CardExpandWithButton = ({ buttonText, text1, text2, text3, text4 }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-neutral-secondary-100 px-2 pt-2">
      <div className="flex justify-between text-left">
        <div>
          <p className="text-white">{text1}</p>
          <p className="text-white">{text2}</p>
        </div>
        <ButtonSquareSimple className="hover:bg-neutral-secondary- active:bg-gray-400" text={buttonText} />
      </div>
      {open && (
        <div className="text-left">
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
      )}
      <button className="w-full h-[10px] flex justify-center pb-4" onClick={() => setOpen(!open)}>
        <Arrow className={open ? "" : "rotate-180"} />
      </button>
    </div>
  );
};
