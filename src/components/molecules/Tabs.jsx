import React, { useState } from "react";
import { ButtonRoundedSimple } from "../atoms/ButtonRoundedSimple";
export const Tabs = ({ children, titulos = [] }) => {
  const [indexActiveTab, setIndextActiveTab] = useState(0);
  const childrenArray = React.Children.toArray(children);
  return (
    <div className="relative min-w-[248px] mt-[25px] w-full ">
      <div className="gap-[1px] flex absolute top-[-25px] z-[0]">
        {titulos.map((titulo, index) => (
          <ButtonRoundedSimple
            text={titulo}
            key={`${titulo}-${index}`}
            onClick={() => setIndextActiveTab(index)}
            className={`px-2 pt-1 pb-4 w-[90px] text-center text-xs ${
              indexActiveTab === index ? "!bg-neutral-secondary-200" : ""
            }`}
          />
        ))}
      </div>
      <div className="bg-neutral-secondary-200 py-4 px-4 relative flex justify-center items-center">
        {childrenArray[indexActiveTab]}
      </div>
    </div>
  );
};
