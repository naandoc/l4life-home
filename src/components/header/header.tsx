import Image from "next/image";
import React from "react";
import "@/components/header/style.css";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import Link from "next/link";

export default function Header() {
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
      <div className="menu-toggle">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <nav>
        <ul className="main-menu">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#nossas-ofertas">Nossas ofertas</a>
          </li>
          <li>
            <a href="#quem-somos">Quem Somos</a>
          </li>
          <li>
            <a href="#tipos-servicos">Alguns serviços</a>
          </li>
          <li>
            <a href="#form-contato">Fale conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
