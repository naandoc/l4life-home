import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import "@/components/my-apartments-header/style.css";

const MyApartmentsHeader = () => {
  return (
    <div className="container-apartments">
      <nav className="menu-apartments">
        <Link href="/" className="link-img-logo">
          <div>
            <Image
              src={ImgLogo}
              alt="Logo F4life"
              className="img-logo"
              width={100}
              height={100}
            />
          </div>
        </Link>
        <ul>
          <li>
            <a href="/" className="main-menu-a">
              Voltar
            </a>
          </li>
          <li>
            <a href="#quem-somos" className="main-menu-a">
              Adicionar apartamentos
            </a>
          </li>
          <li>
            <Link href="/my-apartments/remove" className="main-menu-a">
              Remover apartamentos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MyApartmentsHeader;
