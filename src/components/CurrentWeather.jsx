import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="bg-pink-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl">{data.name}</h2>
      <p className="text-2xl">{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
      <img className='h-14' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt={data.weather[0].description} />
    </div>
  );
};

export default CurrentWeather;
