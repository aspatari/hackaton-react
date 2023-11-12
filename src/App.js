// src/App.js
import axios from "axios";
import React, { useState } from "react";
import Map from "./Map";
const App = () => {
  const [responses, setResponses] = useState({});
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const handleButtonClick = () => {
    // Make a POST request to the specified URL
    axios
      .post(
        "https://orange-hackaton-5d9e11d28c53.herokuapp.com/predict",
        coordinates
      )
      .then((response) => {
        console.log("Prediction Result:", response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        // Handle errors
      });
  };
  const handleMapClick = ({ lat, lng }) => {
    setCoordinates({ lat, lng });
  };

  return (
    <div className="App">
      <h1>Click on the Map</h1>
      <Map onMapClick={handleMapClick} />
      <p>Latitude: {coordinates.lat}</p>
      <p>Longitude: {coordinates.lng}</p>
      <button onClick={handleButtonClick}>Submit Coordinates</button>
    </div>
  );
};

export default App;
