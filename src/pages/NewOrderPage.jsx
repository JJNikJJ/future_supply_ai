import "../Style_page/Style_NewOrderPage.scss";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import React, { useState } from "react";

const NewOrderPage = () => {
  // Состояния для адресов и городов
  const [fromAddress, setFromAddress] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [toCity, setToCity] = useState("");

  // Состояние для выбранных материалов
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Обработчики изменения состояний
  const handleFromAddressChange = (e) => setFromAddress(e.target.value);
  const handleFromCityChange = (e) => setFromCity(e.target.value);
  const handleToAddressChange = (e) => setToAddress(e.target.value);
  const handleToCityChange = (e) => setToCity(e.target.value);

  // Пример материалов (вам нужно заменить это на свои материалы)
  const materials = ["Материал 1", "Материал 2", "Материал 3"];

  // Обработчик выбора материалов
  const handleMaterialSelect = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(
        selectedMaterials.filter((item) => item !== material),
      );
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  // Обработчик для кнопки "Заказать"
  const handleOrderSubmit = () => {
    // Ваш код для обработки заказа
    console.log("Заказ размещен:", {
      fromAddress,
      fromCity,
      toAddress,
      toCity,
      selectedMaterials,
    });
  };

  return (
    <div className="base_new_order">
      <Headers name={"Новый заказ"} />
      <div className="from-section">
        <h2>Откуда</h2>
        <input
          className="input_section"
          type="text"
          placeholder="Введите адрес"
          value={fromAddress}
          onChange={handleFromAddressChange}
        />
        <input
          className="input_section"
          type="text"
          placeholder="Введите город"
          value={fromCity}
          onChange={handleFromCityChange}
        />
      </div>

      <div className="to-section">
        <h2>Куда</h2>
        <input
          className="input_section"
          type="text"
          placeholder="Введите адрес"
          value={toAddress}
          onChange={handleToAddressChange}
        />
        <input
          className="input_section"
          type="text"
          placeholder="Введите город"
          value={toCity}
          onChange={handleToCityChange}
        />
      </div>

      <div className="materials-section">
        <h2>Выберите материалы</h2>
        {materials.map((material) => (
          <div
            key={material}
            className={`material-item ${
              selectedMaterials.includes(material) ? "selected" : ""
            }`}
            onClick={() => handleMaterialSelect(material)}
          >
            {material}
          </div>
        ))}
      </div>
      <button className="calculate-button" onClick={handleOrderSubmit}>
        Калькулятор стоимости
      </button>

      <button className="order-button" onClick={handleOrderSubmit}>
        Заказать
      </button>
      <NavBar />
    </div>
  );
};

export default NewOrderPage;
