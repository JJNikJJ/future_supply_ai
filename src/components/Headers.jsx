import "./style_component/style_Header.scss";
import profile from "../media/profile.png";

const Headers = ({ name }) => {
  return (
    <div className="page_header">
      <div className="title">{name}</div>
      <img className="Img_profile" src={profile} alt="Фото профиля" />
    </div>
  );
};

export default Headers;
