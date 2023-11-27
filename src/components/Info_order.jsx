import "./style_component/style_Info_order.scss";
import imgWhere from "../media/img_where.png";
import imgFrom from "../media/img_from.png";
import React from "react";
import MyMap from "./MyMap";
const Info_order = (props) => {
  return (
    <div className="info_page">
      <div className="map">
        <MyMap />
      </div>

      <div className="box_order">
        <div className="order_header">
          <div className="order_number">Заказ № {props.number}</div>
          <div className="order_digits">{props.number}</div>
          <div className="condition"> {props.condition}</div>
        </div>

        <div className="order_where">
          <img className="Img_where" src={imgWhere} alt="Откуда " />
          <div className="where">
            <div className="base_address">{props.where_address}</div>
            <div className="base_city">{props.where_city}</div>
          </div>
        </div>
        <div className="order_from">
          <img className="Img_from" src={imgFrom} alt="Куда " />
          <div className="from">
            <div className="base_address">{props.from_address}</div>
            <div className="base_city">{props.from_city}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info_order;
