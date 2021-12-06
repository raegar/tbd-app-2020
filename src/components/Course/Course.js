import React, {useState} from 'react';
import TextBox from '../TextBox/TextBox';
import RadioButton from '../RadioButton/RadioButton';
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Container, Row, Col } from "react-bootstrap";
import './Course.css';
import UCPButton from '../Buttons/UCPButton';
import ProgressBar from "../ProgressBar/ProgressBar";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../global/GlobalVariables.js'

function Course() {
	const [showPrior, setShowPrior] = useState(false);
	const [whenStudy, setWhenStudy] = useState(false);
	const [fullPartState, setFullPartState] = useState({
		value: "",
		anyChecked: false
	});
	//progress bar
	const completionRate = [
		{bgcolor: "#005C6E", completed:45 },
	];
	const [priorCreditState, setPriorCreditState] = useState({
		value: "",
		anyChecked: false
	});
	const [priorCreditValue, setPriorCreditValue] = useState("");
	const [yearState, setYearState] = useState({
		value: "",
		anyChecked: false
	});
	const [priorStudyState, setPriorStudyState] = useState({
		value: "",
		anyChecked: false
	});
	const [priorStudyDate, setPriorStudyDate] = useState("");
	const [selectedCourse, setSelectedCourse] = useState("");
	
	function handlePriorClick(v) {
    	setShowPrior(v === 'yes');
	}

	function handleWhenClick(v) {
    	setWhenStudy(v === 'yes');
	}

	function onFullPartSelected(e) {
		setFullPartState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function updateCourse(e) {
		global.SelectedCourse = e.target.value;
		setSelectedCourse(e.target.value);
		//TODO: update router so this changes the CourseInfo component.
	}

	function onPriorCreditSelected(e) {
		setPriorCreditState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function onYearSelected(e) {
		setYearState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function onPriorStudySelected(e) {
		setPriorStudyState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	const fullPartOptions = [
		{label: "Full Time", id: "full", value: "full", handleChange: onFullPartSelected},
		{label: "Part Time", id: "part", value: "part", handleChange: onFullPartSelected}
	];
	const priorCreditOptions = [
		{label: "Yes", id: "prior-yes", value: "yes", handleChange: onPriorCreditSelected},
		{label: "No", id: "prior-no", value: "no", handleChange: onPriorCreditSelected}
	];
	const yearOptions = [
		{label: "Year 1", id: "year-1", value: "1", handleChange: onYearSelected},
		{label: "Year 2", id: "year-2", value: "2", handleChange: onYearSelected},
		{label: "Year 3", id: "year-3", value: "3", handleChange: onYearSelected}
	];
	const priorStudyOptions = [
		{label: "Yes", id: "study-yes", value: "yes", handleChange: onPriorStudySelected},
		{label: "No", id: "study-no", value: "no", handleChange: onPriorStudySelected}
	];

	function saveSelectedData() {
 
    	// get course length selection from radio button
		if (fullPartState.anyChecked) {
			global.ApplicationFormData.courseLength = fullPartState.value;
		}

		if (priorCreditState.anyChecked) {
			global.ApplicationFormData.priorCredit = priorCreditState.value;
			global.ApplicationFormData.priorCreditValue = priorCreditValue;
		}

		if (yearState.anyChecked) {
			global.ApplicationFormData.startYear = yearState.value;
		}

		if (priorStudyState.anyChecked) {
			global.ApplicationFormData.priorStudy = priorStudyState.value;
			global.ApplicationFormData.priorStudyDate = priorStudyDate;
		}

		global.ApplicationFormData.selectedCourse = selectedCourse;

    	console.log(global.ApplicationFormData);
	}

	return (
		<div>
			<Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}
			<Container className="form-container d-flex justify-content-center">
				<Row className="form-background">
					<Col>
						<h4>Preferred Course</h4>
						<DropdownMenu onSelect={updateCourse} id="courseSelection"/>
						<RadioButton
							heading="Year of Entry"
							options={yearOptions}
							name="year-of-entry"
							subtitle="In what year does the student want to begin their study?"
						/>
						<br/>
						<RadioButton
							heading="Full/Part Time"
							options={fullPartOptions}
							name="full-part"
							subtitle="Will the student study the course full-time or part-time?"
						/>
					</Col>
					<Col>
						<div>
							<RadioButton
								heading="Prior Credit"
								options={priorCreditOptions}
								name="prior-credit"
								subtitle="Does the student wish to enrol with prior credit?"
								oc={handlePriorClick}
							/>
						</div>
						{
							(showPrior)
								? <div><TextBox 
									id="priorCred" 
									data-testid="prior-credit-text" 
									name="prior-credits" 
									title="How Many Credits?" 
									size={5} 
									type="number"
									placeholder="0" 
									minLength={1} 
									maxLength={3} 
									min={0} 
									max={360}
									onChange={(e) => setPriorCreditValue(e.target.value)}
								/><br/></div>
								: <span></span>
						}

						<RadioButton
							heading="Prior Study"
							options={priorStudyOptions}
							name="prior-study"
							subtitle="Has the student studied at UCP/ARU before?"
							oc={handleWhenClick}
						/>

						{
							(whenStudy)
								? <TextBox 
									id="priorStudyDate" 
									name="when-study" 
									title="When did they last study at UCP/ARU?"  
									type="date" 
									onChange={(e) => setPriorStudyDate(e.target.value)}
								/>
								: <span></span>
						}
					</Col>
				</Row>
			</Container>
			<Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton 
							to='/AdditionalInformation'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons">
						<div id="confirmButton" onClick={saveSelectedData}>
							<UCPButton
								to = "/LevelTwoQualifications"
								primary="True"
								className="mediumbutton"
								buttonText="Next"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}
export default Course;