import React, {useState} from 'react';
import './StartClearingApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

function StartClearingApplicationPage() {
	//used to control whether or not the user can interact with any buttons
	const [userAcceptedPrivacyPolicy, setUserAcceptedPrivacyPolicy] = useState(false);

	function onUserAcceptedPrivacyPolicy() {
		setUserAcceptedPrivacyPolicy(true);
	}

	return (
		<div>
			<Headers/>
			<Container>
				<Disclaimer enableMethod={onUserAcceptedPrivacyPolicy} staff={global.userType}/>
				<EssentialApplicantInfo disabled={!userAcceptedPrivacyPolicy}/>
			</Container>
			<Footer/>
		</div>
	);
}
export default StartClearingApplicationPage;
