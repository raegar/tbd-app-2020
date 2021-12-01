import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col , Row} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ClearingOfferMadeInterviewRPA() {
	return (
		<div>
			<Header/>
			<Container>
				<Row className="offer-made">
					<h1>Interview or RPA required</h1>
					<span className="form-center">
						<TextBox
							title="Please state reasons:"
							placeholder="Please state reasons:" 
						/>
					</span>
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
			<Footer/>
		</div>	
	);
}

export default ClearingOfferMadeInterviewRPA;