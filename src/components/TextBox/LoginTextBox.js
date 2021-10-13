import React from 'react';
import './TextBox.css';
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

class LoginTextBox extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

    render = () => {
    	const className = isMobile ? "mobiletextbox" : "textbox";
 
    	return (
    		<div className={`${className ? "mobiletextbox" : "textbox"}`} id={this.props.wrapID}>
    			<label htmlFor={this.props.id}>{this.props.title}</label>
    			<input
    				name={this.props.name}
    				onChange={this.props.onChange}
    				placeholder={this.props.placeholder}
    				id={this.props.id}
    				maxLength={this.props.maxLength}
    				minLength={this.props.minLength}
    				size={this.props.size}
    				type={this.props.type}
    				min={this.props.min}
    				max={this.props.max}
    				disabled={this.props.attribute}
    			/>
    		</div>
    	);
    }
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
