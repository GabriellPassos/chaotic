import React from "react";
import { InputText } from "../atoms/InputText";
import { InputPassword } from "../atoms/InputPassword";

export const Login = () => {
  return (
    <>
      <div className="w-full md:my-[10%] mx-auto sm:w-[360px] px-5 pt-5 pb-[2rem] bg-neutral-primary">
        <h2 className="text-left text-2xl pb-2">Login</h2>
        <InputText label="Email" className={"h-[38px]"} />
        <InputPassword
          label="Senha"
          className={"h-[38px]"}
          classNameWrapper={"pt-5"}
        />
        <p className="text-sm text-right pt-4 cursor-pointer">
          Não possuí uma conta? Registre-se.
        </p>
      </div>
    </>
  );
};
