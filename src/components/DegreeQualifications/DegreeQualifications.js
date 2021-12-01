import React, {useState} from 'react';
import "./DegreeQualifications.css"; 
import {Row, Col, Container} from "react-bootstrap";
import RadioButton from '../RadioButton/RadioButton';
import UCPButton from '../Buttons/UCPButton';
import TextBox from '../TextBox/TextBox';
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function DegreeQualifications() {
	const [levelFour, setLevelFour] = useState(false);
	const [nameGrade, setNameGrade] = useState("");
	const [priorCheckedState, setPriorCheckedState] = useState({
		value: "",
		anyChecked: false,
	});
	const [elqCheckedState, setElqCheckedState] = useState({
		value: "",
		anyChecked: false,
	});

	const nextpage = global.userType === "staff" ? "/ClearingOfferMade" : "/ClearingOfferMadeStudentEnd";

	function handleClick(e) {
    	setLevelFour(e === 'yes');
	}

	function onPriorChanged(e) {
		setPriorCheckedState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function onElqChanged(e) {
		setElqCheckedState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	//there has to be a better method than having a handler on all the checkboxes, right?
	const PriorLevelFour = [
		{label: 'Yes', id: 'prior-yes', value: 'yes', handleChange: onPriorChanged},
		{label: 'No', id: 'prior-no', value: 'no', handleChange: onPriorChanged}
	];
	
	const ELQ = [
		{label: 'Yes', id: 'elq-yes', value: 'yes', handleChange: onElqChanged},
		{label: 'No', id: 'elq-no', value: 'no', handleChange: onElqChanged}
	];

	function saveSelectedData() {
    	if (priorCheckedState.anyChecked) {
    		global.ApplicationFormData.anyLevelFourQualification = priorCheckedState.value;

			if (priorCheckedState.value === 'yes') {
    			global.ApplicationFormData.levelFourQualificationDetails = nameGrade;
			}
    	}

      
    	if (elqCheckedState.anyChecked) {
    		global.ApplicationFormData.elqQualification = elqCheckedState.value;
    	}

    	console.log(global.ApplicationFormData);
	}
	const completionRate = [
		{bgcolor: "#005C6E", completed:90 },
	];

	return (
		<div>
			<Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}
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
										title="Enter qualification name and grade:" 
										name="l-4-qual"
										rows="10"
										maxLength="224" 
										placeholder=" Name
										Grade"
										multiline
										onChange={(e) => setNameGrade(e.target.value)}
									/>		
									: <span></span>
							}

						</Col>
						<Col>
							<RadioButton 
								subtitle={"ELQ - is the applicant applying to study a qualification that is " + 
								"equivalent or lower to one they already hold?"}
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
			<Footer/>
		</div>
	);
}

export default DegreeQualifications;