import React from "react";
import { StatusFastBoard } from "../components/organism/StatusFastBoard";
import { MenuDesktop } from "../components/organism/MenuDesktop";
import { MenuMobile } from "../components/organism/MenuMobile";
import { useIsMobile } from "../hooks/useIsMobile";

export const TemplatePage = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center md:items-start p-10"
      style={{
        backgroundImage:`url('${process.env.PUBLIC_URL}/assets/placeholders/insetoscastelo.png')`, // Troque pelo caminho da sua imagem
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Container central com largura fixa */}
      <div className="w-[1100px] flex gap-6">
        {/* Menu lateral */}
        {isMobile ? (
          <MenuMobile />
        ) : (
          <aside className="w-[250px] bg-white/70 shadow-md p-4 mt-[50px]">
            <MenuDesktop />
          </aside>
        )}

        {/* Coluna direita: header + conteúdo */}
        <div className="flex flex-col flex-1 gap-6 w-[290px] xs:w-[370px] ml-4 sm:w-[340px] md:w-auto ">
          {/* Cabeçalho */}
          <header className="bg-white/70 shadow-md px-4 pt-4">
            <StatusFastBoard />
          </header>

          {/* Conteúdo principal */}
          <main className="bg-white/70 shadow-md flex-1 p-4  flex flex-col items-center">
            {/* Aqui vai o conteúdo dinâmico */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
