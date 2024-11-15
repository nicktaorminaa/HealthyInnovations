import React, { useState } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa'; // Make sure to install react-icons using npm

function App() {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const staticSuggestions = [
    'Alternative to ice cream',
    'Alternative to rice crispies',
    'Alternative to chocolate cake',
    // More static suggestions...
  ];

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    // Delay hiding suggestions to allow click event on suggestions to be fired
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="App">
      <div className="branding">
        <h1 className="logo">Healthy Innovations</h1>
        <p className="tagline">Helping individuals find healthy alternatives to junk food</p>
      </div>
      <div className="search-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for healthy alternatives..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="search-input"
          />
        </div>
        {showSuggestions && (
          <div className="dynamic-recommendations">
            <ul>
              <li>Avocado Toast</li>
              <li>Kale Chips</li>
              <li>Quinoa Salad</li>
              {/* Additional dynamic suggestions */}
            </ul>
          </div>
        )}
        <ul className="static-suggestions">
          {staticSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
