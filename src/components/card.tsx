import React from "react";
import "../styles/cardstyles.css";
import { CardProps } from "../api/get-cards";
import defaultImg from "../images/img.png";
import { images } from "./images-array";

const Card: React.FC<CardProps> = ({
  id,
  description,
  location,
  title,
  imgUrl,
  time,
}) => {
  return (
    <div className="card" id={id.toString()} key={id.toString()}>
      <img
        className="card-image"
        src={
          images.find((image) => image.id === Number(imgUrl))?.src || defaultImg
        }
        alt={title}
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>
          <strong>Когда:</strong> {time || "Miss"}
        </p>
        <p>
          <strong>Где:</strong> {location || "Miss"}
        </p>
        <p>
          <strong>Описание:</strong> {description || "Miss"}
        </p>
      </div>
    </div>
  );
};

export default Card;
