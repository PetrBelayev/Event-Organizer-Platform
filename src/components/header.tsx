import { Link, useNavigate } from "react-router-dom";
import "../styles/headerstyles.css";
import React from "react";

const Header = () => {
  const navigate = useNavigate();

  const clear = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="header-container">
        <Link to="/main-page">
          <div className="logo-block">EVENT ORGANISER</div>
        </Link>

        <div className="list-links">
          <div onClick={() => navigate("/about-us")}>О сайте</div>
          <div onClick={() => navigate("/edit-event/-1")}>+Событие</div>
          <div onClick={() => navigate("/main-page")}>Все события</div>
          <div onClick={clear}>Выйти</div>
        </div>
      </div>
    </>
  );
};

export default Header;
