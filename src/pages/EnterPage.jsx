import "../Style_page/Style_EnterPage.scss";
import logo from "../media/logotipe.png";
import arrow from "../media/arrow.png";
import { NavLink } from "react-router-dom";
const EnterPage = () => {
  return (
    <>
      <div className="EnterBase">
        <img className="Img_Logo" src={logo} alt="Логотип" />
        <div className="Text_head">Снабжение будущего</div>
        <div className="Text_subhead">Мы поставляем завтрашний успех!</div>
        <NavLink to="/registration">
          <button className="verifyButtonSubmit" type="submit">
            <div className="Text_in_Button">
              Зарегистрироваться
              <img src={arrow} className="img_button" alt="Стрела в кнопке" />
            </div>
          </button>
        </NavLink>
        <NavLink to="/profile">
          <button className="verifyButtonSubmit" type="submit">
            <div className="Text_in_Button">
              Войти
              <img src={arrow} className="img_button" alt="Стрела в кнопке" />
            </div>
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default EnterPage;
