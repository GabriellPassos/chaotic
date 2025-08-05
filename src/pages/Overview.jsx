// EquipmentGrid.jsx
import React from "react";
import { DroppableCell } from "../components/atoms/DroppableCell";

export const EquipmentGrid = () => {
  return (
    <div className="bg-gray-800 w-fit">
      <div className="grid grid-cols-3 auto-rows-[60px] gap-1 p-4  w-fit">
        {/* Linha 1 */}
        <div className="col-start-2 row-start-1">
          <DroppableCell />
        </div>

        {/* Linha 2 */}
        <div className="col-start-1 row-start-2">
          <DroppableCell />
        </div>

        <div className="col-start-2 row-start-2">
          <DroppableCell />
        </div>

        <div className="col-start-3 row-start-2">
          <DroppableCell />
        </div>
        <div className="col-start-1 row-start-3">
          <DroppableCell />
        </div>
        <div className="col-start-2 row-start-3 ">
          <DroppableCell />
        </div>
      </div>
      <div className="grid grid-cols-3 w-fit gap-1 p-4">
        <DroppableCell />
        <DroppableCell />
        <DroppableCell />

        <DroppableCell />
        <DroppableCell />
        <DroppableCell />
      </div>
    </div>
  );
};
