import React from "react";
import { Routes, Route } from "react-router-dom";
import { Equipment } from "./Equipment";
import { Blacksmith } from "./Blacksmith";
import { FarmingZone } from "./FarmingZone";
import { MissionBoard } from "./MissionBoard";
import { Ranking } from "./Ranking";
export const Content = (props) => (
  <main className="Content w-full">
    <Routes>
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/blacksmith" element={<Blacksmith />} />
      <Route path="/farmingzone" element={<FarmingZone />} />
      <Route path="/missionboard" element={<MissionBoard />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  </main>
);

export default Content;
