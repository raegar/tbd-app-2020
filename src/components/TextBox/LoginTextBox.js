import React from 'react';
import './TextBox.css';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

function LoginTextBox(wrapID, id, title, name, onChange, placeholder, maxLength, minLength, size, type, min, max, attribute) {
	const className = isMobile ? "mobiletextbox" : "textbox";

	return (
		<div className={`${className ? "mobiletextbox" : "textbox"}`} id={wrapID}>
			<label htmlFor={id}>{title}</label>
			<input
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				id={id}
				maxLength={maxLength}
				minLength={minLength}
				size={size}
				type={type}
				min={min}
				max={max}
				disabled={attribute}
			/>
		</div>
	);
}

LoginTextBox.propTypes = {
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

LoginTextBox.defaultProps = {
	backgroundColor: null,
	size: 20,
	maxLength: 30,
	minLength: 0,
	placeholder: '',
	type: "text",
	attribute: ''
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

export default LoginTextBox;
