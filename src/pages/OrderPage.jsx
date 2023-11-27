import "../Style_page/Style_OrderPage.scss";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import React from "react";
import Order_Address from "../components/Order_Address";

const OrderPage = () => {
  return (
    <div className="page_order">
      <Headers name={"Заказы"} />
      <div className="body_order">
        <Order_Address
          number={"23564214"}
          condition={"В сборке"}
          where_address={"ш. Энтузиастов, 4"}
          where_city={"Москва"}
          from_address={"Малая Морская улица, 23 "}
          from_city={"Санкт-Петербург"}
        />
        <Order_Address
          number={"45678723"}
          condition={"В пути"}
          where_address={"Малая Морская улица, 23"}
          where_city={"Санкт-Петербург"}
          from_address={"ш. Энтузиастов, 4 "}
          from_city={"Москва"}
        />
        <Order_Address
          number={"12536567"}
          condition={"Ожидает"}
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

export default OrderPage;
