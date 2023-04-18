import React, { useState } from "react";
import apiRequests from "../Sevices/Axios/Configs";
import datas from "../datas";
import { WeatherInfo } from "./WeatherInfo";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Get data from api
  const getWeatherData = async (cityName) => {
    const res = await apiRequests.get("/data/2.5/weather", {
      params: {
        q: cityName,
        appid: "5a5b0940cfe0ad1c74b704be6f5ff95e",
      },
    });
    setWeatherData(res.data);
    setCity("");
  };

  // search input function
  const inputHandler = (event) => {
    if (event.key === "Enter") {
      getWeatherData(city);
    }
  };

  return (
    <div className="container">
      {/* List of Largest Cities of Iran */}
      <ul className="list">
        <p>List of Largest Cities of Iran</p>
        {datas.iranCities.map((cityName, index) => (
          <li key={index} onClick={() => getWeatherData(cityName)}>
            {cityName}
          </li>
        ))}
      </ul>

      {/* search section */}
      <div className={`app-wrap ${weatherData ? "padding" : ""}`}>
        <h3>Weather In Your City / Country</h3>
        <input
          type="text"
          autoComplete="off"
          className="search-box"
          placeholder="Search for a city..."
          value={city}
          onChange={(event) => setCity(event.target.value.trim())}
          onKeyUp={inputHandler}
        />

        {/* weather Info */}
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
  );
};
