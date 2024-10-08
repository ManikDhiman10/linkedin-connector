import { defineContentScript } from 'wxt/sandbox';

// Function to inject the floating button into the LinkedIn page
const injectButton = () => {
  //button element
  const button = document.createElement('button');
  button.textContent = 'Connect with All';
  button.style.position = 'fixed';
  button.style.bottom = '20px'; 
  button.style.right = '20px';  
  button.style.zIndex = '1000';  
  button.style.padding = '10px 15px';
  button.style.backgroundColor = '#0073b1'; // LinkedIn blue
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  // Append button to body
  document.body.appendChild(button);

  // click event listener
  button.addEventListener('click', connectWithAll);
};

// Function to automate the connection requests
const connectWithAll = async () => {
  console.log("Connecting with all visible profiles...");

  // Get all visible "Connect" buttons on the page using the class and aria-label
  const connectButtons = Array.from(
    document.querySelectorAll('button[aria-label^="Invite"][class*="yyosfla"]')
  );

  if (connectButtons.length === 0) {
    console.log("No connectable profiles found.");
    return;
  }

  for (const button of connectButtons) {
    (button as HTMLButtonElement).click(); // Trigger click on the button

    // Random delay 
    await new Promise(resolve => setTimeout(resolve, Math.random() * (3000 - 1000) + 1000)); // Random delay between 1-3 seconds
  }

  console.log("Connection requests sent!");
};

// Content script with a default export
export default defineContentScript({
  matches: ["https://www.linkedin.com/mynetwork/grow/*"],  // URLs the script should run on
  runAt: "document_end", 
  main: () => {
    console.log("LinkedIn Content Script is Running");
    injectButton(); // Call function to inject the button
  }
});
