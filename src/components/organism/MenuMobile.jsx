import React, { useState } from "react";
import { Arrow, User } from "../../assets/svgs/icons.js";
import { ButtonMenuMobile } from "../atoms/ButtonMenuMobile.jsx";
import Bag from "../../assets/svgs/bag/Bag.jsx";

export const MenuMobile = () => {
  const [open, setOpen] = useState(true);

  const mainMenuItems = [
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
  ];

  const secondaryMenuItems = [
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
    { text: "Inventário", icon: <Bag className="min-h-[21px] min-w-[21px] sm:min-h-[32px] md:min-w-[32px]" /> },
  ];

  return (
    <div className="flex py-4 bg-neutral-secondary fixed z-[9] top-1/2 -translate-y-1/2  h-[424px] md:h-[600px] left-0">
      {open && (
        <div className="grid ml-2 grid-cols-2 gap-2 ">
          <ul className="gap-2 flex flex-col">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="bg-white w-[42px] h-[42px] md:w-[64px] md:h-[64px]">
                <ButtonMenuMobile
                  classNameText="sm:text-xs text-[9px]"
                  text={item.text}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
          <ul className="gap-2 flex flex-col">
            {secondaryMenuItems.map((item, index) => (
              <li key={index} className="bg-white w-[42px] h-[42px] md:w-[64px] md:h-[64px]">
                <ButtonMenuMobile
                  classNameText="sm:text-xs text-[9px]"
                  text={item.text}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="w-fit items-center flex justify-end"
        onClick={() => setOpen(!open)}
      >
        <Arrow
          className={
            open ? "rotate-[--rotation-270]" : "-rotate-[--rotation-270]"
          }
        />
      </button>
    </div>
  );
};
