import React, {useState} from "react";
import "./LevelThreeQualifications.css";
import RadioButton1 from '../RadioButton/RadioButton1';
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
import {Row, Col, Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import UCPButton from '../Buttons/UCPButton';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

const l3QualificationsOptions = [
	{ label: "Yes", id: "qualificationYes", value: "yes" },
];

function LevelThreeQualifications() {
	const [value, setValue] = useState("");
	const [emptyInput, setClearInput] = useState(false);
	const [counter, setCounter] = useState(1);
	const [qualificationsInfo, setQualificationsInfo] = useState([{}]);

	const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";
  	const className1 = isMobile ? "l3-mobile-form-right" : "l3-form-right";

  	function handleChange(event) {
		console.log(event.target.value);

		if (event.target.value === 'no') {
			setCounter(6);
			setValue(event.target.value);
		} else {
			setClearInput(true);
			setCounter(counter + 1);
			saveSelectedData();
		}
	}

	function onL3CompChange(e) {
		console.log("L3CompChange");
		//as all IDs take the form of <section><id>, we strip the letter characters and
		//treat the remainder as the qualification ID.
		let componentID = parseInt(e.target.id.replace(/\D/g, ""));
		//replace everything except the numeric ID
		let componentName = e.target.id.replace(/\d/g, "");

		//copy old object
		let qualificationsInfoNew = qualificationsInfo;

		//modify it
		if (!qualificationsInfoNew[componentID - 1]) {
			//making sure the object for that ID exists
			qualificationsInfoNew[componentID - 1] = {[componentName]: e.target.value};
		} else {
			qualificationsInfoNew[componentID - 1][componentName] = e.target.value;
		}

		//and update state to match new object
		setQualificationsInfo(qualificationsInfoNew);
		console.log(qualificationsInfo);
	}

	function saveSelectedData() {
		let count = counter - 1;

		if (qualificationsInfo[count]) {
			global.ApplicationFormData.levelThreeQualifications.qual[count] = qualificationsInfo[count]["qualification"];
			global.ApplicationFormData.levelThreeQualifications.subject[count] = qualificationsInfo[count]["subject"];
			global.ApplicationFormData.levelThreeQualifications.grade[count] = qualificationsInfo[count]["grade"];
			global.ApplicationFormData.levelThreeQualifications.date[count] = qualificationsInfo[count]["year"];
		}

		console.log(global.ApplicationFormData);
	}

  	return (
		  <div>
			<Headers/>
  			<Container>
  				<div className={className2}>
  					<div className="form-background">
		
  						{counter < 6 ?
  							<div className={className1}>
  								<h3 className="form-title">Level 3 Qualifications</h3>
  								<L3Component id={counter} clearInput={emptyInput} onChange={onL3CompChange}/>
  								<br/>
  								<h5>Other L3 Qualifications</h5>
  								<RadioButton1
  									options={l3QualificationsOptions}
  									name="l3qualifications"
  									value={value}
  									onChange={handleChange}
  								/>
  							</div>
  							: <Redirect to={{pathname: "/DegreeQualifications"}}/>
						}
  					</div>
  					<Row id="buttonRow">
  						<Col className="centered-buttons">
  							<UCPButton 
							  	to='/LevelTwoQualifications'
  								primary="True"
  								className="mediumbutton"
  								buttonText="Go Back"
  							/>
  						</Col>
  						<Col className="centered-buttons">
  							<div id="confirmButton" onClick={saveSelectedData}>
  								<UCPButton
  									to="/DegreeQualifications"
  									primary="True"
  									className="mediumbutton"
  									buttonText="Confirm and Go"
  								/>
  							</div>
  						</Col>
  					</Row>
  				</div>
  			</Container>
			<Footer/>
		</div>
  	);
}

export default LevelThreeQualifications;
