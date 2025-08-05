import React from "react";
import { StepperNavigation } from "../molecules/StepperNavigation";
export const TableRanking = ({ titulos = [], children }) => {
  return (
    <div className="">
      <div className="min-w-full grid grid-cols-3">
        {titulos.map((titulo, index) => (
          <div key={index} className=" py-2">
            {titulo}
          </div>
        ))}
        {children}
      </div>
      <StepperNavigation currentIndex={1} qntTotal={10}/>
    </div>
  );
};
