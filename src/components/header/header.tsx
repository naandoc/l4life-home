"use client";

import Image from "next/image";
import React, { useState } from "react";
import "@/components/header/style.css";
import ImgLogo from "../../../../imagens/logo-pequena.png";

function subMenuLogged() {
  console.log("Entrou (lá ele)");
}

export default function Header() {
  const [isLogged, setIsLogged] = useState(true);
  const user = "Nando";
  return (
    <header className="main-header">
      <a href="#" className="link-img-logo">
        <div>
          <Image
            src={ImgLogo}
            alt="Logo F4LIFE"
            className="img-logo"
            width={100}
            height={100}
          />
        </div>
      </a>
      <nav>
        <ul className="main-menu">
          <li>
            <a href="#" className="main-menu-a">
              Início
            </a>
          </li>
          <li>
            <a href="#nossas-ofertas" className="main-menu-a">
              Nossas ofertas
            </a>
          </li>
          <li>
            <a href="#quem-somos" className="main-menu-a">
              Quem Somos
            </a>
          </li>
          <li>
            <a href="#form-contato" className="main-menu-a">
              Fale conosco
            </a>
          </li>
          <li className="btn-login">
            {isLogged ? (
              <>
                <a href="" className="main-menu-a" onMouseEnter={subMenuLogged}>
                  {user}
                </a>
                <ul className="span-logout">
                  <li>
                    <a href="">Minha conta</a>
                  </li>
                  <li>
                    <a href="">Minhas casas</a>
                  </li>
                  <li>
                    <a href="">Sair</a>
                  </li>
                </ul>
              </>
            ) : (
              <a href="">Entrar</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
