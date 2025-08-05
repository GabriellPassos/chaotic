import React, { useState } from "react";
import { ButtonRoundedSimple } from "../atoms/ButtonRoundedSimple";
import { Plus,Subtraction } from "../../assets/svgs/icons";

export const AtributesTables = ({attributes, setAttributes}) => {


  function increaseAttribute(e) {
    e.preventDefault();
    const name = e.currentTarget.name;
    setAttributes((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  }

  function decreaseAttribute(e) {
    e.preventDefault();
    const name = e.currentTarget.name;
    if (attributes[name] <= 0) return;
    setAttributes((prev) => ({
      ...prev,
      [name]: prev[name] - 1,
    }));
  }

  return (
    <div>
      <p  className="text-left text-xl p-2 pb-4">Atributos</p>
      <form className="px-4 text-left ">
        {Object.entries(attributes).map(([key, value]) => (
          <div key={key} className="mb-4 flex justify-between">
            <label htmlFor={key} className="block mb-1 capitalize">
              {key}
            </label>
            <div className="flex items-center gap-2 ">
              <ButtonRoundedSimple
                className="p-[8px]"
                name={key}
                onClick={decreaseAttribute}
                text={<Subtraction/>}
                type="button"
              />
              <input
                id={key}
                type="text"
                value={value}
                readOnly
                className="w-[40px] text-center border-none focus:outline-none bg-transparent cursor-default select-none"

              />
              <ButtonRoundedSimple
                className="p-[8px]"
                name={key}
                onClick={increaseAttribute}
                text={<Plus/>}
                type="button"
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};
