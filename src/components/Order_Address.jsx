import "./style_component/style_order_address.scss";
import React from "react";
import imgWhere from "../media/img_where.png";
import imgFrom from "../media/img_from.png";
import { NavLink } from "react-router-dom";

const Order_Address = ({
  number,
  condition,
  where_address,
  where_city,
  from_address,
  from_city,
}) => {
  return (
    <NavLink to="/order/info">
      <div className="box_order">
        <div className="order_header">
          <div className="order_number">Заказ № </div>
          <div className="order_digits">{number}</div>
          <div className="condition"> {condition}</div>
        </div>

        <div className="order_where">
          <img className="Img_where" src={imgWhere} alt="Откуда " />
          <div className="where">
            <div className="base_address">{where_address}</div>
            <div className="base_city">{where_city}</div>
          </div>
        </div>
        <div className="order_from">
          <img className="Img_from" src={imgFrom} alt="Куда " />
          <div className="from">
            <div className="base_address">{from_address}</div>
            <div className="base_city">{from_city}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Order_Address;
