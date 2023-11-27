import "../Style_page/Style_ProfilePage.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Headers from "../components/Headers";

const ProfilePageRename = () => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurame(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="base_profile">
      <Headers name={"Профиль"} />
      <div className="page_body">
        <div className="info">
          <div className="AuthorInfo">Имя</div>
          <input
            className="AuthorInfoBase"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="info">
          <div className="AuthorInfo">Фамилия</div>
          <input
            className="AuthorInfoBase"
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div className="info">
          <div className="AuthorInfo">Телефон</div>
          <input
            className="AuthorInfoBase"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className="info">
          <div className="AuthorInfo">Почта</div>
          <input
            className="AuthorInfoBase"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="button">
        <NavLink to="/profile">
          <button className="verifyButtonSubmit1" type="submit">
            <div className="Text_in_Button">Сохранить</div>
          </button>
        </NavLink>
        <NavLink to="/profile">
          <button className="verifyButtonSubmit1" type="submit">
            <div className="Text_in_Button">Назад</div>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfilePageRename;
