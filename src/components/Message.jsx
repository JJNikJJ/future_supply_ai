// Message.jsx

import React from "react";
import "../Style_page/Style_ChatLogist.scss";

const Message = ({ text, userId }) => {
  return (
    <div className={`message ${userId === 1 ? "user-1" : "user-2"}`}>
      {text}
    </div>
  );
};

export default Message;
