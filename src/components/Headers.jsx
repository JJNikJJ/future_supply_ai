import React from "react";
import logotipe from "../media/logotipe.png";
import "../components/style_component/style_Header.scss";
const Headers = ({ name, id }) => {
  return (
    <div className="page_header">
      <div className="title">{name}</div>
      <img className="Img_profile" src={logotipe} alt="Фото профиля" />
    </div>
  );
};

export default Headers;
