import React from "react";
import { User } from "../../assets/svgs/icons";

export const ButtonMenuMobile = ({ className,classNameText, text, icon }) => {
  return (
    <button
      className={`${className} flex flex-col items-center w-full h-full justify-center`}
    >
      {icon && icon}
      <p className={`${classNameText}`}>{text}</p>
    </button>
  );
};
