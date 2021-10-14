import React, { useState } from 'react';
import "./DegreeQualifications.css"; 
import {Row, Col, Container} from "react-bootstrap";
import RadioButton from '../RadioButton/RadioButton';
import TextBox from '../TextBox/TextBox';
import UCPButton from '../Buttons/UCPButton';

const PriorLevelFour = [
	{label: 'Yes', id: 'prior-yes', value: 'yes'},
	{label: 'No', id: 'prior-no', value: 'no'}
];

const ELQ = [
	{label: 'Yes', id: 'elq-yes', value: "yes"},
	{label: 'No', id: 'elq-no', value: "no"}
];

function DegreeQualifications() {
	const [levelFour, setLevelFour] = useState(false);
	const [nameGrade, setNameGrade] = useState("");
	const [recentSchool, setRecentSchool] = useState("");

	function handleClick(e) {
    	setLevelFour(e === 'yes');
	}

	function onUpdateNameGrade(e) {
		setNameGrade(e.target.value);
	}

	function onUpdateRecentSchool(e) {
		setRecentSchool(e.target.value);
	}

	function saveSelectedData() {
		//TODO: should the checkboxes have these IDs? They currently do not
    	if (document.getElementById("prior-yes").checked) {
    		global.ApplicationFormData.anyLevelFourQualification = document.getElementById("prior-yes").value;
    		global.ApplicationFormData.levelFourQualificationDetails = nameGrade; //document.getElementById("nameGrade").value;
    	}

    	if (document.getElementById("prior-no").checked) {
    		global.ApplicationFormData.AnyLevelFourQualification = document.getElementById("prior-no").value;
    	}  

    	global.ApplicationFormData.mostRecentSchool = recentSchool;//document.getElementById("schoolDetail").value;

    	if (document.getElementById("elq-yes").checked) {
    		global.ApplicationFormData.elqQualification = document.getElementById("elq-yes").value;
    	}

    	if (document.getElementById("elq-no").checked) {
    		global.ApplicationFormData.elqQualification = document.getElementById("elq-no").value;
    	}

    	console.log(global.ApplicationFormData);
	}

	let nextpage;

	if (global.userType === "staff") {
		nextpage = "/ClearingOfferMade";
	} else {
		nextpage = "/";
	}

	return (
		<>
			<Container className="degree-form d-flex justify-content-center">
				<link 
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" 
					rel="stylesheet">
				</link>
				<div className="form-background">
					<h3 className="form-title">Level 4 or Above Experience</h3>
					<Row>
						<Col>
							<RadioButton
								subtitle="Do you have any level 4 or above qualifications?"
								name="level-four"
								options={PriorLevelFour}
								oc={handleClick}
								data-testid="level-4-radio"
							/>
							{
								(levelFour)
									? <TextBox 
										id="nameGrade" 
										title="Enter qualification name and grade" 
										name="l-4-qual" 
										size={30}
										onChange={onUpdateNameGrade}
									/>
									: <span></span>
							}

						</Col>
						<Col>
							<TextBox 
								id="schoolDetail"
								name="recent-school" 
								title="What is the name of the most recent school/college attended?" 
								size={25} 
								type="text"
								onChange={onUpdateRecentSchool}
							/>
							<RadioButton 
								subtitle={"ELQ - is the applicant applying to study a qualification that is equivalent or" +
								" lower to one they already hold?"}
								options={ELQ}
								name="elq"
							/>
						</Col>
					</Row>
				</div>
			</Container>
			<Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton to='/LevelThreeQualifications'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons" onClick={saveSelectedData}>
						<div id="confirmButton">
							<UCPButton
								to={nextpage}
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Go"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default DegreeQualifications;