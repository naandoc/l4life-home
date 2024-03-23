"use client";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";
import { UserProps } from "@/types/UserProps";
import MsgErrorInput from "../msg-error-input/msg-error-input";
import { validatePassword } from "@/utils/validationForm";

export default function CreateAccount() {
  const [formData, setformData] = useState<UserProps>({
    fullname: "",
    name: "",
    username: "",
    password: "",
  });

  const [existingUser, setExistingUser] = useState<boolean>(false);

  const [passwordForm, setPasswordForm] = useState<boolean>(true);

  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation of form passwords
    const password2 = document.querySelector(
      "#password-confirm"
    ) as HTMLInputElement;

    const validationPassword = validatePassword(
      formData.password,
      password2.value
    );
    setPasswordForm(validationPassword);

    if (!validationPassword) {
      return;
    }

    try {
      setIsloading(true);
      // validation if there is already a registered username
      const usernames = await axios.get("/api/users");
      setIsloading(false);

      let userExists = false;

      for (const user of usernames.data) {
        if (
          user.username.toLowerCase() === formData.username.toLocaleLowerCase()
        ) {
          userExists = true;

          const usernameInput = document.querySelector(
            "#username"
          ) as HTMLInputElement;
          if (usernameInput) usernameInput.focus();

          break;
        }
      }

      if (!userExists) {
        setIsloading(true);
        await axios.post("/api/create-users", formData);
        setIsloading(false);
        setExistingUser(false);
        // redirect
      } else {
        setExistingUser(true);
      }
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
              pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{6,50}$"
              titlePattern="Nome incorreto"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Como deseja ser chamado?"
              inputType="text"
              htmlFor="name"
              pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,20}$"
              titlePattern="Digite um nome de 6 à 20 caracteres"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Usuário"
              inputType="text"
              htmlFor="username"
              pattern="^[a-z0-9]{6,16}$"
              titlePattern="Seu usuário deve conter de 6 à 16 digitos, contendo somente letras e/ou números"
            />
            <FieldLabel
              handleChange={handleChange}
              labelName="Senha"
              inputType="password"
              htmlFor="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=~`[\]{}|\\:;<>,.?/]{8,20}$"
              titlePattern="A senha deve ter entre 8 e 20 caracteres, pelo menos uma letra minúscula, uma letra maiúscula e um número."
            />
            <FieldLabel
              handleChange={null}
              labelName="Digite a senha novamente"
              inputType="password"
              htmlFor="password-confirm"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=~`[\]{}|\\:;<>,.?/]{8,20}$"
              titlePattern="Sua senha deve ser igual a senha anterior"
            />
            <MsgErrorInput
              msg={`${passwordForm ? "" : "As senhas devem ser iguais"}`}
            />
            <MsgErrorInput
              msg={`${existingUser ? "Esse usuário já existe" : ""}`}
            />
            <BtnForm btnName="Criar conta" isLoading={isLoading} />
          </div>
        </div>
      </form>
    </div>
  );
}
