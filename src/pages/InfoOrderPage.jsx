import "../Style_page/Style_InfoOrderPage.scss";
import Headers from "../components/Headers";
import NavBar from "../components/NavBar";
import React from "react";
import Info_order from "../components/Info_order";
import { useUser } from "../context/UserContext";
import MyMap from "../components/MyMap";

const InfoOrderPage = () => {
  const { user } = useUser();

  return (
    <div className="page_info">
      <Headers name={"Информация о заказе"} />
      <div className="body_info">
        <div className="map">
          <MyMap />
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default InfoOrderPage;
