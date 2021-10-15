import React, {useState} from 'react';
import "./DegreeQualifications.css"; 
import {Row, Col, Container} from "react-bootstrap";
import RadioButton from '../RadioButton/RadioButton';
import TextBox from '../TextBox/TextBox';
import UCPButton from '../Buttons/UCPButton';

/*TODO: is this a clone of DegreeQualifications in the ClearingOfferMade folder?
  or is the other the clone? for the time being I just copypasted the changes in
  the other one to here but I should do something better later, or at least rename
  this one.*/
function DegreeQualifications() {
	const [levelFour, setLevelFour] = useState(false);
	const [nameGrade, setNameGrade] = useState("");
	const [recentSchool, setRecentSchool] = useState("");
	const [priorYesState, setPriorYesState] = useState({
		checked: false,
		value: "",
	});
	const [priorNoState, setPriorNoState] = useState({
		checked: false,
		value: "",
	});
	const [elqYesState, setElqYesState] = useState({
		checked: false,
		value: "",
	});
	const [elqNoState, setElqNoState] = useState({
		checked: false,
		value: "",
	});

	function handleClick(e) {
    	setLevelFour(e === 'yes');
	}

	function onUpdateNameGrade(e) {
		setNameGrade(e.target.value);
	}

	function onUpdateRecentSchool(e) {
		setRecentSchool(e.target.value);
	}

	/*I could compress these into a single method and pass the state update method to it
	  in a lambda for each thing, but that makes the code less readable. As much as it
	  irritates me that I'm not doing that.*/
	function onPriorYesChanged(e) {
		setPriorYesState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function onPriorNoChanged(e) {
		setPriorNoState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function elqYesChanged(e) {
		setElqYesState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	function elqNoChanged(e) {
		setElqNoState({
			checked: e.target.checked,
			value: e.target.value,
		});
	}

	//there has to be a better method than having a handler on all the checkboxes, right?
	const PriorLevelFour = [
		{label: 'Yes', id: 'prior-yes', value: 'yes', handleChange: onPriorYesChanged},
		{label: 'No', id: 'prior-no', value: 'no', handleChange: onPriorNoChanged}
	];
	
	const ELQ = [
		{label: 'Yes', id: 'elq-yes', value: 'yes', handleChange: elqYesChanged},
		{label: 'No', id: 'elq-no', value: 'no', handleChange: elqNoChanged}
	];

	function saveSelectedData() {
    	//TODO: make this Reacty because this is bad.
    	if (priorYesState.checked) {
    		global.ApplicationFormData.anyLevelFourQualification = priorYesState.value;
    		global.ApplicationFormData.levelFourQualificationDetails = nameGrade;
    	}

    	if (priorNoState.checked) {
    		global.ApplicationFormData.AnyLevelFourQualification = priorNoState.value;
    	}

    	global.ApplicationFormData.mostRecentSchool = recentSchool;

    	if (elqYesState.checked) {
    		global.ApplicationFormData.elqQualification = elqYesState.value;
    	}

    	if (elqNoState.checked) {
    		global.ApplicationFormData.elqQualification = elqNoState.value;
    	}

    	console.log(global.ApplicationFormData);
	}

	const radioButtonSubtitle = 
		"ELQ - is the applicant applying to study a qualification that is equivalent or lower to one they already hold?";
	let nextpage;

	if (global.userType === "staff") {
		nextpage = "/ClearingOfferMade" ;
	} else {
		nextpage = "/ClearingOfferMadeStudentEnd";
	}

	return (
		<>
			<Container className="degree-form d-flex justify-content-center">
				<link 
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" 
					rel="stylesheet"
				/>
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
								subtitle={radioButtonSubtitle}
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