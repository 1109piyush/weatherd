import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const location = useLocation().search.slice(10);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e1ea89455322f13cae6b7aa149908013 `)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIcon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div>
      <h1>Weather for {weatherData.name}</h1>
      <div>
        <img src={weatherIcon} alt={weatherData.weather[0].description} />
        <p>Temperature: {weatherData.main.temp}</p>
        <p>Humidity: {weatherData.main.humidity}</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherPage;
