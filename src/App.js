import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import RadioButton from './RadioButton';
import Calendar from './components/Calendar/Calendar';
import Checkbox from './components/Checkbox/Checkbox';


function App() {
  return (
    <div className="App">

      <Headers/>
      <Breadcrumb/>
      <DropdownMenu/>
      <Disclaimer/>
      <UCPButton className="mediumbutton" buttonText="Click Here"/>
     <RadioButton/>
       <Calendar/>  
       <Checkbox/>  

    </div>
  );
}
export default App;