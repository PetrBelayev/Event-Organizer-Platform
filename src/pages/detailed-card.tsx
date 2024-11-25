import Header from "../components/header";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/сurrcardstyles.css";
import React, { useEffect, useState } from "react";
import bin from "../images/bin.svg";
import pen from "../images/pen.svg";
import { deleteCard } from "../api/delete-card";
import { CardProps, fetchCard } from "../api/get-cards";
import { images } from "../components/images-array";
import defaultImg from "../images/img.png";

const DetailedCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState<CardProps | null>(null);

  const deleteEvent = async () => {
    try {
      await deleteCard(Number(id));
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/main-page");
    }
  };

  const editEvent = () => {
    if (id) navigate("/edit-event/" + id.toString());
    else navigate("/main-page");
  };

  useEffect(() => {
    const fetchCardInfo = async () => {
      try {
        const fetchedCard = await fetchCard(Number(id));
        setCard(fetchedCard);
      } catch (error) {
        console.error("Ошибка загрузки данных карты:", error);
      }
    };

    fetchCardInfo();
  }, [id]);

  return (
    <>
      <Header />
      <div className="curwrapper">
        <div className="curr-card-info">
          <img
            className="card-image"
            src={
              images.find((image) => image.id === Number(card?.imgUrl))?.src ||
              defaultImg
            }
            alt="Event"
          />
          <div className="card-content">
            <h2 className="card-title">{card?.title || "Miss"}</h2>
            <p>
              <strong>Когда:</strong> {card?.time || "Miss"}
            </p>
            <p>
              <strong>Где:</strong> {card?.location || "Miss"}
            </p>
            <p>
              <strong>Описание:</strong> {card?.description || "Miss"}
            </p>
          </div>

          <div className="buttons">
            <button className="bin" onClick={deleteEvent}>
              <img src={bin} alt="Delete" />
              Delete
            </button>
            <button className="pen" onClick={editEvent}>
              <img src={pen} alt="Edit" />
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
