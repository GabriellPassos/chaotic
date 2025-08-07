import React from "react";

export const ItemListRanking = ({ className = "", name, level, rank }) => {
  return (
    <>
      <p className="bg-neutral-secondary-100 py-2 mb-2">{name}</p>
      <p className="bg-neutral-secondary-100 py-2 mb-2">{level}</p>
      <p className="bg-neutral-secondary-100 py-2 mb-2">#{rank}</p>
    </>
  );
};
