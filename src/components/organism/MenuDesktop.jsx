import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Arrow, User, Bag } from "../../assets/svgs/icons.js";
import { mainMenuItems } from "../constants.js";
export const MenuDesktop = () => {
  const menuItems = mainMenuItems;
  //const location = useLocation();
  const renderMenu = (items) =>
    items.map((item, index) => {
      const isActive = false; //location.pathname === item.to;

      return (
        <Link to={item.to} className="text-neutral-800 ">
          <li key={index} className="w-full h-[42px] md:h-[42px] cursor-pointer">
            <div
              className={`flex items-center gap-2 h-full px-3 text-[9px] sm:text-xs ${
                isActive
                  ? "bg-neutral-secondary-100"
                  : "bg-white hover:bg-neutral-secondary-100"
              }`}
            >
              <div className="min-w-[21px] min-h-[21px] sm:min-w-[32px] sm:min-h-[32px]">
                {item.icon}
              </div>

              {item.text}
            </div>
          </li>
        </Link>
      );
    });

  return (
    <div className="">
      <ul className="gap-2 flex flex-col">{renderMenu(menuItems)}</ul>
    </div>
  );
};
