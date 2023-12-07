import React, { useState } from "react";
import Message from "../components/Message";
import "../Style_page/Style_ChatLogist.scss";
import NavBar from "../components/NavBar";

const ChatLogist = () => {
  const [messages, setMessages] = useState([
    { text: "Привет! Чем я могу помочь?", userId: 1 },
    { text: "У меня возникли проблема с заказом, что мне сделать?", userId: 2 },
    { text: "Опишите, пожалуйста, вашу проблему.", userId: 1 },
    {
      text: "Я хочу узнать через сколько прибудет заказ номер 45463543",
      userId: 2,
    },
  ]);

  const sendMessage = (text, userId) => {
    setMessages([...messages, { text, userId }]);
  };

  return (
    <div className="chat-logist">
      <div className="chat-window">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} userId={message.userId} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Введите сообщение..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              sendMessage(e.target.value, 1);
              e.target.value = "";
            }
          }}
        />
      </div>
      <NavBar />
    </div>
  );
};

export default ChatLogist;
