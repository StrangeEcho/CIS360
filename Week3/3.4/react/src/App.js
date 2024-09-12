import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the user input
  const [message, setMessage] = useState('');
  // State to store the displayed message
  const [displayMessage, setDisplayMessage] = useState('Hello World');

  // Function to handle input change
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    setDisplayMessage(message);
  };

  return (
    <div className="App">
      <h1>Message Display App</h1>
      <div>
        <label htmlFor="messageInput">Message to Display:</label>
        <input
          id="messageInput"
          type="text"
          value={message}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Display Message</button>
      </div>
      <h2>{displayMessage}</h2>
    </div>
  );
}

export default App;
