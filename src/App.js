import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'
import Login from './components/Login/Login';



function App() {
  return (
    <div className="App">
      <Headers/>
      <DropdownMenu/>
      <Disclaimer/>
      <UCPButton className="mediumbutton" buttonText="Click Here"/>
      <Login/>   
    </div>
  );
}
export default App;