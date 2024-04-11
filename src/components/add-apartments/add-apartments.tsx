"use client";

import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import "@/components/add-apartments/style.css";
import Subtitle from "../subtitle/subtitle";
import CardAddApartments from "../card-add-apartments/card-add-apartments";

const AddApartments = () => {
  const [imgs, setImgs] = useState<string[]>([]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      Array.from(fileList).forEach((file) => {
        // verify if img exist
        const filesReader = new FileReader();
        filesReader.onload = (e) => {
          setImgs((prevImg) => [...prevImg, e.target?.result as string]);
        };
        filesReader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    const cardTarget = document.querySelectorAll(
      ".inf"
    ) as NodeListOf<HTMLDivElement>;

    cardTarget.forEach((card) => {
      if (card === target) {
        const cardSelect = card.parentElement?.parentElement as HTMLElement;
        if (cardSelect) cardSelect.remove();
      }
    });
  };

  return (
    <div className="add-image-apartments-container">
      <div className="field-add-image-apartments">
        <label htmlFor="">Selecionar imagens</label>
        <input
          onChange={handleChangeFile}
          type="file"
          accept="image/jpeg, image/png"
          multiple
        />
      </div>
      <div className="selected-images-container">
        <div className="selected-images">
          {imgs.length > 0 && <Subtitle title="Selecione as imagens" />}
          <div className="img-card-house-container">
            {imgs.map((img, index) => (
              <CardAddApartments
                removeImg={removeImage}
                key={index}
                urlImage={img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApartments;
