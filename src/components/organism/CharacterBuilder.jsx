import React,{useState} from "react";
import { InputText } from "../atoms/InputText";
import { InputPassword } from "../atoms/InputPassword";
import { Toggle } from "../atoms/Toggle";
import { AtributesTables } from "../molecules/AttributesTable";

export const CharacterBuilder = () => {
  const [attributes, setAttributes] = useState({
    vitality: 0,
    mana: 0,
    strength: 0,
    dexterity: 0,
    intelligence: 0,
  });
  return (
    <>
      <div className="w-full md:my-[10%] mx-auto sm:w-[360px] px-5 pt-5 pb-[2rem] bg-neutral-primary">
        <h2 className="text-left text-2xl pb-2">Personagem</h2>
        <InputText label="Nome" className={"h-[38px]"} />
        <Toggle label="Sexo" tabs={["masculino", "feminino"]} />
        <AtributesTables attributes={attributes} setAttributes={setAttributes}/>
        <Toggle
          classNameWrapper="gap-4"
          tabs={[
            "Guerreiro",
            "Ladrão",
            "Arqueiro",
            "Mago",
            "Alquimista",
            "Ferreiro",
          ]}
        />
      </div>
    </>
  );
};
