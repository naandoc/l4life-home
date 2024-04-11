import Link from "next/link";
import "./style.css";

interface HouseCartProps {
  address: string;
}

export default function HouseCart({ address }: HouseCartProps) {
  return (
    <div className="house-card-container">
      <Link href="/correios" target="_blank" className="address">
        <p>{address}</p>
      </Link>
      <Link href="/" className="house-card">
        <p className="inf">Ver mais</p>
      </Link>
    </div>
  );
}
