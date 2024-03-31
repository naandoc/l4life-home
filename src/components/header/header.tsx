"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import "@/components/header/style.css";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import Link from "next/link";
import { RxDropdownMenu } from "react-icons/rx";
import { getCookie, deleteCookie } from "@/utils/cookies";
import axios from "axios";

export default function Header() {
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCookie = async () => {
      const userCookie = await getCookie();

      if (!userCookie) {
        setLoading(false);
        return;
      } else {
        // get username through cookie user
        const users = await axios.get("/api/users");

        for (const userApi of users.data) {
          if (userCookie.value === userApi.username) {
            setIsLogged(true);
            setUserLogin(userApi.name);
            setLoading(false);
            return;
          }
        }
      }
    };

    fetchCookie();
  }, []);

  const handleMouseEnter = useCallback(() => {
    setSubMenu((prev) => !prev);
  }, [setSubMenu]);

  const logout = async () => {
    await deleteCookie();
    console.log("Cheguei aqui");
    location.reload();
  };

  return (
    !loading && (
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
                    {userLogin}
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
                      <Link href="/my-apartments">Meus apartamentos</Link>
                    </li>
                    <li>
                      <Link href="" onClick={logout}>
                        Sair
                      </Link>
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
    )
  );
}
