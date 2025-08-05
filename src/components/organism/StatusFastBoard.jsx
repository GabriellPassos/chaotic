import React, { useState } from "react";
import { StatusBar } from "../molecules/StatusBar";
import { Arrow } from "../../assets/svgs/icons.js";
import { useIsMobile } from "../../hooks/useIsMobile.jsx";
export const StatusFastBoard = () => {
  const [open, setOpen] = useState(true);
  const isMobile = useIsMobile();
  console.log(isMobile, "é");
  return (
    <div className={`${!isMobile ? "flex text-sm justify-between" : ""}`}>
      <div className={`${!isMobile ? "w-fit" : ""}`}>
        <div className="flex gap-x-[10px]">
          <p>Ganadorf</p>
          <p>Lvl: 99</p>
        </div>

        <div className={`${isMobile ? "gap-3 flex flex-col":"grid grid-cols-[200px,1fr] gap-4"} `} >
          <div>
            <div className="flex items-center gap-2">
              <p>HP:</p>
              <StatusBar
                maxValue={100}
                currentValue={100}
                className="bg-red-primary-50 h-[13px] text-xs"
                classNameWrapper="w-full bg-black"
              />
            </div>
            <div className="flex items-center gap-1">
              <p>MP:</p>
              <StatusBar
                maxValue={100}
                currentValue={100}
                className="bg-blue-primary-50 h-[13px] text-xs"
                classNameWrapper="w-full bg-black"
              />
            </div>
          </div>
          <div className="text-left">
            <div className="grid grid-cols-2 gap-2">
              <p>Ouro: </p>
              <p>9999</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p>Exp: </p>
              <p>99999</p>
            </div>
          </div>
        </div>
      </div>
      {(open || !isMobile) && (
        <div
          className={`text-left ${!isMobile ? "grid grid-cols-2 gap-4 " : ""}`}
        >
          <div className="pb-4">
            <p>Atributos</p>
            <ul className="pl-2 grid grid-cols-2">
              <li className="grid grid-cols-2 gap-2">
                <p>VIT:</p> <p>9999</p>
              </li>
              <li className="grid grid-cols-2 gap-2">
                MANA: <p>9999</p>
              </li>
              <li className="grid grid-cols-2 gap-2">
                STR: <p>9999</p>
              </li>
              <li className="grid grid-cols-2 gap-2">
                DEX: <p>9999</p>
              </li>
              <li className="grid grid-cols-2 gap-2">
                INT: <p>9999</p>
              </li>
            </ul>
          </div>
          <div>
            <p>Atividade Atual:</p>
            <ul className="pl-2">
              <li>Tempo Restante:</li>
            </ul>
          </div>
        </div>
      )}

      {isMobile && (
        <button
          className="w-full flex justify-center pb-3 pt-4"
          onClick={() => setOpen(!open)}
        >
          <Arrow className={open ? "" : "rotate-180"} />
        </button>
      )}
    </div>
  );
};
