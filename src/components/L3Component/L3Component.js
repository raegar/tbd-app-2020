import React, {useState, useRef} from 'react';
import './L3Component.css';
import PropTypes from 'prop-types';
import TextBox from '../TextBox/TextBox';
import {isMobile} from 'react-device-detect';
import {Redirect} from "react-router-dom";
import RadioButton1 from '../RadioButton/RadioButton1';
import UCPButton from '../Buttons/UCPButton';
import {L3QualificationsOptions, QualificationKey, SubjectKey, GradeKey, YearKey} from '../../global/Constants';

function L3Component(
	{
		name, 
		key, 
		onChange, 
		placeholder, 
		saveSelectedData, 
		qualificationsInfo,
		setQualificationsInfo,
		...props
	}) {
	const [qualificationCounter, setCounter] = useState(1);
	const inputContents = useRef({});

	const l3ComponentClassName = isMobile ? "mobilel3component" : "l3component";
	const l3FormRightClassName = isMobile ? "l3-mobile-form-right" : "l3-form-right";

	function onYesMoreQualifications(event) {
		if (event.target.value === 'no') {
			setCounter(6);
		} else {
			setCounter(qualificationCounter + 1);
			saveSelectedData(qualificationCounter);
		}

		inputContents.current = {};

		if (onChange) {
			onChange(event);
		}
	}

	function enableMoreQualifications() {
		let empty = true;

		console.log("Keys of inputs: " + Object.keys(inputContents.current));
<<<<<<< HEAD

		
		if (qualificationCounter - 1 > 0) {								
			for (let key of Object.keys(inputContents.current)) {
				console.log(key);

				if (inputContents.current[key] && inputContents.current[key].length > 0) {
					console.log(key + " has a value");
					empty = false;
				}
			}
		} else {
			empty = false;
=======
										
		for (let key of Object.keys(inputContents.current)) {
			if (inputContents.current[key] && inputContents.current[key].length > 0) {
				console.log(key + " has a value");
				empty = false;
			}
>>>>>>> d3ca5bfadb51ec41478cb71e1680d58e7ec5582b
		}

		return empty;
	}

	function saveValue(e, key) {
		let qualCopy = qualificationsInfo;

		if (!qualCopy[qualificationCounter - 1]) {
			qualCopy[qualificationCounter - 1] = {};
		}

		qualCopy[qualificationCounter - 1][key] = e.target.value;
		inputContents.current[key] = e.target.value;
		setQualificationsInfo(qualCopy);
	}

	function gotoPrevious() {
		if (qualificationCounter - 1 > 0) {
			gotoQualification(qualificationCounter - 1);
		}
	}

	function gotoNext() {
		if (qualificationsInfo.length >= qualificationCounter + 1) {
			gotoQualification(qualificationCounter + 1);
		}
	}

	function gotoQualification(qualNumber) {
		for (const key of Object.keys(qualificationsInfo[qualNumber - 1])) {
			inputContents.current[key] = qualificationsInfo[qualNumber - 1][key];
		}

		setCounter(qualNumber);
	}
	
	return (
		<>
			{
				qualificationCounter < 6 ?
					<div className={l3FormRightClassName}>
						<h3 className="form-title">Level 3 Qualifications</h3>
						<div className={l3ComponentClassName}>
							<h5>Qualification : {"#" + qualificationCounter} </h5>
							<p>(E.g. A Level, BTEC, Access)</p>
							<TextBox
								onChange={(e) => saveValue(e, QualificationKey)}    
								id={"qualification" + qualificationCounter}
								key={"2000" + qualificationCounter}
								placeholder={"Enter qualification #" + qualificationCounter}
								value={inputContents.current[QualificationKey]}
							/>
							<h5>Subject: (E.g. Business Studies)</h5>
							<TextBox
								onChange={(e) => saveValue(e, SubjectKey)} 
								id={"subject" + qualificationCounter}
								key={"3000" + qualificationCounter}
								placeholder={"Enter subject #" + qualificationCounter }
								value={inputContents.current[SubjectKey]}
							/>
							<h5>Grade Achieved</h5>
							<TextBox
								onChange={(e) => saveValue(e, GradeKey)} 
								id={"grade" + qualificationCounter}
								key={"4000" + qualificationCounter}
								placeholder={"Enter grade #" + qualificationCounter}
								value={inputContents.current[GradeKey]}
							/>
							<h5>Year Achieved</h5>
							<TextBox
								onChange={(e) => saveValue(e, YearKey)} 
								id={"year" + qualificationCounter}
								key={"5000" + qualificationCounter}
								type="date"
								max="9999-12-31"
								maxLength= {8}
								value={inputContents.current[YearKey]}
								min="1000-1-1"
							/>
							<br/>
							<h5>Other L3 Qualifications</h5>
							<RadioButton1
								options={L3QualificationsOptions}
								name="l3qualifications"
								onChange={onYesMoreQualifications}
<<<<<<< HEAD
								disabled={enableMoreQualifications()}
=======
								disabled={enableMoreQualifications}
>>>>>>> d3ca5bfadb51ec41478cb71e1680d58e7ec5582b
							/>
							<br/>
							<div className="row">
								<div className="col-5">
									<UCPButton
										to="none"
										className="smallbutton"
										buttonText="Previous"
										onClick={gotoPrevious}
										disabled={!(qualificationCounter - 1 > 0)}
									/>
								</div>
								<div className="col-2"/>
								<div className="col-5">
									<UCPButton
										to="none"
										className="smallbutton"
										buttonText="Next"
										onClick={gotoNext}
										disabled={!(qualificationsInfo.length >= qualificationCounter + 1)}
									/>
								</div>
							</div>
						</div>
					</div>
					: <Redirect to={{pathname: "/DegreeQualifications"}}/>
			}
	   </>
	);
}

TextBox.propTypes = {
	backgroundColor: PropTypes.string,
	/** What background colour to use */
	title: PropTypes.string,
	/** Input contents */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** How large should the input be? */
	maxLength: PropTypes.number,
	//Maximum input length
	minLength: PropTypes.number,
	//Minimum input length
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date']),
	setQualificationsInfo: PropTypes.func,
	saveSelectedData: PropTypes.func,
};

TextBox.defaultProps = {
	backgroundColor: null,
	size: 'small',
	maxLength: 30,
	minLength: 0,
	placeholder: '',
	type: "text"
};

/* Example Use

<TextBox 
    title="First Name" 
    placeholder="Enter your firstname" 
    minLength="5" 
    maxLength="30" 
    id="input1" 
    type="text" 
/>

*/

export default L3Component;
