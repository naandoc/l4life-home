import Link from "next/link";
import "@/components/login-form/style.css";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";
import { ChangeEvent, useEffect, useState } from "react";
import MsgErrorInput from "../msg-error-input/msg-error-input";
import axios from "axios";
import redirectForm from "@/utils/redirectForm";
import { create, get } from "@/utils/cookies";
import Loading from "../loading/loading";

export default function LoginForm() {
  interface userProps {
    username: string;
    password: string;
  }
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isLogged, setIslogged] = useState<boolean>(true);
  const [loginSuccess, setLoginSuccess] = useState<string>("");
  const [user, setUser] = useState<userProps>({
    username: "",
    password: "",
  });

  // checked if the user is logged in
  useEffect(() => {
    const fetchCookie = async () => {
      const userCookie = await get();

      if (!userCookie) {
        setIslogged(false);
        return;
      } else {
        // get username through cookie user
        const users = await axios.get("/api/users");

        for (const userApi of users.data) {
          if (userCookie.value === userApi.username) {
            redirectForm("/");
          }
        }
      }
    };

    fetchCookie();
  }, []);

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
          create({ value: user.username });
          console.log("Achei o usuário! Cookie salvo: ", user.username);
        }
      }

      if (userLogin) {
        setLoginSuccess("");

        setTimeout(() => {
          redirectForm("/");
        }, 2000);
      } else {
        console.log("Não foi encontrado");
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
