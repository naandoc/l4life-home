"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImgLogo from "../../../../imagens/logo-pequena.png";
import "@/components/my-apartments-header/style.css";
import { usePathname } from "next/navigation";

const MyApartmentsHeader = () => {
  const pathname = usePathname();

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
          {pathname !== "/my-apartments" && (
            <li>
              <Link href="/my-apartments" className="main-menu-a">
                Voltar
              </Link>
            </li>
          )}

          <li>
            <Link href="/my-apartments/add" className="main-menu-a">
              Adicionar apartamentos
            </Link>
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
