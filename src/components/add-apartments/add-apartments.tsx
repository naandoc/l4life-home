"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "@/components/add-apartments/style.css";
import Subtitle from "../subtitle/subtitle";
import CardAddApartments from "../card-add-apartments/card-add-apartments";
import BtnForm from "../btn-form/btn-form";

const AddApartments = () => {
  const [imgs, setImgs] = useState<{ id: string; url: string }[]>([]);

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      Array.from(fileList).forEach((file) => {
        // verify if img exist
        const filesReader = new FileReader();
        filesReader.onload = (e) => {
          const id = uuid();
          setImgs((prevImg) => [
            ...prevImg,
            { id, url: e.target?.result as string },
          ]);
        };
        filesReader.readAsDataURL(file);
      });
      e.target.value = "";
    }
  };

  const removeImage = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("inf")) {
      setImgs((prevImgs) => prevImgs.filter((img) => img.id !== id));
    }
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
            {imgs.map(({ id, url }) => (
              <CardAddApartments
                removeImg={(e) => removeImage(e, id)}
                key={id}
                urlImage={url}
              />
            ))}
          </div>
        </div>
        {imgs.length > 0 && (
          <div className="div-btn-add-apartments">
            <BtnForm btnName="Adicionar apartamentos" isLoading={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddApartments;
