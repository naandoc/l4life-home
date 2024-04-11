import HouseCart from "../house-card/house-card";
import Subtitle from "../subtitle/subtitle";
import "./style.css";

export default function SectionHouseContainer() {
  return (
    <section className="container">
      <Subtitle title="Casas disponíveis" />
      <div className="house-container">
        <HouseCart address="ggrdgrd grdbdrbd 4564-1gd" />
        <HouseCart address="ggrdgrd grdbdrbd 4564-1gd" />
        <HouseCart address="ggrdgrd grdbdrbd 4564-1gd" />
        <HouseCart address="ggrdgrd grdbdrbd 4564-1gd" />
        <HouseCart address="ggrdgrd grdbdrbd 4564-1gd" />
      </div>
    </section>
  );
}
