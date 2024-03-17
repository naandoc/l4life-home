import React from "react";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";

export default function CreateAccount() {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-box">
          <TitleForm title="Criar conta" />
          <div className="field-inputs">
            <FieldLabel
              labelName="Nome completo"
              inputType="text"
              htmlFor="fullname"
            />
            <FieldLabel
              labelName="Como deseja ser chamado?"
              inputType="text"
              htmlFor="name"
            />
            <FieldLabel labelName="Usuário" inputType="text" htmlFor="user" />
            <FieldLabel
              labelName="Senha"
              inputType="password"
              htmlFor="password"
            />
            <FieldLabel
              labelName="Digite a senha novamente"
              inputType="password"
              htmlFor="password-confirm"
            />
            <BtnForm btnName="Criar conta" />
          </div>
        </div>
      </form>
    </div>
  );
}
