import { useState, useEffect } from "react";
import axios from "axios";

export const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch current weather data
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_Weather_Forecast_API_KEY}&units=metric`
        );
        setWeatherData(response.data);

        // Fetch 5-day forecast data
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_Weather_Forecast_API_KEY}&units=metric`
        );
        setForecastData(forecastResponse.data.list);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  return { weatherData, forecastData, loading, error };
};
