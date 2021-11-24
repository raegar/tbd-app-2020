import React from 'react';
import './L3Component.css';
import PropTypes from 'prop-types';
import TextBox from '../TextBox/TextBox';
import {isMobile} from 'react-device-detect';

function L3Component({name, id, key, onChange, placeholder, clearInput, value, ...props}) {
	const className1 = isMobile ? "mobilel3component" : "l3component";
	
	return (
		<div className={className1}>
			<h5>Qualification : {"#" + id} </h5>
			<p>(E.g. A Level, BTEC, Access)</p>
			<TextBox
				onChange={onChange}    
				id={"qualification" + id}
				key={"2000" + id}
				placeholder={"Enter qualification #" + id} 
				value={value} 
				clearInput={clearInput}
			/>
			<h5>Subject: (E.g. Business Studies)</h5>
			<TextBox
				onChange={onChange} 
				id={"subject" + id}
				key={"3000" + id}
				placeholder={"Enter subject #" + id }
				value={value} 
				clearInput={clearInput}
			/>
			<h5>Grade Achieved</h5>
			<TextBox
				onChange={onChange} 
				id={"grade" + id}
				key={"4000" + id}
				placeholder={"Enter grade #" + id}
				value={value} 
				clearInput={clearInput} />
			<h5>Year Achieved</h5>
			<TextBox
				onChange={onChange} 
				id={"year" + id}
				key={"5000" + id}
				type="date" 
				value={value} 
				clearInput={clearInput}
			/>
		</div>
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
	type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date'])
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
