import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";

function ClearingOfferMadeReasonIfNo() {
	return (
		<div>
			<Container className="form-container d-flex justify-content-center">
				<Row className="form-background">
					<h1 className="form-title content-center">Not Offered Details</h1>
					<Row>
						<br/>
						<TextBox 
							name="not_offered"
							title="38. Please state reasons"
							placeholder="Reasons for offer not being made"
							minLength={10}
							maxLength={100}
							size={35}
							id="not-offered"
							type="text"
						/>
					</Row>
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
							href="/ClearingOfferMadeFourthPage"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ClearingOfferMadeReasonIfNo;