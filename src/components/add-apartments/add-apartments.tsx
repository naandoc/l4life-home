"use client";

import { ChangeEvent, useState } from "react";
import "@/components/add-apartments/style.css";
import Subtitle from "../subtitle/subtitle";
import CardAddApartments from "../card-add-apartments/card-add-apartments";

const AddApartments = () => {
  const [imgs, setImgs] = useState<string[]>([]);
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    console.log(fileList);

    if (fileList) {
      Array.from(fileList).forEach((file) => {
        const filesReader = new FileReader();
        filesReader.onload = (e) => {
          setImgs((prevImg) => [...prevImg, e.target?.result as string]);
        };
        filesReader.readAsDataURL(file);
      });
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
          <Subtitle title="Selecione as imagens" />
          <div className="img-card-house-container">
            <CardAddApartments address="4587fd fdp 555-74" />
            <CardAddApartments address="4587fd fdp 555-74" />
            <CardAddApartments address="4587fd fdp 555-74" />
            <CardAddApartments address="4587fd fdp 555-74" />
            <CardAddApartments address="4587fd fdp 555-74" />
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
