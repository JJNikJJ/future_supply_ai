import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import "../components/style_component/style_MyMap.scss";

const MyMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Инициализация карты
    const map = L.map("map", {
      center: [55.7558, 37.6176],
      zoom: 13,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map,
    );

    L.Control.geocoder().addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return <div id="map" />;
};

export default MyMap;
