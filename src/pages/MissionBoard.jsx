import React, { useState } from "react";
import { CardExpandWithButton } from "../components/molecules/CardExpandWithButton";

export const MissionBoard = () => {
  const [missions, setMissions] = useState({
    progress: [
      {
        title: "Patrulha pelos dutos rochosos",
        difficult: "média",
        reward: ["99 moedas"],
      },
    ],
    available: [
      {
        title: "Patrulha pelos dutos rochosos",
        difficult: "média",
        reward: ["99 moedas"],
      },
      {
        title: "Patrulha pelos dutos rochosos",
        difficult: "média",
        reward: ["2 moedas", "adaga"],
      },
    ],
  });
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl mb-7">Quadro de Missões</h3>
      <div className="gap-2 flex flex-col w-full md:w-[90%]">
        <p className="text-left text-xl">Em Progresso</p>
        {missions.progress.map((_, i) => (
          <CardExpandWithButton
            key={i}
            title={_.title}
            text1={"Dificuldade: "}
            text2={_.difficult}
            text3={"Recompensa: "}
            text4={_.reward.length == 0 && _.reward[0]}
            expandedTextContent={_.reward}
            buttonText={"Cancelar"}
          />
        ))}
      </div>
      <div className="gap-2 flex flex-col py-4  w-full md:w-[90%]">
        <p className="text-left text-xl">Geral</p>
        {missions.available.map((_, i) => (
          <CardExpandWithButton
            key={i}
            title={_.title}
            text1={"Dificuldade: "}
            text2={_.difficult}
            text3={"Recompensa: "}
            text4={_.reward.length == 0 && _.reward[0]}
            expandedTextContent={_.reward}
            buttonText={"Aceitar"}
          />
        ))}
      </div>
    </div>
  );
};
