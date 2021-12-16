import React, {useRef} from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import axios from 'axios';
import { SubmitClearingFormEndpoint } from "../../global/Constants";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ClearingOfferMadeBeforeCompleting() {
	const email = useRef(global.ApplicationFormData.email);
	const course = useRef(global.ApplicationFormData.course);

	function sendClearingForm() {
		//I don't like that this is a copy of ClearingOfferMadeStudentEnd but don't have the time to fix it.
    	axios.post(SubmitClearingFormEndpoint, { 
			clearingFormData: global.ApplicationFormData
		}).then((response) => {
			//do whatever if it succeeds
		}).catch((err) => {
			console.log(err);

			//fallback on downloading file if failed
			const fileName = "studentDetails.json"; 
			let saveData = (function () { 
				let a = document.createElement("a"); 
				document.body.appendChild(a); 
				a.style = "display: none"; 
				return function (fileName) { 
					let json = JSON.stringify(global.ApplicationFormData), 
						blob = new Blob([json], {type: "octet/stream"}), 
						url = window.URL.createObjectURL(blob); 
					a.href = url; 
					a.download = fileName; 
					a.click(); 
					window.URL.revokeObjectURL(url); 
				}; 
			}()); 
			saveData(fileName);
		});
	}

	return ( 
		<div>
			<Header/>
			<Container >
				<Row className="offer-made">
					<h1>Before completing the offer....</h1>
					<h3>40. Please confirm email offer will be send to</h3>
					<TextBox id="emailConfirm" placeholder={global.ApplicationFormData.email} value={email.current}/>
					<h3>41. Please enter course applied for</h3>
					<TextBox id="courseApplied" value={course.current}/>
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
						<div onClick={sendClearingForm}>
							<UCPButton 
								to='/'
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Continue"
								href="/"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}

export default ClearingOfferMadeBeforeCompleting;