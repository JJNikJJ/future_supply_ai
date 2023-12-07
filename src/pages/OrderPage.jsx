import React from "react";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import Order_Address from "../components/Order_Address";
import ordersData from "../mock/orders.json";
import { useUser } from "../context/UserContext";
import "../Style_page/Style_OrderPage.scss";
const OrderPage = () => {
  const { user } = useUser();

  return (
    <div className="page_order">
      <Headers name={"Заказы"} />
      <div className="body_order">
        {ordersData.map((order) => (
          <Order_Address
            key={order.id}
            number={order.orderNumber}
            condition={order.condition}
            where_address={order.to.address}
            where_city={order.to.city}
            from_address={order.from.address}
            from_city={order.from.city}
          />
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default OrderPage;
