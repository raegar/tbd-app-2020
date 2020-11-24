import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import SelectRole from './components/SelectRole/SelectRole';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewApplicationPage from './NewApplicationPage';
import LevelTwoQualifications from './components/LevelTwoQualifications/LevelTwoQualifications';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
function App() {
  return (
    <Router basename={baseUrl}>
    <div className="App">
      <Headers/>
        <Switch>
          <Route path='/' exact component={SelectRole} />
          <Route path='/login' component={Login}/>
          <Route path='/NewApplicationPage' component={NewApplicationPage}/>
          <Route path='/LevelTwoQualifications' component={LevelTwoQualifications}/>
        </Switch>
    </div>
    </Router>
  );
}
export default App;


/* To add new pages to the Routing add 
import the component as normal, then

<Route path='/NAME OF PAGE' component={NAMEOFCOMPONENT}/>

For information on how to link buttons - Look at the notes in UCPButton
*/