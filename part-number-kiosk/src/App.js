import React, { useState } from 'react';
import './App.css';
import logo from '/Users/pruthvihosmani/Desktop/kiosk/KIOSK/part-number-kiosk/src/images/Bosch_Rexroth-Logo.png';

const partNumberDatabase = {
  "123": "Part A",
  "456": "Part B",
  "789": "Part C",
  "1234": "Part D",
  // Add more part numbers and references
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [matches, setMatches] = useState([]);

  const handleInputChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    setInputValue(keyword);
    const matchingParts = Object.entries(partNumberDatabase).filter(([partNumber]) =>
      partNumber.toLowerCase().startsWith(keyword)
    );
    setMatches(matchingParts);
  };

  const handleSubmit = () => {
    // Handle the submit button click here
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header">
        {/* ... */}
      </div>
      <div className="search-pane">
        <h1 className="title">FixtureFIND</h1>
        <p className="sub-title">
          Your Ultimate KIOSK for Streamlining Pump and Fixture Insights!
        </p>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setMatches([])}
            onBlur={() => setInputValue('')}
            placeholder="Enter pump number..."
            className="part-input"
          />
          <button className="submit-button" onClick={handleSubmit}>
            <i className="fas fa-arrow-right"></i> Submit
          </button>
        </div>
        {matches.length > 0 && inputValue.length > 0 && (
          <div className="suggestions">
            {matches.map(([partNumber, reference]) => (
              <div key={partNumber} className="suggestion">
                {partNumber}: {reference}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


