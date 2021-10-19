import React, {useState} from 'react';
import './StartClearingApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function StartClearingApplicationPage() {
	//used to control whether or not the user can interact with any buttons
	const [userAcceptedPrivacyPolicy, setUserAcceptedPrivacyPolicy] = useState(false);

	function onUserAcceptedPrivacyPolicy() {
		setUserAcceptedPrivacyPolicy(true);
	}

	return (
		<Container >       
			<Disclaimer enableMethod={onUserAcceptedPrivacyPolicy} staff={global.userType}/>
			<EssentialApplicantInfo disabled={!userAcceptedPrivacyPolicy}/>
		</Container>
	);
}
export default StartClearingApplicationPage;
