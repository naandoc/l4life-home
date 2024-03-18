"use client";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";
import { UserProps } from "@/types/UserProps";

export default function CreateAccount() {
  const [formData, setformData] = useState<UserProps>({
    fullname: "",
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      await axios.post("/api/users", formData);
      console.log("Usuário cadastrado com sucesso");
    } catch (error) {
      console.log("Erro ao criar usuário", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <TitleForm title="Criar conta" />
          <div className="field-inputs">
            <FieldLabel
              handleChange={handleChange}
              labelName="Nome completo"
              inputType="text"
              htmlFor="fullname"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Como deseja ser chamado?"
              inputType="text"
              htmlFor="name"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Usuário"
              inputType="text"
              htmlFor="username"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Senha"
              inputType="password"
              htmlFor="password"
            />
            <FieldLabel
              handleChange={null}
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
