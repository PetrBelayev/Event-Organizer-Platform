import Header from "../components/header";
import Card from "../components/card";
import "../styles/cardstyles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardProps, fetchCards } from "../api/get-cards";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const MainPage = () => {
  const [cardData, setCardData] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchingCards = async () => {
      try {
        if (localStorage.getItem("token") != null) {
          const parameter = localStorage.getItem("token") || "";
          const response = await fetchCards(parameter);
          setCardData(response);
        } else {
          throw error;
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchingCards();
  }, []);

  return (
    <>
      <Header />
      <div className="card-list">
        {cardData.map((event) => (
          <Link to={`/current-event/${event.id}`} key={event.id}>
            <Card
              key={event.id}
              id={event.id}
              title={event.title}
              imgUrl={event.imgUrl}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MainPage;
