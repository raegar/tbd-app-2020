import React from 'react';
import './App.css';
import Headers from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import SelectRole from './components/SelectRole/SelectRole';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewApplicationPage from './NewApplicationPage';
import LevelTwoQualifications from './components/LevelTwoQualifications/LevelTwoQualifications';
import LevelThreeQualifications from './components/LevelThreeQualifications/LevelThreeQualifications';
import ClearingOfferMade from './components/ClearingOfferMade/ClearingOfferMade';
import DegreeQualifications from './components/Degree Qualifications/DegreeQualifications';
import ClearingOfferMadeSecondPage from './components/ClearingOfferMade/ClearingOfferMadeSecondPage';
import ClearingOfferMadeThirdPage from './components/ClearingOfferMade/ClearingOfferMadeThirdPage';
import ClearingOfferMadeFourthPage from './components/ClearingOfferMade/ClearingOfferMadeFourthPage';
import ClearingOfferMadeFifthPage from './components/ClearingOfferMade/ClearingOfferMadeFifthPage';
import {isMobile} from 'react-device-detect';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function App() {
  const className1 = isMobile ? "mobile-App" : "App";
  return (
    <Router basename={baseUrl}>
    <div className={className1}>
      <Headers/>
        <Switch>
          <Route path='/' exact component={SelectRole} />
          <Route path='/login' component={Login}/>
          <Route path='/NewApplicationPage' component={NewApplicationPage}/>
          <Route path='/LevelTwoQualifications' component={LevelTwoQualifications}/>
          <Route path='/LevelThreeQualifications' component={LevelThreeQualifications}/>
          <Route path='/ClearingOfferMade' component={ClearingOfferMade}/>
          <Route path='/ClearingOfferSecondPage' component={ClearingOfferMadeSecondPage}/>
          <Route path='/ClearingOfferMadeThirdPage' component={ClearingOfferMadeThirdPage}/>
          <Route path='/ClearingOfferMadeFourthPage' component={ClearingOfferMadeFourthPage}/>
          <Route path='/ClearingOfferMadeFifthPage' component={ClearingOfferMadeFifthPage}/>
          <Route path='/DegreeQualifications' component={DegreeQualifications} />

        </Switch>
        <Footer/>
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