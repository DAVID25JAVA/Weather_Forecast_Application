import { useState } from "react";
import CityInput from "./components/CityInput";
import TemperatureToggle from "./components/TemperatureToggle";
import { useWeather } from "./components/CustomHook/useWeather";
import CurrentWeather from "./components/CurrentWeather";
import Forcast from "./components/Forcast";
import BeatLoader from 'react-spinners/BeatLoader';

function App() {
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('C');
  const { weatherData, forecastData, loading, error } = useWeather(city);

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };

  const convertTemperature = (temp) => {
    return unit === 'C' ? Math.round(temp) : Math.round(temp * 9/5 + 32);
  };

  return (
    <div className="w-96 shadow-emerald-500 mx-auto p-4 bg-slate-200 my-3 rounded">
      <h1 className="text-3xl mb-4 text-center">Weather Forecast</h1>
      <CityInput onSearch={setCity} />
      <TemperatureToggle unit={unit} toggleUnit={toggleUnit} />
      {loading && <p><BeatLoader className="text-center py-5" /></p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {forecastData.slice(0, 5).map((item, index) => (
              <Forcast
                key={index}
                day={new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                high={convertTemperature(item.main.temp_max)}
                low={convertTemperature(item.main.temp_min)}
                icon={item.weather[0].icon}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
