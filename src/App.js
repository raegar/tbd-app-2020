import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import SelectRole from './components/SelectRole/SelectRole'



function App() {
  return (
    <div className="App">
      <Headers/>
      <SelectRole/>
    </div>
  );
}
export default App;

/* <Login/> should be called when the user selects the staff portal in the SelectRole Option */