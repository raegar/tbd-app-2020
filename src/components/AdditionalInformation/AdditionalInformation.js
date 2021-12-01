import React, {useState} from "react";
import RadioButton from "../RadioButton/RadioButton";
import "./AdditionalInformation.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
//import {isMobile} from 'react-device-detect';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProgressBar from "../ProgressBar/ProgressBar";
import TextBox from "../TextBox/TextBox";

function AdditionalInfo({ ...props}) {
	const [supportInput, setSupportInput] = useState("false");

	const [nationalityState, setNationalityState] = useState({
		value: "",
		anyChecked: false,
	});
	const [criminalConvState, setCriminalConvState] = useState({
		value: "",
		anyChecked: false,
	});
	const [supportState, setSupportState] = useState({
		value: "",
		anyChecked: false,
	});

	//const textboxClassName = isMobile ? "mobiletextbox" : "desktoptextbox";

	function anyNationalityChecked(e) {
		setNationalityState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function anyCriminalConvChecked(e) {
		setCriminalConvState({
			value: e.target.value,
			anyChecked: true,
		});	
	}

	function anySupportChecked(e) {
		setSupportState({
			value: e.target.value,
			anyChecked: true,
		});	
	}
	function handleClick(e) {
    	setSupportInput(e === 'yes');
	}

	const nationalityOptions = [
		{ label: "UK National", id: "UK", value: "UK", handleChange: anyNationalityChecked },
		{ label: "EU National", id: "EU", value: "EU", handleChange: anyNationalityChecked },
		{ label: "Other", id: "Other", value: "Other", handleChange: anyNationalityChecked },
	];
	const criminalOptions = [
		{ label: "Yes", id: "crimeYes", value: "yes", handleChange: anyCriminalConvChecked },
		{ label: "No", id: "crimeNo", value: "no", handleChange: anyCriminalConvChecked },
	];
	const supportOptions = [
		{ label: "Yes", id: "supportYes", value: "yes", handleChange: anySupportChecked },
		{ label: "No", id: "supportNo", value: "no", handleChange: anySupportChecked },
	];
	//progress bar
	const completionRate = [
		{bgcolor: "#005C6E", completed:45 },
	];

	function saveSelectedData() {
		global.ApplicationFormData.support = supportInput;

		// get Nationality
		if (nationalityState.anyChecked) {
			global.ApplicationFormData.Nationality = nationalityState.value;
		}

		// Criminal Conviction
		if (criminalConvState.anyChecked) {
			global.ApplicationFormData.Convictions = criminalConvState.value;
		}

		// Learning Support
		if (supportState.anyChecked) {
			global.ApplicationFormData.Support = supportState.value;
		}

		//
		console.log(global.ApplicationFormData);
	}

  	return (
		  <div>
			<Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}

  			<Container className="es-form-container">
  			<div className="es-form-background">
  				<h3 className="form-title">Additional information</h3>
  				<span className="ess-form-left">
				  <RadioButton
  						heading="Nationality"
  						options={nationalityOptions}
  						name="nationality"
  						onClick={anyNationalityChecked}
  					/>
  				</span>
  				<span className="ess-form-right">
  					<RadioButton
  						heading="Convictions"
  						options={criminalOptions}
  						name="criminal"
  						subtitle="Do you have any unspent criminal convictions?"
							onClick={anyCriminalConvChecked}
  					/>
  					<RadioButton
  						heading="Learning Support"
  						options={supportOptions}
  						name="support"
  						subtitle="Do you have any additional learning support needs or disabilities?"
							onClick={handleClick}
  					/>
						
						{
							(supportInput)
								? <TextBox 
									id="supportRequired" 
									title="Please enter name of disability" 
									name="supportRequired"
									rows="10"
									maxLength="224" 
									placeholder="disability"
									onChange={(e) => setSupportInput(e.target.value)}
								/>		
								: <span></span>
						}
  				</span>
  			</div>  
  		</Container>
		  <Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton to='/NextOfKin'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons" onClick={saveSelectedData}>
						<div id="confirmButton">
							<UCPButton
								to= '/Course'
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Go"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		  </div>
  	);
}

export default AdditionalInfo;