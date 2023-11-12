// src/Map.js
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef } from "react";

const Map = ({ onMapClick }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapRef.current).setView([47.4116, 28.3699], 8); // Adjust zoom level as needed

    // Add a tile layer (you can use your preferred tile layer)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Add a click event listener to the map
    const handleClick = (event) => {
      const { lat, lng } = event.latlng;
      onMapClick({ lat, lng });
    };

    map.on("click", handleClick);

    // Cleanup function to remove the click event listener and destroy the map
    return () => {
      map.off("click", handleClick);
      map.remove();
    };
  }, [onMapClick]);

  return <div ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
