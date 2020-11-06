import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';

import NewApplicationPage from './NewApplicationPage';

function App() {
  return (
    <div className="App">
      <Headers/>
      <NewApplicationPage/>
      
    </div>
  );
}
export default App;