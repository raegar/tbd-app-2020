import React, {useRef} from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { SubmitClearingFormEndpoint } from '../../global/Constants';

function ClearingOfferMadeStudentEnd() {
	const email = useRef(global.ApplicationFormData.email);

	function sendClearingForm() {
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
	const completionRate = [
		{bgcolor: "#005C6E", completed:100 },
	];
	return (
		<div>
			<Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}
			<Container className="form-container d-flex justify-content-center">
				<Row className="form-background">
					<h1 className="form-title">Thank you for using the form</h1>
					<h3>Please confirm email that your application will be sent to</h3>
					<span className="form-center">
						<TextBox 
							className="emailBox" 
							id="emailConfirm" 
							placeholder={global.ApplicationFormData.email} 
							value={email.current} 
						/>
						<p>Please press confirm to complete</p>
					</span>
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
							buttonText="Go Back"
							href="/DegreeQualifications"
						/>
					</Col>
					<Col className="centered-buttons">
						<br/>
						<div onClick={sendClearingForm}>
							<UCPButton 
								to ='/'
								primary="True"
								className="mediumbutton"
								buttonText="Confirm"
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

export default ClearingOfferMadeStudentEnd;