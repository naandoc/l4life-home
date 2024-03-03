import Link from "next/link";
import "@/components/login-form/style.css";
export default function LoginForm() {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-box">
          <div className="form-title">
            <h1>Login</h1>
          </div>
          <div className="field-inputs">
            <div className="field-label">
              <label htmlFor="username">Usuário</label>
              <input type="text" id="username" />
            </div>
            <div className="field-label">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">login</button>
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
