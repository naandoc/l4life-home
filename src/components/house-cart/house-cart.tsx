import Link from "next/link";
import "./style.css";

interface HouseCartProps {
  address: string;
}

export default function HouseCart({ address }: HouseCartProps) {
  return (
    <div className="house-cart-container">
      <Link href="/correios" target="_blank" className="address">
        <p>{address}</p>
      </Link>
      <Link href="/" className="house-cart">
        <p className="inf">Ver mais</p>
      </Link>
    </div>
  );
}
