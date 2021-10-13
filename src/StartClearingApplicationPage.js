import React from 'react';
import './StartClearingApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function StartClearingApplicationPage() {
	return (
		<Container >       
			<Disclaimer staff={global.userType}/>
			<EssentialApplicantInfo/>
		</Container>
	);
}
export default StartClearingApplicationPage;