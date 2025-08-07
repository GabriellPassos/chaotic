import { ListWithNavigation } from "../components/organism/ListWithNavigation";
import { ItemListRanking } from "../components/molecules/ItemListRanking";
import { useState } from "react";
export const Ranking = () => {
  const [rankingList, setRankingList] = useState([
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
    { name: "Alucard", level: "99", position: "001" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const qntPerPage = 10;
  const totalPages = Math.ceil(rankingList.length / qntPerPage);
  const currentItems = rankingList.slice(
    (currentIndex - 1) * 10,
    currentIndex * 10
  );

  return (
    <>
      <div className="flex flex-col items-center min-h-[700px]">
        <h3 className="text-2xl mb-7">Ranking</h3>
        <ListWithNavigation
          className="w-full md:w-[90%]"
          titleCols={["nome", "level", "posição"]}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          total={totalPages}
        >
          {currentItems.map((_, i) => (
            <ItemListRanking
              key={i}
              name={_.name}
              level={_.level}
              position={_.position}
            />
          ))}
        </ListWithNavigation>
      </div>
    </>
  );
};
