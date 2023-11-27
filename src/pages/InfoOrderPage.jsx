import "../Style_page/Style_InfoOrderPage.scss";
import Headers from "../components/Headers";
import NavBar from "../components/NavBar";
import React from "react";
import Info_order from "../components/Info_order";

const InfoOrderPage = () => {
  return (
    <div className="page_info">
      <Headers name={"Информация о заказе"} />
      <div className="body_info">
        <Info_order />
      </div>
      <NavBar />
    </div>
  );
};

export default InfoOrderPage;
