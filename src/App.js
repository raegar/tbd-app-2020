import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button2 from './UCPButton.js';
import Disclaimer from './Disclaimer.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Disclaimer></Disclaimer>
        <Button2></Button2>
<br></br>
      </header>
    </div>
  );
}

export default App;
