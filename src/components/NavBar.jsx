import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaRegListAlt,
  FaRegFileAlt,
  FaRegComment,
  FaRegUser,
  FaPaperPlane,
  FaCar,
} from "react-icons/fa";
import "../components/style_component/style_NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/order" className="style_navlink">
            <FaRegListAlt />
            <span>Заказы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-order" className="style_navlink">
            <FaRegFileAlt />
            <span>Новый заказ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className="style_navlink">
            <FaRegComment />
            <span>Чат</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="style_navlink">
            <FaRegUser />
            <span>Профиль</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/send-order" className="style_navlink">
            <FaPaperPlane />
            <span>Отправка заказа</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/car" className="style_navlink">
            <FaCar />
            <span>Машины</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
