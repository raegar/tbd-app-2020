import React from 'react';
import './App.css';
import SelectRole from './components/SelectRole/SelectRole';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartClearingApplicationPage from './StartClearingApplicationPage';
import LevelTwoQualifications from './components/LevelTwoQualifications/LevelTwoQualifications';
import LevelThreeQualifications from './components/LevelThreeQualifications/LevelThreeQualifications';
import ClearingOfferMade from './components/ClearingOfferMade/ClearingOfferMade';
import DegreeQualifications from './components/DegreeQualifications/DegreeQualifications';
import ClearingOfferMadeYesNoSelect from './components/ClearingOfferMade/ClearingOfferMadeYesNoSelect';
import ClearingOfferMadeReasonIfNo from './components/ClearingOfferMade/ClearingOfferMadeReasonIfNo';
import ClearingOfferMadeInterviewRPA from './components/ClearingOfferMade/ClearingOfferMadeInterviewRPA';
import ClearingOfferMadeBeforeCompleting from './components/ClearingOfferMade/ClearingOfferMadeBeforeCompleting';
import ClearingOfferMadeStudentEnd from './components/ClearingOfferMade/ClearingOfferMadeStudentEnd';
import AddressAndPriorsForm from './components/AddressAndPriorsForm/AddressAndPriorsForm';

import AdminLogin from './pagesAdmin/AdminLogIn/AdminLogIn';
import AdminDashboard from './pagesAdmin/AdminDashboard/AdminDashboard';
import AdminData from './pagesAdmin/AdminData/AdminData';
import AdminGraph from './pagesAdmin/AdminGraphs/AdminGraph';

const BaseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

function App() {
	/* const className1 = isMobile ? "mobile-App" : "App"; */
	return (
		<Router basename={BaseUrl}>
			<div className="App">
				<div className="main-app">
					<Switch>
						<Route path='/' exact component={SelectRole} />
						<Route path='/login' component={Login}/>
						<Route path='/NewApplicationPage' component={StartClearingApplicationPage}/>
						<Route path='/MoreInfo' component={AddressAndPriorsForm} />
						<Route path='/LevelTwoQualifications' component={LevelTwoQualifications}/>
						<Route path='/LevelThreeQualifications' component={LevelThreeQualifications}/>
						<Route path='/DegreeQualifications' component={DegreeQualifications} />
						<Route path='/ClearingOfferMade' component={ClearingOfferMade}/>
						<Route path='/ClearingOfferMadeSecondPage' component={ClearingOfferMadeYesNoSelect}/>
						<Route path='/ClearingOfferMadeThirdPage' component={ClearingOfferMadeReasonIfNo}/>
						<Route path='/ClearingOfferMadeFourthPage' component={ClearingOfferMadeInterviewRPA}/>
						<Route path='/ClearingOfferMadeFifthPage' component={ClearingOfferMadeBeforeCompleting}/>
						<Route path='/ClearingOfferMadeStudentEnd' component={ClearingOfferMadeStudentEnd}/>
					
						<Route path='/AdminLogin' component={AdminLogin}/>
						<Route path='/AdminDashboard' component={AdminDashboard}/>
						<Route path='/AdminData' component={AdminData}/>
						<Route path='/AdminGraph' component={AdminGraph}/>
					</Switch>
				</div>
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