import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'

function App() {
  return (
    <div className="App">

      <Headers/>
      <Disclaimer/>
      <UCPButton primary="true" className="largetealbutton" buttonText="Click Here"/>
    </div>
  );
}

export default App;