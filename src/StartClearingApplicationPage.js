import React, {useState} from 'react';
import './StartClearingApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container, Row, Col} from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CourseInfoPanel from './components/CourseInfoPanel/CourseInfoPanel';
import ProgressBar from "./components/ProgressBar/ProgressBar";

function StartClearingApplicationPage() {
	//used to control whether or not the user can interact with any buttons
	const [userAcceptedPrivacyPolicy, setUserAcceptedPrivacyPolicy] = useState(false);
	//progress bar
	const completionRate = [
		{bgcolor: "#005C6E", completed:15 },
	];

	function onUserAcceptedPrivacyPolicy() {
		setUserAcceptedPrivacyPolicy(true);
	}

	return (
		<div>
			<Header/>
			<Row>
				{completionRate.map((item, idx)=>(
					<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
				))}
			</Row>
			<Row>
				<Col md={3}>
					<CourseInfoPanel/>
				</Col>
				<Col>
					<Container>
						<Disclaimer enableMethod={onUserAcceptedPrivacyPolicy} staff={global.userType}/>
						<Row>
					
							<Col>
								<EssentialApplicantInfo disabled={!userAcceptedPrivacyPolicy}/>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
			<Footer/>
		</div>
	);
}
export default StartClearingApplicationPage;
