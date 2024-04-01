import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import ContainerBackground from "../container-background/container-background";
import "@/components/my-apartments-header/style.css";

const MyApartmentsHeader = () => {
  return (
    <ContainerBackground>
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
              <a href="#form-contato" className="main-menu-a">
                Remover apartamentos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </ContainerBackground>
  );
};

export default MyApartmentsHeader;
