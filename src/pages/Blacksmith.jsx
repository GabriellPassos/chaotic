import { useIsMobile } from "../hooks/useIsMobile";
import { Inventory } from "../components/organism/Inventory";
import { Tabs } from "../components/molecules/Tabs";
export const Blacksmith = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <h3 className="text-2xl mb-7">Ferreiro</h3>
      <div className="flex flex-col items-center md:flex-row w-full justify-center md:justify-around">
        <div className="w-[280px] xs:w-[300px] h-fit mb-4">
          <img
            className="w-full h-full"
            src={`${process.env.PUBLIC_URL}/assets/placeholders/ferreiro.png`}
          />
        </div>

        <div className="flex  justify-center md:justify-end  md:mt-[20px]">
          <Tabs titulos={["Loja"]}>
            <Inventory qntCols={6} qntRows={6} />
          </Tabs>
        </div>
      </div>
            <div className="flex w-full justify-center md:justify-end md:ml-[-45px] mt-[25px]">
        <Tabs titulos={["equip."]}>
          <Inventory qntCols={6} qntRows={6} />

        </Tabs>
      </div>
    </>
  );
};
