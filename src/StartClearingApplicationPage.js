import React, {useState} from 'react';
import './StartClearingApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function StartClearingApplicationPage() {
	//used to control whether or not the user can interact with any buttons
	const [userAcceptedPrivacyPolicy, setUserAcceptedPrivacyPolicy] = useState(false);

	function onUserAcceptedPrivacyPolicy() {
		setUserAcceptedPrivacyPolicy(true);
	}

	return (
		<div>
			<Header/>
			<Container>
				<Disclaimer enableMethod={onUserAcceptedPrivacyPolicy} staff={global.userType}/>
				<EssentialApplicantInfo disabled={!userAcceptedPrivacyPolicy}/>
			</Container>
			<Footer/>
		</div>
	);
}
export default StartClearingApplicationPage;
