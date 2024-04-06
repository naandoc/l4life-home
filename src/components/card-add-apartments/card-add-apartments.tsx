import Link from "next/link";
import "@/components/card-add-apartments/style.css";

interface HouseCartProps {
  address: string;
}

export default function CardAddApartments({ address }: HouseCartProps) {
  return (
    <div className="house-cart-container">
      <label htmlFor="select-main-image" className="main-image">
        <input type="radio" id="select-main-image" />
        <p>Escolher como imagem principal</p>
      </label>
      <div className="house-cart">
        <p className="inf">Remover</p>
      </div>
    </div>
  );
}
