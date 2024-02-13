import Link from "next/link";
import "./style.css";

export default function HouseCart() {
  return (
    <Link href="/" className="house-cart">
      <div className="adress">
        <p>
          Av. Prefeito Omar Sabbag, 461 - Jardim Botânico, Curitiba - PR,
          80210-000
        </p>
      </div>
      <p className="inf">Ver mais</p>
    </Link>
  );
}
