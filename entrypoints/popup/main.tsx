import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Create a floating button
const App = () => {
  const handleConnectAll = () => {
    const connectButtons = document.querySelectorAll('button');
    let delay = 1000; // 1 second delay between requests

    connectButtons.forEach((btn, index) => {
      if (btn.textContent === 'Connect') {
        setTimeout(() => {
          btn.click();
          console.log(`Clicked connect button #${index + 1}`);
        }, delay * index);
      }
    });
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <button onClick={handleConnectAll} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Connect with All
      </button>
    </div>
  );
};

// Render the floating button into LinkedIn's body
const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<App />, div);
