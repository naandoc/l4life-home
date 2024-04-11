"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "@/components/add-apartments/style.css";
import Subtitle from "../subtitle/subtitle";
import CardAddApartments from "../card-add-apartments/card-add-apartments";

const AddApartments = () => {
  const [imgs, setImgs] = useState<string[]>([]);

  useEffect(() => {
    console.log(imgs);
  }, [imgs]);

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
    console.log(imgs);
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
              <CardAddApartments key={index} urlImage={img} />
            ))}
          </div>
        </div>

        {/* {imgs.map((img) => (
          <img key={img} src={img} />
        ))} */}
      </div>
    </div>
  );
};

export default AddApartments;
