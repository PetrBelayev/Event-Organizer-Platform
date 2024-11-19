import React from "react";
import "../styles/cardstyles.css";
import { CardProps } from "../api/get-cards";
import defaultImg from "../images/img.png";
import { images } from "./images-array";

const Card: React.FC<CardProps> = ({
  title,
  img_url,
  time,
  location,
  description,
}) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={
          images.find((image) => image.id === Number(img_url))?.src ||
          defaultImg
        }
        alt={title}
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>
          <strong>Когда:</strong> {time || "Не указано"}
        </p>
        <p>
          <strong>Где:</strong> {location || "Не указано"}
        </p>
        <p>
          <strong>Описание:</strong> {description || "Описание отсутствует"}
        </p>
      </div>
    </div>
  );
};

export default Card;
