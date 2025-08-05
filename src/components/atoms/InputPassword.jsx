import React from "react";

export const InputPassword = ({ className, classNameWrapper, label }) => {
  return (
    <div className={`${classNameWrapper} flex flex-col text-left`}>
      {label && <label>{label}</label>}
      <input className={`${className} bg-neutral-secondary-100 rounded-xl px-2`} type="password" />
    </div>
  );
};
