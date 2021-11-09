import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col , Row} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";

function ClearingOfferMadeInterviewRPA() {
	return (
		<div>
			<Container className="form-container d-flex justify-content-center">
				<Row className="form-background">
					<h1 className="form-title content-center">Interview or RPA required</h1>
					<br/>
					<Row className="text">
						<h3>39. Please state reasons:</h3>
					</Row>
					<TextBox/>
				</Row>
			</Container>
			<Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<br/>
						<UCPButton 
							to='/ClearingOfferMadeSecondPage'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
							href="/ClearingOfferMadeSecondPage"
						/>
					</Col>
					<Col className="centered-buttons">
						<br/>
						<UCPButton 
							to='/ClearingOfferMadeFifthPage'
							primary="True"
							className="mediumbutton"
							buttonText="Confirm and Continue"
							href="/ClearingOfferMadeFifthPage"
						/>
					</Col>
				</Row>
			</Container>
		</div>	
	);
}

export default ClearingOfferMadeInterviewRPA;