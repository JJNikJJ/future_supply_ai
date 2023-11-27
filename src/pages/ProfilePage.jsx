import "../Style_page/Style_ProfilePage.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";

const ProfilePage = () => {
  return (
    <div className="base_profile">
      <Headers name={"Профиль"} />
      <div className="page_body">
        <div className="info">
          <div className="AuthorInfo">Имя</div>
          <div className="AuthorInfoBase">Name</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Фамилия</div>
          <div className="AuthorInfoBase">Surname</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Телефон</div>
          <div className="AuthorInfoBase">Phone</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Почта</div>
          <div className="AuthorInfoBase">Email</div>
        </div>
      </div>
      <NavLink to="/rename">
        <button className="verifyButtonSubmit1" type="submit">
          Изменить
        </button>
      </NavLink>

      <NavBar />
    </div>
  );
};

export default ProfilePage;
