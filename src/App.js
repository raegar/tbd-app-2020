import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import Login from './components/Login/Login';
import JumbotronComponent from './components/JumbotronComponent/JumbotronComponent';
function App() {
  return (
    <div className="App">
      <Headers/>
      <JumbotronComponent/> 
    </div>
  ); 
}
export default App;