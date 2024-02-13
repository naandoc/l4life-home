import HouseCart from "../house-cart/house-cart";
import Subtitle from "../subtitle/subtitle";
import "./style.css";

export default function SectionHouseContainer() {
  return (
    <section className="container">
      <Subtitle title="Serviços disponíveis" />
      <div className="house-container">
        <HouseCart />
        <HouseCart />
        <HouseCart />
        <HouseCart />
        <HouseCart />
      </div>
    </section>
  );
}
