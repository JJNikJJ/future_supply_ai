import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Headers from "../components/Headers";
import materialsData from "../mock/materials.json";
import "../Style_page/Style_NewOrderPage.scss";
import { useUser } from "../context/UserContext";

const NewOrderPage = () => {
  const { user } = useUser();

  const [fromAddress, setFromAddress] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [toCity, setToCity] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [tons, setTons] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const orderButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Если клик был сделан вне кнопки заказа, то сбрасываем выбор материала
      if (
        orderButtonRef.current &&
        !orderButtonRef.current.contains(event.target)
      ) {
        setSelectedMaterial(null);
      }
    };

    // Добавляем обработчик клика при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFromAddressChange = (e) => setFromAddress(e.target.value);
  const handleFromCityChange = (e) => setFromCity(e.target.value);
  const handleToAddressChange = (e) => setToAddress(e.target.value);
  const handleToCityChange = (e) => setToCity(e.target.value);

  const handleMaterialSelect = (e) => {
    const materialId = parseInt(e.target.value, 10);
    setSelectedMaterial(
      materialsData.find((material) => material.id === materialId),
    );
  };

  const handleTonsChange = (e) => {
    const selectedTons = parseInt(e.target.value, 10);
    setTons(selectedTons);

    if (selectedMaterial) {
      const shippingPercentage = selectedTons / 15;
      const baseShippingCost = 153000;
      const calculatedShippingCost =
        baseShippingCost * shippingPercentage +
        selectedMaterial.pricePerTon * selectedTons;
      setShippingCost(calculatedShippingCost);
    }
  };

  const handleOrderSubmit = () => {
    console.log("Заказ размещен:", {
      fromAddress,
      fromCity,
      toAddress,
      toCity,
      selectedMaterial,
      tons,
      shippingCost,
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
          placeholder="Введите город"
          value={fromCity}
          onChange={handleFromCityChange}
        />
        <input
          className="input_section"
          type="text"
          placeholder="Введите адрес"
          value={fromAddress}
          onChange={handleFromAddressChange}
        />
      </div>

      <div className="to-section">
        <h2>Куда</h2>
        <input
          className="input_section"
          type="text"
          placeholder="Введите город"
          value={toCity}
          onChange={handleToCityChange}
        />
        <input
          className="input_section"
          type="text"
          placeholder="Введите адрес"
          value={toAddress}
          onChange={handleToAddressChange}
        />
      </div>

      <div className="materials-section">
        <h2>Выберите материал</h2>
        <select
          value={selectedMaterial ? selectedMaterial.id : ""}
          onChange={handleMaterialSelect}
          className="material-dropdown"
        >
          <option value="" disabled>
            Выберите материал
          </option>
          {materialsData.map((material) => (
            <option key={material.id} value={material.id}>
              {`${material.code} - ${material.name}`}
            </option>
          ))}
        </select>
      </div>

      {selectedMaterial && (
        <div className="tons-section">
          <h2>Выберите количество тонн</h2>
          <input
            type="range"
            min="0"
            max="15"
            value={tons}
            onChange={handleTonsChange}
            className="tons-input"
          />
          <span className="tons-value">{tons} тонн</span>
        </div>
      )}

      <div
        className="calculate-button"
        onClick={handleOrderSubmit}
        role="button"
        tabIndex="0"
        style={{ cursor: "pointer" }}
        disabled={!selectedMaterial}
      >
        Стоимость перевозки: {shippingCost} руб.
      </div>

      <button
        className="order-button"
        onClick={handleOrderSubmit}
        disabled={!selectedMaterial}
        ref={orderButtonRef}
      >
        Заказать
      </button>
      <NavBar />
    </div>
  );
};

export default NewOrderPage;
