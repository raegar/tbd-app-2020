import React, {useState} from 'react';
import TextBox from '../TextBox/TextBox';
import RadioButton from '../RadioButton/RadioButton';
import { Container, Row, Col } from "react-bootstrap";
import './AddressAndPriorsForm.css';
import UCPButton from '../Buttons/UCPButton';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

function AddressAndPriorsForm() {
	const [showPrior, setShowPrior] = useState(false);
	const [whenStudy, setWhenStudy] = useState(false);
	const [fullPartState, setFullPartState] = useState({
		value: "",
		anyChecked: false
	});
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
	const [addressLineOne, setAddressLineOne] = useState("");
	const [addressLineTwo, setAddressLineTwo] = useState("");
	const [townCity, setTownCity] = useState("");
	const [region, setRegion] = useState("");
	const [postcode, setPostcode] = useState("");

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
    	global.ApplicationFormData.addressLineOne = addressLineOne;
    	global.ApplicationFormData.addressLineTwo = addressLineTwo;
    	global.ApplicationFormData.city = townCity;
    	global.ApplicationFormData.region = region;
    	global.ApplicationFormData.postcode = postcode;
 
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

    	console.log(global.ApplicationFormData);
	}

	return (
		<div>
			<Headers/>
			<Container className="form-container d-flex justify-content-center">
				<Row className="form-background">
					<Col>
						<h4>Address</h4>
						<TextBox 
							name="address_line_1"
							title="Address Line 1"
							placeholder="Address Line 1"
							minLength={10}
							maxLength={100}
							size={35}
							id="address-1"
							type="text"
							onChange={(e) => setAddressLineOne(e.target.value)}
						/>
						<TextBox 
							name="address_line_2"
							title="Address Line 2"
							placeholder="Address Line 2"
							minLength={10}
							maxLength={100}
							size={35}
							id="address-2"
							type="text"
							onChange={(e) => setAddressLineTwo(e.target.value)}
						/>
						<TextBox 
							name="town_city"
							title="Town/City"
							placeholder="Town/City"
							minLength={10}
							maxLength={100}
							size={35}
							id="town-city"
							type="text"
							onChange={(e) => setTownCity(e.target.value)}
						/>
						<TextBox 
							name="region"
							title="Region"
							placeholder="Region"
							minLength={3}
							maxLength={30}
							size={25}
							id="region"
							type="text"
							onChange={(e) => setRegion(e.target.value)}
						/>
						<TextBox 
							name="postcode"
							title="Postcode"
							placeholder="Postcode"
							minLength={6}
							maxLength={9}
							size={10}
							id="postcode"
							type="text"
							onChange={(e) => setPostcode(e.target.value)}
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
									minLength={1} 
									maxLength={4} 
									min={0} 
									max={360}
									onChange={(e) => setPriorCreditValue(e.target.value)}
								/><br/></div>
								: <span></span>
						}

						<RadioButton
							heading="Year of Entry"
							options={yearOptions}
							name="year-of-entry"
							subtitle="In what year does the student want to begin their study?"
						/>
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
									size={20} 
									type="text" 
									minLength={2} 
									maxLength={20}
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
							to='/NewApplicationPage'
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
export default AddressAndPriorsForm;