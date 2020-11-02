import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import Calendar from './components/Calendar/Calendar';
import Disclaimer from './components/Disclaimer/Disclaimer';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Calendar/>
      
    </div>
  );
}
export default App;