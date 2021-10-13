import React from 'react';
import './TextBox.css';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

class L3TextBox extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.state = {
			emptyInput: this.props.clearInput,
			input: '',
		};
	}

    handleChange = (e) => {
    	if (this.state.emptyInput) {
    		this.setEmptyInput(false);
    	}
        
    	this.setInput(e.currentTarget.value);
    	console.log(this.state.input);  
    }

    setEmptyInput = (input) => {
    	this.setState({emptyInput: input});
    }

    setInput = (input) => {
    	this.setState({input: input});
    }

    clearInputField = (e) => {
    	this.setEmptyInput(!this.props.clearInput);
    }

    render = () => {
    	const className = isMobile ? "mobiletextbox" : "textbox";
	
    	return (
    		<div className={`${className ? "mobiletextbox" : "textbox"}`} id={this.props.wrapID}>
    			<label htmlFor={this.props.id}>{this.props.title}</label>
    			<input
    				name={this.props.name}
    				placeholder={this.props.placeholder}
    				id={this.props.id}
    				key={this.props.key}
    				maxLength={this.props.maxLength}
    				minLength={this.props.minLength}
    				size={this.props.size}
    				type={this.props.type}
    				min={this.props.min}
    				max={this.props.max}
    				value={this.state.emptyInput ? '': this.state.input}
    				disabled={this.props.attribute}
    				onChange={this.handleChange}
    				clearInput={this.clearInputField}
    			/>
    		</div>
    	);
    }
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
