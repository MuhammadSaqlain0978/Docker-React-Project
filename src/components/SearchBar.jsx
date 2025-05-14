import React from "react";

function SearchBar({ city, setCity, onSearch }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
}

export default SearchBar;
