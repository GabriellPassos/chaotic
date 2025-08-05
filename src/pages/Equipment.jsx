import { EquipmentGrid } from "../components/organism/EquipmentGrid";
import { Inventory } from "../components/organism/Inventory";
import { Tabs } from "../components/molecules/Tabs";
export const Equipment = () => {
  return (
    <>
      <h3 className="text-2xl pb-2 pt-4">Equipamentos</h3>
      <EquipmentGrid />
      <h3 className="text-2xl pb-2 pt-4">Inventory</h3>
      <Tabs titulos={['equipamentos', 'consumíveis', 'cartas']}>
        <Inventory qntCols={6} qntRows={6}/>
        <Inventory qntCols={6} qntRows={6}/>
                <Inventory qntCols={6} qntRows={6}/>
      </Tabs>
    </>
  );
};
