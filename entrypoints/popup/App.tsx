import React, { useState } from 'react';
import './App.css';

// Function to handle connecting with all
const sendConnectionRequests = () => {
  // Query all "Connect" buttons
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
  
  // Set a delay of 1-3 seconds between requests
  let delay = 2000; // 2 seconds delay between requests

  connectButtons.forEach((button, index) => {
    setTimeout(() => {
      (button as HTMLButtonElement).click();
    }, delay * index); // Adding delay to avoid LinkedIn rate limits
  });
};

const FloatingButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    sendConnectionRequests();
  };

  return (
    <div className="floating-btn">
      <button onClick={handleClick}>
        {isClicked ? 'Connecting...' : 'Connect with All'}
      </button>
    </div>
  );
};

export default FloatingButton;
