import { useState } from "react";

const CityInput = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex items-center mb-2 justify-center">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
    </div>
  );
};

export default CityInput;
