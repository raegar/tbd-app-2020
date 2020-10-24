import React from 'react';
import logo from './logo.svg';
import './App.css';
import UCPButton from './UCPButton.js';
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
        <br></br>
        <UCPButton primary= "true" className="smallbutton" buttonText="Click Here"/>
        <br></br>
        <UCPButton primary= "true" className="mediumbutton" buttonText="Click Here"/>
        <br></br>
        <UCPButton primary= "true" className="largebutton" buttonText="Click Here"/>
        <br></br>
        <UCPButton primary= "true" className="extralargebutton" buttonText="Click Here"/>

<br></br>
      </header>
    </div>
  );
}

export default App;
