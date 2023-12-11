import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('Guest');
  const [tokenBalance, setTokenBalance] = useState(0);
  const [wasteAmount, setWasteAmount] = useState('');
  const [generatedToken, setGeneratedToken] = useState('');
  const [error, setError] = useState('');

  const generateTokens = () => {
    try {
      const token = parseFloat(wasteAmount) || 0;
      setGeneratedToken(token);
      setTokenBalance(tokenBalance + token);
      setWasteAmount('');
      setError('');
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    setError(`An error occurred: ${err.message}`);
  };

  return (
    <div className="App">
      <header>
        <nav className="horizontal-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/token-generation">Token Generation</a></li>
            <li><a href="/token-redemption">Token Redemption</a></li>
            <li><a href="/waste-reporting">Waste Reporting</a></li>
          </ul>
        </nav>
      </header>
      <header>
        <h1>Token Generation</h1>
      </header>
      <main>
        <section className="user-section">
          <h2>Welcome, <span id="user-name">{userName}</span>!</h2>
          <p>Your Token Balance: <span id="token-balance">{tokenBalance}</span> tokens</p>
        </section>
        <section className="generate-token-section">
          <h2>Generate Token</h2>
          <form>
            <label htmlFor="waste-amount">Enter Waste Amount:</label>
            <input
              type="number"
              id="waste-amount"
              name="waste-amount"
              value={wasteAmount}
              onChange={(e) => setWasteAmount(e.target.value)}
              required
            />
            <button type="button" onClick={generateTokens}>Generate Tokens</button>
          </form>
          {error && <div className="error-message">{error}</div>}
          <div id="token-result">
            <p>Your generated token: <span id="generated-token">{generatedToken}</span></p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Waste Collection Platform</p>
      </footer>
    </div>
  );
};

export default App;
