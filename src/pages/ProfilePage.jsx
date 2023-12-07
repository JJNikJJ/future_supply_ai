import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import { useUser } from "../context/UserContext";
import profileData from "../mock/users.json";

const ProfilePage = () => {
  const { user } = useUser();

  // Проверяем, есть ли пользователь, прежде чем обращаться к его свойствам
  if (!user) {
    // Можно отобразить сообщение о том, что пользователь не авторизован
    return <div>Пользователь не авторизован</div>;
  }

  return (
    <div className="base_profile">
      {/* Передаем ID пользователя в Headers */}
      <Headers name={"Профиль"} />

      <div className="page_body">
        <div className="info">
          <div className="AuthorInfo">Имя</div>
          <div className="AuthorInfoBase">{user.firstName}</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Фамилия</div>
          <div className="AuthorInfoBase">{user.lastName}</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Телефон</div>
          <div className="AuthorInfoBase">{user.phone}</div>
        </div>
        <div className="info">
          <div className="AuthorInfo">Почта</div>
          <div className="AuthorInfoBase">{user.email}</div>
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
