import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import Login from './components/Login/Login';
import SelectRole from './components/SelectRole/SelectRole';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EssentialApplicationInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
function App() {
  return (
    <Router basename={baseUrl}>
    <div className="App">
      <Headers/>
        <Switch>
          <Route path='/' exact component={SelectRole} />
          <Route path='/login' component={Login}/>
          <Route path='/EssentialInfo' component={EssentialApplicationInfo}/>
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