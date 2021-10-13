import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


class ClearingOfferMadeBeforeCompleting extends React.Component {
    autoInputData = () => {
    	if(global.ApplicationFormData.email !== "") {
    		let email = document.getElementById("emailConfirm");
    		email.value = global.ApplicationFormData.email;
    	}

    	if (global.ApplicationFormData.selectedCourse !== "") {
    		let course = document.getElementById("courseApplied");
    		course.value = global.ApplicationFormData.email;
    	}
    }

    downloadFile = () => {
    	var fileName = "studentDetails.json"; 

    	var saveData = (function () { 
    		var a = document.createElement("a"); 
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

    render = () => {
    	return ( 
    		<Container>
    			<h1>Before completing the offer....</h1>
    			<p>Please state the following</p>
    			<h3>40. Please confirm email offer will be send to</h3>
    			<TextBox id="emailConfirm" placeholder={global.ApplicationFormData.email}/>
    			<h3>41. Please enter course applied for</h3>
    			<TextBox id="courseApplied"/>
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
    					<div onClick={this.downloadFile}>
    						<UCPButton to ='/'
    							primary="True"
    							className="mediumbutton"
    							buttonText="Confirm and Continue"
    							href="/"
    						/>
    					</div>
    				</Col>
    			</Row>
    			{this.autoInputData}
    		</Container>
    	);
    }
}

export default ClearingOfferMadeBeforeCompleting;