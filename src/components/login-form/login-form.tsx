import Link from "next/link";
import "@/components/login-form/style.css";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";
import { ChangeEvent, useEffect, useState } from "react";
import MsgErrorInput from "../msg-error-input/msg-error-input";
import axios from "axios";
import redirectForm from "@/utils/redirectForm";
import { createCookie, getCookie } from "@/utils/cookies";
import Loading from "../loading/loading";

export default function LoginForm() {
  interface userProps {
    username: string;
    password: string;
  }
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isLogged, setIslogged] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<string>("");
  const [user, setUser] = useState<userProps>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsloading(true);

      const users = await axios.get("/api/users");

      // logic to accept login or not
      let userLogin = false;

      for (const userApi of users.data) {
        if (
          userApi.username === user.username &&
          userApi.password === user.password
        ) {
          userLogin = true;

          // using cookies to save user login data
          createCookie({ value: user.username });
        }
      }

      if (userLogin) {
        setLoginSuccess("");

        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        setIsloading(false);
        setLoginSuccess("Usuário ou senha incorreto");
      }
    } catch (error) {
      console.log("Não foi possível encontrar a API ", error);
    }
  };
  return !isLogged ? (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <TitleForm title="Login" />
          <div className="field-inputs">
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
            <MsgErrorInput msg={loginSuccess} />
            <BtnForm btnName="Login" isLoading={isLoading} />
            <div className="create-account">
              <p>
                <Link href="/create-account">Criar uma conta</Link>
              </p>
              <p>
                <Link href="/forged-login">Esqueceu sua senha?</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <Loading />
  );
}
