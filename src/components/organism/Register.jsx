import React from "react";
import { InputText } from "../atoms/InputText";
import { InputPassword } from "../atoms/InputPassword";

export const Register = () => {
  return (
    <>
      <div className="w-full md:my-[10%] mx-auto sm:w-[360px] px-5 pt-5 pb-[2rem] bg-neutral-primary">
        <h2 className="text-left text-2xl pb-2">Nova Conta</h2>
        <InputText label="Nome" className={"h-[38px]"} />
        <InputText label="Email" className={"h-[38px]"}         classNameWrapper={"pt-5"}/>

        <InputPassword
          label="Senha"
          className={"h-[38px]"}
          classNameWrapper={"pt-5"}
        />
        <InputPassword
          label="Confirme sua senha"
          className={"h-[38px]"}
          classNameWrapper={"pt-5"}
        />
        <p className="text-sm text-right pt-6 cursor-pointer">
          Já possuí uma conta? Faça Login.
        </p>
      </div>
    </>
  );
};
