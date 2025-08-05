import React from "react";

export const ItemTableRanking = ({ className = "", nome, level, posicao }) => {
  return (
    <>
      <p className="bg-neutral-secondary-100 py-2 mb-2">{nome}</p>
      <p className="bg-neutral-secondary-100 py-2 mb-2">{level}</p>
      <p className="bg-neutral-secondary-100 py-2 mb-2">#{posicao}</p>
    </>
  );
};
