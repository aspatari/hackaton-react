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
      .post("https://orange-hackaton-5d9e11d28c53.herokuapp.com/predict", {
        lon: coordinates.lng,
        lat: coordinates.lat,
      })
      .then((response) => {
        console.log("Prediction Result:", response.data);
        setResponses(response.data.risk);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
        // Handle errors
      });
  };

  const handleMapClick = ({ lat, lng }) => {
    setCoordinates({ lat, lng });
  };

  const containerStyle = {
    display: 'flex', // Use flexbox to arrange items in a row
  };
  
  const subContainerStyle = {
    padding: '20px', // Add padding for spacing (optional)
    boxSizing: 'border-box', // Include padding in the total width
    border: '1px solid #ccc', // Add a border for visibility (optional)
  };
  
  const firstSubContainerStyle = {
    ...subContainerStyle,
    width: '60%', // 60% width for the first container
  };
  
  const secondSubContainerStyle = {
    ...subContainerStyle,
    width: '40%', // 40% width for the second container
  };
  
  return (
    <div className="App">
      <div style={containerStyle}>
        <div style={firstSubContainerStyle}>
          <h1>Click on the Map</h1>
          <Map onMapClick={handleMapClick} />
        </div>
        <div style={secondSubContainerStyle}>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
          <button onClick={handleButtonClick}>Submit Coordinates</button>
          {responses && (
            <>
              <p>300m {responses["300m"]}</p>
              <p>500m {responses["500m"]}</p>
              <p>1000m {responses["1000m"]}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
