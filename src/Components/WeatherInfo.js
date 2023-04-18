import React, { memo, useMemo } from "react";
import datas from "../datas";

export const WeatherInfo = memo(({ weatherData }) => {
  const showDate = useMemo(() => {
    let now = new Date();
    let day = datas.days[now.getDay()];
    let month = datas.months[now.getMonth()];
    let year = now.getFullYear();
    let date = now.getDate();
    return `${day} ${date} ${month} ${year}`;
  }, [])

  return (
    <main>
      <section className="location">
        <div className="city">
          {weatherData.name}, {weatherData.sys.country}{" "}
        </div>
        <div className="date">{showDate}</div>
      </section>
      <div className="current">
        <div className="temp">
          {Math.floor(weatherData.main?.temp - 273.15)}
          <span>°c</span>
        </div>
        <div className="weather">{weatherData.weather[0].main}</div>
        <div className="hi-low">
          {Math.floor(weatherData.main.temp_min - 273.15)}°c /{" "}
          {Math.floor(weatherData.main.temp_max - 273.15)}°c
        </div>
      </div>
    </main>
  );
});
