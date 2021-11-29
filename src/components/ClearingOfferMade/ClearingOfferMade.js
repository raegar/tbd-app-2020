import React from "react";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ClearingOfferMade() {
	return (
		<div>
			<Header/>
			<Container>
				<Row className="offer-made">
					<h1>Offer Note</h1>
					<p>Offers can only be made if applicant has acheived their qualifications and not if they are waiting 
								 for their grade to be published.</p>
					<p>They need to ring back once their grade has been confirmed.</p>
					<p>If applicant has declared a criminal conviction or applied with prior credit, 
							an offer cannot be made.</p>
					<p>	Inform applicant we will arrange a telephone interview.</p>
					<p>ALL verbal offers must be prefaced with the words...
							"On the basis of the information you have provided, I am pleased to offer you a place on ..."</p>
					<p> The applicant must then add UCP as their Clearing Choice via UCAS Track (ideally within 24 hours).</p>
					<p>If the applicant does not have a UCAS application and they are only wishing to apply to UCP, an 
						RPA form can be completed in place of UCAS - speak to Zoe Rumball</p> 

				</Row>
			</Container>
			<Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<br/>
						<UCPButton 
							to='/DegreeQualifications' 
							primary="True"
							className="mediumbutton"
							buttonText="Go Back">
						</UCPButton>
					</Col>
					<Col className="centered-buttons">
						<br/>
						<UCPButton 
							to='/ClearingOfferMadeSecondPage'
							primary="True"
							className="mediumbutton"
							buttonText="Confirm and Continue"
							href="/ClearingOfferMadeSecondPage">
						</UCPButton>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}

export default ClearingOfferMade;

   
