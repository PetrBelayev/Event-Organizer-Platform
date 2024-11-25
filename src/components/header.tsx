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
          <div onClick={() => navigate("/about-us")}>About</div>
          <div onClick={() => navigate("/edit-event/-1")}>+Event</div>
          <div onClick={() => navigate("/main-page")}>All Events</div>
          <div onClick={clear}>LogOut</div>
        </div>
      </div>
    </>
  );
};

export default Header;
