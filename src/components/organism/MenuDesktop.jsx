import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Arrow, User, Bag } from "../../assets/svgs/icons.js";

export const MenuDesktop = () => {
  //const location = useLocation();

  const mainMenuItems = [
    { text: "Inventário", to: "/inventario", icon: <Bag /> },
    { text: "Estoque", to: "/estoque", icon: <Bag /> },
    { text: "Pedidos", to: "/pedidos", icon: <Bag /> },
    { text: "Relatórios", to: "/relatorios", icon: <Bag /> },
    { text: "Usuários", to: "/usuarios", icon: <Bag /> },
    { text: "Produtos", to: "/produtos", icon: <Bag /> },
    { text: "Clientes", to: "/clientes", icon: <Bag /> },
    { text: "Configurações", to: "/configuracoes", icon: <Bag /> },
  ];

  const bottomMenuItems = [
    { text: "Ajuda", to: "/ajuda", icon: <Bag /> },
    { text: "Suporte", to: "/suporte", icon: <Bag /> },
  ];

  const renderMenu = (items) =>
    items.map((item, index) => {
      const isActive = false//location.pathname === item.to;

      return (
        <li key={index} className="w-full h-[42px] md:h-[42px]">
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
            <Link to={item.to} className="text-neutral-800">
              {item.text}
            </Link>
          </div>
        </li>
      );
    });

  return (
    <div className="">
      <ul className="gap-2 flex flex-col">{renderMenu(mainMenuItems)}</ul>
      <ul className="gap-2 flex flex-col mt-2">{renderMenu(bottomMenuItems)}</ul>
    </div>
  );
};
