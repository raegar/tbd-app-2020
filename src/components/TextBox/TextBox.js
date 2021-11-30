import React from 'react';
import './TextBox.css';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

function TextBox({
	wrapID, 
	id, 
	title, 
	name, 
	onChange, 
	placeholder, 
	maxLength, 
	minLength, 
	size, 
	type, 
	min, 
	max, 
	attribute,
	multiline, 
	...props}) {
	const textBoxClassName = isMobile ? "mobiletextbox" : "textbox";
	/*TODO: can we cull a bunch of these via the use of {...props}? it's basically meant to
	be a copy of input so some poor soul could get points for adding a component anyways.*/
	const textBoxPropsObj = {
		name: name,
		onChange: onChange,
		placeholder: placeholder,
		id: id,
		maxLength: maxLength,
		minLength: minLength,
		size: size,
		type: type,
		min: min,
		max: max,
		disabled: attribute,
		...props
	};

	//<input> doesn't work with multiple lines 
	return (
		<div className={`${textBoxClassName ? "mobiletextbox" : "textbox"}`} id={wrapID}>
			<label htmlFor={id}>{title}</label>
			{(!multiline) ? 
				<input 
					{...textBoxPropsObj}
				/>
				: <textarea
					{...textBoxPropsObj}
				/>}
		</div>
	);
}

TextBox.propTypes = {
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

TextBox.defaultProps = {
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

export default TextBox;
