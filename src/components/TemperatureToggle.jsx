import React from 'react';

const TemperatureToggle = ({ unit, toggleUnit }) => {
  return (
    <button onClick={toggleUnit} className="p-2 my-3 mx-32 text-white rounded bg-purple-600">
      Switch to {unit === 'C' ? 'F' : 'C'}
    </button>
  );
};

export default TemperatureToggle;
