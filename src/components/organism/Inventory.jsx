import React, { useState, useEffect } from "react";
import { Grid } from "../molecules/Grid";
import { DndContext, closestCorners } from "@dnd-kit/core";

export const Inventory = ({ qntCols = 5, qntRows = 6, type = "default" }) => {
  const InitialItems = [
    {
      id: 1,
      type: "default",
      name: "medal",
      description: "",
      position: "0,0",
      size: { w: 1, h: 1 },
    },
    {
      id: 2,
      type: "default",
      name: "medal",
      description: "",
      position: "0,2",
      size: { w: 2, h: 2 },
    },
    {
      id: 3,
      type: "default",
      name: "medal",
      description: "",
      position: "3,3",
      size: { w: 2, h: 1 },
    },
  ];
  const [store, setStore] = useState(InitialItems);
  const [ocupiedCells, setOcupiedCells] = useState({});

  function calculeItemsArea(items = []) {
    const newOccupied = {};
    let resetChange = false;
    items.map((item) => {
      const [itemRow, itemCol] = item.position.split(",").map(Number);
      const { h: height, w: width } = item.size;

      // Verifica se há colisão
      for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
          const currentRow = itemRow + h;
          const currentCol = itemCol + w;
          const cellKey = `${currentRow},${currentCol}`;

          if (newOccupied[cellKey]?.id) {
            resetChange = true;
            return item; // Colisão, ignora
          }
        }
      }

      // Marca as células
      for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
          const currentRow = itemRow + h;
          const currentCol = itemCol + w;
          const cellKey = `${currentRow},${currentCol}`;

          newOccupied[cellKey] = {
            id: item.id,
            size: h === 0 && w === 0 ? item.size : undefined,
            isMainCell: h === 0 && w === 0,
          };
        }
      }

      return item;
    });
    !resetChange && setOcupiedCells(newOccupied); // Atualiza o state
    return !resetChange;
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;
    if (over.data.current.occupied) return;
    const [posCellRow, posCellCol] = over.id.split(",").map(Number);
    if (
      posCellRow + active.data.current.size.h > qntRows ||
      posCellCol + active.data.current.size.w > qntCols
    ) {
      return;
    }

    console.log("over:", over);
    console.log("active:", active);
    const newStore = store.map((_) =>
      active.id === _.id ? { ..._, position: over.id } : _
    );
    calculeItemsArea(newStore) && setStore(newStore);
  }
  useEffect(() => {
    calculeItemsArea(store);
  }, []);
  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div className="bg-neutral-secondary-100 w-fit">
        <Grid
          qntCols={qntCols}
          qntRows={qntRows}
          type={type}
          store={ocupiedCells}
        />
      </div>
    </DndContext>
  );
};
