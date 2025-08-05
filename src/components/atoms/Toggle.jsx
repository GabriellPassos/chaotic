import React from "react";
import { ButtonRoundedSimple } from "./ButtonRoundedSimple";

export const Toggle = ({
  classNameWrapper,
  label,
  setValue,
  value,
  tabs = [],
}) => {
  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${
      tabs.length > 2 ? tabs.length / 2 : 2
    }, minmax(0, 1fr))`,
    display: "grid",
  };
  return (
    <div className={`text-left items-center gap-2 my-4`}>
      {label && <label>{label}</label>}
      <div
        style={gridTemplateColumns}
        className={`${classNameWrapper} bg-neutral-secondary rounded-2xl p-1 `}
      >
        {tabs.map((m, i) => (
          <ButtonRoundedSimple
            key={i}
            onClick={() => setValue(m)}
            className={`${
              value == m ? "bg-neutral-secondary-120" : ""
            } py-2 w-[100%] rounded-3xl hover:bg-neutral-secondary-120 `}
            text={m}
          />
        ))}
      </div>
    </div>
  );
};
