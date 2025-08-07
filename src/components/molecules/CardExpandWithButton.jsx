import React, { useState } from "react";
import { ButtonSquareSimple } from "../atoms/ButtonSquareSimple";
import { Arrow } from "../../assets/svgs/icons";
export const CardExpandWithButton = ({
  buttonText,
  title,
  text1,
  text2,
  text3,
  text4,
  expandedTextContent = [],
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-neutral-secondary-100 px-4 pt-2">
      <p className="text-white w-full text-left">{title}</p>
      <div className="flex justify-between text-left">
        <div className="w-[65%] sm:w-[75%] py-2">
          <div className="flex justify-between">
            <p className="text-white">{text1}</p>
            <p className="text-white">{text2}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">{text3}</p>
            <p className="text-white">
              {text4} {!expandedTextContent[1] && expandedTextContent[0]}
            </p>
          </div>
        </div>
        <ButtonSquareSimple
          className="hover:bg-neutral-secondary active:bg-gray-400 min-w-[90px] md:min-w-[110px]"
          text={buttonText}
        />
      </div>
      {open && (
        <div className="text-left p-1 border-t mt-2">
          {expandedTextContent.map((_, i) => (
            <p key={i}>+ {_}</p>
          ))}
        </div>
      )}
      {expandedTextContent.length > 0 && (
        <button
          className="w-full h-[10px] flex justify-center pb-4"
          onClick={() => setOpen(!open)}
        >
          <Arrow className={open ? "" : "rotate-180"} />
        </button>
      )}
    </div>
  );
};
