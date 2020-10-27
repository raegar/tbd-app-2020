import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import UCPButton from './components/Buttons/UCPButton'
import Disclaimer from './components/Disclaimer/Disclaimer'
import DropdownMenu from './components/DropdownMenu/DropdownMenu'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import RadioButton from './RadioButton';
import Calendar from './components/Calendar/Calendar';
import Login  from './components/Login/Login'


function App() {
  return (
    <div className="App">
      <Headers/>
      <Login/>
    </div>
  );
}
export default App;