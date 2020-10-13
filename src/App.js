import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <div className="Dropdown">   
          <DropdownMenu></DropdownMenu>
        </div>        
      </header>
    </div>
  );
}

export default App;