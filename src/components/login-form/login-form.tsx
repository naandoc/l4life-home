import Link from "next/link";
import "@/components/login-form/style.css";
import TitleForm from "../title-form/title-form";
import FieldLabel from "../field-label/field-label";
import BtnForm from "../btn-form/btn-form";
export default function LoginForm() {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-box">
          <TitleForm title="Login" />
          <div className="field-inputs">
            <FieldLabel
              labelName="Usuário"
              inputType="text"
              htmlFor="username"
            />
            <FieldLabel
              labelName="Senha"
              inputType="password"
              htmlFor="password"
            />
            <BtnForm btnName="Login" />
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
  );
}
