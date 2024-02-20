"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import "@/components/header/style.css";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import Link from "next/link";
import { useAuth } from "@/context/CreateContext";
import { RxDropdownMenu } from "react-icons/rx";

export default function Header() {
  const { isLogged, setIsLogged } = useAuth();
  const [subMenu, setSubMenu] = useState(false);

  const user = "Nando";

  const handleMouseEnter = useCallback(() => {
    setSubMenu((prev) => !prev);
  }, [setSubMenu]);

  return (
    <header className="main-header">
      <a href="#" className="link-img-logo">
        <div>
          <Image
            src={ImgLogo}
            alt="Logo F4life"
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

          {/* login/logout logic */}
          <li className="btn-login">
            {isLogged ? (
              <div>
                <p
                  className="main-menu-a"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}
                >
                  {user}
                  <span>
                    <RxDropdownMenu />
                  </span>
                </p>
                <ul
                  // two classes (submenu-display-on and submenu-display-off) to handle the submenu display with visibility attribute
                  className={`submenu-logout ${
                    subMenu ? "submenu-display-on" : "submenu-display-off"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}
                >
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
              </div>
            ) : (
              <Link
                href={`${isLogged ? "" : "/login"}`}
                className="main-menu-a"
              >
                Entrar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
