// src/App.js
import React, { useState } from "react";
import Map from "./Map";

const App = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const handleMapClick = ({ lat, lng }) => {
    setCoordinates({ lat, lng });
  };

  return (
    <div className="App">
      <h1>Click on the Map</h1>
      <Map onMapClick={handleMapClick} />
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
    </div>
  );
};

export default App;
