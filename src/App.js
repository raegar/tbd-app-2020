import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'
import Login from './components/Login/Login';
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import RadioButton from './RadioButton';



function App() {
  return (
    <div className="App">
      <Headers/>
      <DropdownMenu/>
      <Disclaimer/>
      <UCPButton className="mediumbutton" buttonText="Click Here"/>
      <Breadcrumb/>
     <RadioButton/>
      <Login/>   
    </div>
  );
}
export default App;