import React, { useEffect } from 'react';

const Home = () => {
  // Placeholder function for generateTokens
  const generateTokens = () => {
    // Add your logic for generating tokens here
    console.log('Tokens generated!');
  };

  // Retrieve the user's token balance from localStorage
  useEffect(() => {
    const userTokens = localStorage.getItem('userTokens');

    // Check if the userTokens variable is not null (user has generated tokens)
    if (userTokens !== null) {
      // Display the user's token balance on the page
      document.getElementById('token-balance').textContent = userTokens;
    } else {
      // Handle the case where the user hasn't generated tokens yet
      document.getElementById('token-balance').textContent = '0';
    }

    // Load the Google Maps API and initialize the map
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPDIUB0tRyZGQcKk41Jew_FsnBwGMGRqo'; // Replace YOUR_API_KEY with your actual API key
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  // Function to initialize the map
  const initializeMap = () => {
    // eslint-disable-next-line no-unused-vars
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  return (
    <div id="background-container">
      <section>
        <h2>Welcome</h2>
        <p>
          WasteToken is a platform for waste collection. You can find the nearest waste collection point to you, generate tokens for your waste, redeem your tokens for rewards, and report waste that has been illegally dumped. WasteToken is a new cryptocurrency that aims to help us reduce waste and create a more sustainable future. The token is designed to be used to incentivize people to reduce, reuse, and recycle. For example, businesses could offer discounts to customers who pay with WasteToken, or individuals could earn WasteToken for composting their food scraps or recycling their electronics.
        </p>
      </section>

      <section>
        <h2>Dear User, <span id="user-name">Guest</span>Auwal Yunusa</h2>
        <p>Your Token Balance: <span id="token-balance">0</span> tokens</p>
        <button onClick={generateTokens} className="green-oval-button">Generate Tokens</button>
      </section>

      <div id="map" style={{ height: '400px', width: '100%' }}></div>

      <p>
        WasteToken is still in its early stages, but it has the potential to make a real difference in the fight against waste. By using WasteToken, we can all help to create a cleaner, healthier planet for future generations.
      </p>
    </div>
  );
};

export default Home;
