import { useState } from "react";
import "./App.css";
import Searcher from "./components/Searcher";
import Weather from "./components/Weather";

function App() {
  const APIKEY = "6dc61d65eeb891030ddd31c8df9cda23";

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [cityName, setCityName] = useState("")
  console.log(weather);
  const searchPressed = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${APIKEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setWeather([...result.list]);
        setCityName(result.city.name)
      });
    setSearch("");
  };

  return (
    <>
      <div className="all">
        <div className="weather">
          {/* header */}
          <h1>Weather app</h1>
          {/* search */}
          <Searcher
            search={search}
            setSearch={setSearch}
            searchPressed={searchPressed}
          />
          {/* Weather */}
          <h2>{cityName}</h2>
          <Weather weather={weather} />
        </div>
      </div>
    </>
  );
}

export default App;
