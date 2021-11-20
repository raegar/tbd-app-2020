import React, {useState} from 'react';
import './L3Component.css';
import PropTypes from 'prop-types';
import TextBox from '../TextBox/TextBox';
import {isMobile} from 'react-device-detect';
import {Redirect} from "react-router-dom";
import RadioButton1 from '../RadioButton/RadioButton1';

const L3QualificationsOptions = [
	{ label: "Yes", id: "qualificationYes", value: "yes" },
];

const QualificationKey = "qualification";
const SubjectKey = "subject";
const GradeKey = "grade";
const YearKey = "year";

function L3Component(
	{
		name, 
		key, 
		onChange, 
		placeholder, 
		value,
		saveSelectedData, 
		qualificationsInfo,
		setQualificationsInfo,
		...props
	}) {
	const [qualificationIndex, setQualificationIndex] = useState(0);
	//no clue what value was for but we'll preserve it just in case
	const [someValue, setValue] = useState(!!value ? value : "");
	const [clearInput, setClearInput] = useState(false);
	const [counter, setCounter] = useState(1);

	const l3ComponentClassName = isMobile ? "mobilel3component" : "l3component";
	const className1 = isMobile ? "l3-mobile-form-right" : "l3-form-right";

	const id = (qualificationIndex + 1);

	function onYesMoreQualifications(event) {
		console.log(event.target.value);

		if (event.target.value === 'no') {
			setCounter(6);
			setValue(event.target.value);
		} else {
			setClearInput(true);
			setQualificationIndex(counter);
			setCounter(counter + 1);
			saveSelectedData(counter);
		}

		if (onChange) {
			onChange(event);
		}
	}


	function saveValue(e, key) {
		console.log("saveValue " + key);
		let qualCopy = qualificationsInfo;
		if (!qualCopy[counter-1]){
			qualCopy[counter-1]={};
		}
		qualCopy[counter-1][key] = e.target.value;
		setQualificationsInfo(qualCopy);
	}
	
	return (
		<>
			{
				counter < 6 ?
					<div className={className1}>
						<h3 className="form-title">Level 3 Qualifications</h3>
						<div className={l3ComponentClassName}>
							<h5>Qualification : {"#" + id} </h5>
							<p>(E.g. A Level, BTEC, Access)</p>
							<TextBox
								onChange={(e) => saveValue(e, QualificationKey)}    
								id={"qualification" + id}
								key={"2000" + id}
								placeholder={"Enter qualification #" + id} 
								value={someValue} 
								clearInput={clearInput}
							/>
							<h5>Subject: (E.g. Bussiness Studies)</h5>
							<TextBox
								onChange={(e) => saveValue(e, SubjectKey)} 
								id={"subject" + id}
								key={"3000" + id}
								placeholder={"Enter subject #" + id }
								value={someValue} 
								clearInput={clearInput}
							/>
							<h5>Grade Achieved</h5>
							<TextBox
								onChange={(e) => saveValue(e, GradeKey)} 
								id={"grade" + id}
								key={"4000" + id}
								placeholder={"Enter grade #" + id}
								value={someValue} 
								clearInput={clearInput} />
							<h5>Year Achieved</h5>
							<TextBox
								onChange={(e) => saveValue(e, YearKey)} 
								id={"year" + id}
								key={"5000" + id}
								type="date" 
								value={someValue} 
								clearInput={clearInput}
							/>
						</div>
						<br/>
						<h5>Other L3 Qualifications</h5>
						<RadioButton1
							options={L3QualificationsOptions}
							name="l3qualifications"
							value={someValue}
							onChange={onYesMoreQualifications}
						/>
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
