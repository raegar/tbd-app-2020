import React, {useState} from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


function ClearingOfferMadeBeforeCompleting() {
	const [email, setEmail] = useState(global.ApplicationFormData.email);
	const [course, setCourse] = useState(global.ApplicationFormData.course);

	function downloadFile() {
    	let fileName = "studentDetails.json"; 

    	let saveData = (function () { 
    		let a = document.createElement("a"); 
    		document.body.appendChild(a); 
    		a.style = "display: none"; 
    		return function (fileName) { 
    			var json = JSON.stringify(global.ApplicationFormData), 
    				blob = new Blob([json], {type: "octet/stream"}), 
    				url = window.URL.createObjectURL(blob); 
    			a.href = url; 
    			a.download = fileName; 
    			a.click(); 
    			window.URL.revokeObjectURL(url); 
    		}; 
    	}()); 
    	saveData(fileName);
	}

	return ( 
		<Container>
			<h1>Before completing the offer....</h1>
			<p>Please state the following</p>
			<h3>40. Please confirm email offer will be send to</h3>
			<TextBox id="emailConfirm" placeholder={global.ApplicationFormData.email} value={email}/>
			<h3>41. Please enter course applied for</h3>
			<TextBox id="courseApplied" value={course}/>
			<Row>
				<Col>
					<br></br>
					<UCPButton to='/ClearingOfferMadeSecondPage'
						primary="True"
						className="mediumbutton"
						buttonText="Go Back"
						href="/ClearingOfferMadeSecondPage"
					/>
				</Col>

				<Col>
					<br></br>
					<div onClick={downloadFile}>
						<UCPButton to ='/'
							primary="True"
							className="mediumbutton"
							buttonText="Confirm and Continue"
							href="/"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ClearingOfferMadeBeforeCompleting;