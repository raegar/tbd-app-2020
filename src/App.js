import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'

function App() {
  return (
    <div className="App">
      <Headers/>
      <DropdownMenu/>
      <Disclaimer/>
      <UCPButton className="largetealbutton" buttonText="Click Here"/>
    </div>
  );
}

export default App;