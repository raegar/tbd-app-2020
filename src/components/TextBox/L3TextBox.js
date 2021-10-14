import React, {useState} from 'react';
import './TextBox.css';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

//TODO: fix this awful awful formatting here
function L3TextBox({
	clearInput, 
	wrapID, 
	id, 
	title, 
	name, 
	placeholder, 
	key, 
	maxLength, 
	minLength, 
	size, 
	type, 
	min, 
	max, 
	attribute, 
	...props}) {
	const [emptyInput, setEmptyInput] = useState(clearInput);
	const [input, setInput] = useState('');

	function handleChange(e) {
    	if (emptyInput) {
    		setEmptyInput(false);
    	}
        
    	setInput(e.currentTarget.value);
    	console.log(input);  
	}

	function clearInputField(e) {
    	setEmptyInput(!clearInput);
	}

	const className = isMobile ? "mobiletextbox" : "textbox";

	return (
		<div className={`${className ? "mobiletextbox" : "textbox"}`} id={wrapID}>
			<label htmlFor={id}>{title}</label>
			<input
				name={name}
				placeholder={placeholder}
				id={id}
				key={key}
				maxLength={maxLength}
				minLength={minLength}
				size={size}
				type={type}
				min={min}
				max={max}
				value={emptyInput ? '' : input}
				disabled={attribute}
				onChange={handleChange}
				clearInput={clearInputField}
			/>
		</div>
	);
}

L3TextBox.propTypes = {
	backgroundColor: PropTypes.string,
	title: PropTypes.string,
	size: PropTypes.number,
	maxLength: PropTypes.number,
	minLength: PropTypes.number,
	placeholder: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date']),
	min: PropTypes.number,
	max: PropTypes.number,
	wrapID: PropTypes.string,
	attribute: PropTypes.string
};

L3TextBox.defaultProps = {
	backgroundColor: null,
	size: 20,
	maxLength: 30,
	minLength: 0,
	placeholder: '',
	type: "text",
	attribute: ''
};

/* Example Use

<L3TextBox 
    title="First Name" 
    placeholder="Enter your firstname" 
    minLength="5" 
    maxLength="30" 
    id="input1" 
    type="text" 
/>

*/

export default L3TextBox;
