import React, { useState } from "react";
import { DroppableCell } from "../atoms/DroppableCell";
import { Arrow } from "../../assets/svgs/icons";
import { Image } from "../atoms/Image";
export const FarmingZoneDroppableCell = ({tabs={}, handleTab = null}) => {

  return (
    <div className="min-h-[600px]">
      <div className="bg-neutral-secondary-100 h-fit w-full md:w-[300px] mx-auto p-4">
        <Image
          url={`${process.env.PUBLIC_URL}/assets/placeholders/paisagem1.png`}
          classNameWrapper="py-2"
        />
        <div className="mx-auto relative w-fit">
          <DroppableCell widthShape={50} heightShape={50}></DroppableCell>
        </div>
        <div className="text-left">
          {tabs.map((_, i) => (
            <div key={i} className="pb-2 pt-1">
              <p
                className="justify-between flex cursor-pointer items-center border-b border-b-neutral-secondary-120"
                onClick={() => handleTab(i)}
              >
                {_.title}: <Arrow className={_.opened ? "" : "rotate-180"} />
              </p>
              {tabs[i].opened && (
                <div className="text-left">
                  <p>{_.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
