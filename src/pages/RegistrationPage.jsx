import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style_page/Style_RegistrationPage.scss";
import logo from "../media/logotipe.png";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="RegBase">
      <img className="Img_Logo" src={logo} alt="Логотип" />
      <div className="Enter">
        <div className="name">Введите имя:</div>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="Enter">
        <div className="email">Введите почту:</div>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="Enter">
        <div className="phoneNumber">Введите номер телефона:</div>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="Enter">
        <div className="password">Введите пароль:</div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="Enter">
        <div className="confirmPassword">Введите повторите пароль:</div>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <NavLink to="/profile">
        <button className="verifyButtonSubmit" type="submit">
          Зарегистрироваться
        </button>
      </NavLink>
    </div>
  );
};

export default RegistrationPage;
