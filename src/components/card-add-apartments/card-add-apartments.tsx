import "@/components/card-add-apartments/style.css";

interface CardAddApartmentsProps {
  urlImage: string;
}

export default function CardAddApartments({
  urlImage,
}: CardAddApartmentsProps) {
  return (
    <div
      className="house-card-container"
      style={{ backgroundImage: `url(${urlImage})` }}
    >
      <label htmlFor="select-main-image" className="main-image">
        <input type="radio" />
        <p>Escolher como imagem principal</p>
      </label>
      <div className="house-card">
        <p className="inf">Remover</p>
      </div>
    </div>
  );
}
