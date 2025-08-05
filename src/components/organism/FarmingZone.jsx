import React, { useState } from "react";
import { DroppableCell } from "../atoms/DroppableCell";
import { Arrow } from "../../assets/svgs/icons";
export const FarmingZone = () => {
  let [openedTabs, setOpenedTabs] = useState([false, false, false]);
  const toggleTab = (index) => {
    setOpenedTabs((prev) => {
      const newTabs = [...prev];
      newTabs[index] = !newTabs[index];
      return newTabs;
    });
  };

  return (
    <div className="bg-neutral-secondary-100 w-[300px] mx-auto p-4">
      <div className="py-2">
        <img src="http://127.0.0.1:5500/src/assets/placeholders/paisagem1.png"></img>
      </div>
      <div className="mx-auto relative w-fit">
        <DroppableCell widthShape={40} heightShape={40}></DroppableCell>
      </div>
      <div className="text-left">
        <div className="flex items-center justify-between">
          <p>Dificuldade:</p>
          <p>Fácil</p>
        </div>
        <div
          onClick={() => toggleTab(0)}
          className="flex items-center justify-between cursor-pointer"
        >
          <p>Descrição:</p>
          <Arrow className={openedTabs[0] ? "" : "rotate-180"} />
        </div>
        {openedTabs[0] && <p className="pl-1">TESTE</p>}

        <div
          onClick={() => toggleTab(1)}
          className="flex items-center justify-between cursor-pointer"
        >
          <p>Inimigos Identificados:</p>
          <Arrow className={openedTabs[1] ? "" : "rotate-180"} />
        </div>
        {openedTabs[1] && <p className="pl-1">TESTE2</p>}
        <div
          onClick={() => toggleTab(2)}
          className="flex items-center justify-between cursor-pointer"
        >
          <p>Loot Identificado:</p>
          <Arrow className={openedTabs[2] ? "" : "rotate-180"} />
        </div>
        {openedTabs[2] && <p className="pl-1">TESTE3</p>}
      </div>
    </div>
  );
};
