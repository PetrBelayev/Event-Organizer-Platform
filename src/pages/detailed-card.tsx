import Header from "../components/header";
import {useNavigate, useParams} from "react-router-dom";
import "../styles/сurrcardstyles.css"
import defaultImg from "../images/img.png";
import React from "react";
import bin from "../images/bin.svg"
import pen from "../images/pen.svg"


const DetailedCard = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteEvent = () => {
        navigate("/main-page")
    }

    const editEvent = () => {
        if (id) navigate("/edit-event/" + id.toString());
        else navigate("/main-page");
    }

    return (
        <>
            <Header/>
            <div className="curwrapper">
                <div className="curr-card-info">
                    <img
                        className="card-image"
                        src={defaultImg}
                        alt="Picture was here!"
                    />
                    <div className="card-content">
                        <h2 className="card-title">Event title! Wow!</h2>
                        <p><strong>Когда:</strong> 22.22.2024 18:30</p>
                        <p><strong>Где:</strong> Москва </p>
                        <p><strong>Описание:</strong> Описание отсутствует</p>
                    </div>

                    <div className="buttons">
                        <button className="bin" onClick={deleteEvent}><img src={bin}/>Delete</button>
                        <button className="pen" onClick={editEvent}><img src={pen}/>Edit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailedCard;