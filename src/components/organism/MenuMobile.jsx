import React, { useState } from "react";
import { Arrow, User } from "../../assets/svgs/icons.js";
import { ButtonMenuMobile } from "../atoms/ButtonMenuMobile.jsx";
import Bag from "../../assets/svgs/bag/Bag.jsx";
import { Link } from "react-router-dom";
import { mainMenuItems } from "../constants.js";
export const MenuMobile = () => {
  const [open, setOpen] = useState(true);

  const menuItems = mainMenuItems

  return (
    <div className="flex py-4 bg-neutral-secondary fixed z-[9] top-1/2 -translate-y-1/2  h-[90%] md:h-[600px] left-0">
      {open && (
        <ul className="ml-2 flex flex-col flex-wrap gap-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="bg-white w-[42px] h-[42px] md:w-[64px] md:h-[64px]"
            >
              <Link to={item.to}>
                <ButtonMenuMobile
                  classNameText="sm:text-xs text-[9px]"
                  text={item.text}
                  icon={item.icon}
                />
              </Link>
            </li>
          ))}
        </ul>
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
