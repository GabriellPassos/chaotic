import { EquipmentGrid } from "../components/organism/EquipmentGrid";
import { Inventory } from "../components/organism/Inventory";
import { Tabs } from "../components/molecules/Tabs";
import { useIsMobile } from "../hooks/useIsMobile";
import { AtributesTables } from "../components/molecules/AttributesTable";
export const Equipment = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <h3 className="text-2xl  mb-7">Equipamentos</h3>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-center md:justify-around">
        <div className="w-[280px] xs:w-[300px] h-fit mb-4">
          <img
            className="w-full h-full"
            src={`${process.env.PUBLIC_URL}/assets/placeholders/personagem.png`}
          />
        </div>
        {isMobile && <AtributesTables classNameWrapper=" w-full " />}
        <EquipmentGrid classNameWrapper="my-5" />
      </div>
      <div className="w-full ml-[45px]">
        {!isMobile && (
          <AtributesTables classNameWrapper=" md:mt-[-200px] mt-[15px]  w-[315px] bg-neutral-secondary-200 py-2" />
        )}
      </div>
      <div className="flex w-full justify-center md:justify-end md:ml-[-45px] md:mt-[-80px]">
        <Tabs titulos={["equip.", "consumíveis", "cartas"]}>
          <Inventory qntCols={6} qntRows={6} />
          <Inventory qntCols={6} qntRows={6} />
          <Inventory qntCols={6} qntRows={6} />
        </Tabs>
      </div>
    </>
  );
};
