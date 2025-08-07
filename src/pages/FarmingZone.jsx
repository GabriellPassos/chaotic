import React, { useState } from "react";
import { Arrow } from "../assets/svgs/icons";
import { DroppableCell } from "../components/atoms/DroppableCell";
import { Image } from "../components/atoms/Image";
import { Inventory } from "../components/organism/Inventory";
import { Tabs } from "../components/molecules/Tabs";
import { FarmingZoneDroppableCell } from "../components/organism/FarmingZoneDroppableCell";
export const FarmingZone = () => {
  const [tabs, setTabs] = useState([
    { title: "Descrição", text: "/blacksmith", opened: false },
    { title: "Dificuldade", text: "/blacksmith", opened: false },
    { title: "Inimigos Identificados", text: "/blacksmith", opened: false },
    { title: "Loot Identificado", text: "/blacksmith", opened: false },
  ]);
  const handleTab = (index) => {
    console.log("aq u");
    setTabs((prev) => {
      const newTabs = [...prev];
      newTabs[index] = { ...newTabs[index], opened: !newTabs[index].opened };
      return newTabs;
    });
  };
  return (
    <>
      <h3 className="text-2xl mb-7">Farming Zone</h3>
      <div className="flex justify-around">
        <FarmingZoneDroppableCell handleTab={handleTab} tabs={tabs} />
        <div className=" md:mt-[20px]">
          <Tabs titulos={["cartas"]}>
            <Inventory qntCols={6} qntRows={6} />
          </Tabs>
        </div>
      </div>
    </>
  );
};
