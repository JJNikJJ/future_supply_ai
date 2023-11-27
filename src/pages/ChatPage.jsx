import "../Style_page/Style_ChatPage.scss";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import React, { useState } from "react";

const ChatPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [question, setQuestion] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    console.log("Отправка формы:", { fullName, phoneNumber, question });
    // Сбросим значения после отправки формы
    setPhoneNumber("");
    setQuestion("");
  };

  return (
    <div className="base_chat">
      <Headers name={"Чат"} />
      <form onSubmit={handleSubmit}>
        <div>
          <div className="fullName">ФИО:</div>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div>
          <div className="phoneNumber">Номер телефона:</div>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <div>
          <div className="question">Ваш вопрос:</div>
          <textarea
            className="textarea_question"
            id="question"
            value={question}
            onChange={handleQuestionChange}
            required
          />
        </div>
        <button className="verifyButtonSubmit2" type="submit">
          <div className="Text_in_Button">Отправить</div>
        </button>
      </form>
      <NavBar />
    </div>
  );
};

export default ChatPage;
