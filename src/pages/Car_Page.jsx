import "../Style_page/Style_Car_Page.scss";
import Headers from "../components/Headers";
import NavBar from "../components/NavBar";
import Order_Address from "../components/Order_Address";
import React from "react";

const Car_Page = () => {
  return (
    <div className="base_car">
      <Headers name="Машины" />
      <div className="body_send_order">
        <Order_Address
          number={"23564214"}
          condition={"В сборке"}
          where_address={"ш. Энтузиастов, 4"}
          where_city={"Москва"}
          from_address={"Малая Морская улица, 23 "}
          from_city={"Санкт-Петербург"}
        />
      </div>
      <NavBar />
    </div>
  );
};

export default Car_Page;
