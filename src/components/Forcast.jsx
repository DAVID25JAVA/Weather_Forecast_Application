import React from 'react';

const Forcast = ({ day, high, low, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg">{day}</h3>
      <p>{high}°C / {low}°C</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather icon" />
    </div>
  );
};

export default Forcast;
