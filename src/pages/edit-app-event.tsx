import Header from "../components/header";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/editaddstyles.css";
import React, { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { images } from "../components/images-array";
import { addCard, CardPostProps, editCard } from "../api/add-card";

const EditAdd = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [mistakes, setMistakes] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState(1);

  const save = async () => {
    try {
      let parameter;
      validation();
      if (localStorage.getItem("token") != null) {
        parameter = localStorage.getItem("token") || "";
      } else {
        throw error;
      }

      const data: CardPostProps = {
        title: title,
        imgUrl: selectedImage.toString(),
        time: date,
        location: location,
        description: description,
      };
      console.log(data.imgUrl);

      if (Number(id) === -1) {
        await addCard(parameter, data);
      } else {
        await editCard(Number(id).toString(), data);
      }
      navigate("/main-page");
    } catch (error) {
      setMistakes(true);
      setTimeout(() => {
        setMistakes(false);
      }, 3500);
    }
  };

  const validation = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Устанавливаем время на 00:00:00
    const inputDate = new Date(date);

    const isValidLanguage = (text: string) =>
      /^[\w\sа-яА-ЯёЁ.,:;!?'"()\-[\]{}<>@#$%^&*+=]+$/.test(text);

    if (
      !isValidLanguage(title) ||
      !isValidLanguage(location) ||
      !isValidLanguage(description)
    ) {
      throw error;
    }

    if (!date || inputDate.getTime() < today.getTime()) {
      throw error;
    }

    return true;
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="login-container">
          <h1>Редактировать/добавить событие</h1>
          <label>Название мероприятия</label>
          <input
            style={
              mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
            }
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Обновление состояния login
          />

          <div className="image-editor">
            <div>Выберите изображение</div>
            <div className="image-preview">
              {images.map((image) => (
                <label key={image.id} style={{ textAlign: "center" }}>
                  <img src={image.src} alt={image.alt} />
                  <input
                    className="radio"
                    type="radio"
                    name="image"
                    value={image.src}
                    checked={selectedImage === image.id}
                    onChange={() => setSelectedImage(image.id)}
                  />
                </label>
              ))}
            </div>
          </div>

          <label>Место</label>
          <input
            style={
              mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
            }
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Описание</label>
          <textarea
            maxLength={250}
            style={
              mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
            }
            value={description}
            className="textdescr"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Дата</label>
          <input
            style={
              mistakes ? { borderColor: "#A62800" } : { borderColor: "#FFFFFF" }
            }
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={save}>Сохранить</button>

          <h2
            className="error-log"
            style={mistakes ? { opacity: 100 } : { opacity: 0 }}
          >
            Дата и используемые символы должны быть корректными!
          </h2>
        </div>
      </div>
    </>
  );
};

export default EditAdd;
