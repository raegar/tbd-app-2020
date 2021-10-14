import React from 'react';
import './RadioButton.css';
import PropTypes from 'prop-types';


function RadioButton1({options, attribute, name, value, onChange, oc, heading, subtitle, ...props}) {
	//Iterate through options array and create an input + label for each
	let items = options.map((item, i) =>
		<div key={i} className="radio-group">
			<input 
				disabled={attribute} 
				name={name} 
				type="radio" id={item.id} 
				checked={value === item.value} 
				onChange={onChange}  
				data-testid={item.id} 
				value={item.value} 
				onClick={oc ? (e) => oc(item.value) : ''} 
			/>
			<label htmlFor={item.id}>{item.label}</label>
		</div>
	);

	//Return div with heading, subtitle and then the items variable which is created in the loop above
	return (
		<div className="radio-buttons">
			<h4>{heading}</h4>
			<p>{subtitle}</p>
			{items}
		</div>
	);
}

// const RadioButton1 = ({name, options, heading, subtitle,  attribute, oc,value, onChange,checked, ...props}) => {

	
// };

//Prop Types:
//Note that name and options are required, heading and subtitle are not
//You must pass an array of JSON objects to instantiate an instance of radio button

RadioButton1.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	heading: PropTypes.string,
	subtitle: PropTypes.string,
	oc: PropTypes.func
};

//Without providing a heading or subtitle, this values default to null

RadioButton1.defaultProps = {
	heading: null,
	subtitle: null
};

//Export

export default RadioButton1;

/* 

EXAMPLE USE:

var criminalOptions = [
        {label: "Yes", id: "crimeYes", value: "yes"},
        {label: "No", id: "crimeNo", value: "no"}
    ]

<RadioButton 
    heading="Convictions" 
    options={criminalOptions} 
    name="criminal" 
    subtitle="Do you have any unspent criminal convictions?" 
/>

*/