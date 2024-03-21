import React from "react";

const Weather = ({ weather }) => {
  return (
    <>
      {weather ? (
        <div className="list">
          {weather.map((value) => (
            <div className="day" key={value.dt}>
              <p>{value.dt_txt}</p>
              <p>{value.weather[0].main}</p>
              <p>{value.main.temp}°C</p>
              <p>{value.weather[0].description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`}
                alt="Weather icon"
              ></img>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Weather;
