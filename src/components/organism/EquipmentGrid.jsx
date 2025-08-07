// EquipmentGrid.jsx
import React from "react";
import { DroppableCell } from "../atoms/DroppableCell";

export const EquipmentGrid = ({classNameWrapper}) => {
  return (
    <div className={`${classNameWrapper} bg-gray-800 w-[300px] flex flex-col items-center`}>
      <div className="grid grid-cols-3  grid-rows-4 auto-rows-[60px] gap-2 p-4 w-fit">
        {/* Linha 1 */}
        <div className="col-start-2 row-start-1">
           <DroppableCell className="md:!h-[80px] !w-[70px] !h-[70px] md:!w-[80px]"/>
        </div>

        {/* Linha 2 */}
        <div className="col-start-1 row-start-2 row-span-2">
          <DroppableCell className="!h-full !w-[70px] md:!w-[80px]"/>
        </div>

        <div className="col-start-2 row-start-2 row-span-2">
           <DroppableCell className="!h-full !w-[70px] !w-full"/>
        </div>

        <div className="col-start-3 row-start-2 row-span-2">
             <DroppableCell className="!h-full !w-[70px] !w-full"/>
        </div>
        <div className="col-start-1 row-start-4">
           <DroppableCell className="md:!h-[80px] !w-[70px] !h-[70px] md:!w-[80px]"/>
        </div>
        <div className="col-start-2 row-start-4 ">
           <DroppableCell className="md:!h-[80px] !w-[70px] !h-[70px] md:!w-[80px]"/>
        </div>
      </div>
      <div className="grid grid-cols-4 w-fit gap-1 md:gap-3 p-4">
        <DroppableCell />
        <DroppableCell />
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
