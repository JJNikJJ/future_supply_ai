import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, updateUser } from "../context/UserContext";
import usersData from "../mock/users";
import "../Style_page/Style_LoginPage.scss";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, updateUser } = useUser();

  const handleLogin = () => {
    // Поиск пользователя в данных по номеру телефона
    const authenticatedUser = usersData.find(
      (u) => u.phone === phone && u.password === password,
    );

    if (authenticatedUser) {
      // Устанавливаем пользователя в контекст и переходим на страницу профиля
      updateUser(authenticatedUser);
      navigate("/profile");
    } else {
      // Обрабатываем неверные данные для входа
      alert("Неверный номер телефона или пароль");
    }
  };

  return (
    <div className="registration-enter-page">
      <h2>Вход</h2>
      <label htmlFor="phone">Введите номер телефона:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="password">Введите пароль:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Войти</button>
    </div>
  );
};
export default LoginPage;
