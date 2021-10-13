import React from 'react';
import './L3Component.css';
import PropTypes from 'prop-types';
import TextBox from '../TextBox/TextBox';
import {isMobile} from 'react-device-detect';

class L3Component extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	const className1 = isMobile ? "mobilel3component" : "l3component";
        
    	return (
    		<div className={className1}>
    			<h5>Qualification : {"#" + this.props.id} </h5>
    			<p>(E.g. A Level, BTEC, Access)</p>
    			<TextBox
    				onChange = {this.onChange}    
    				id={"qualification" + this.props.id}
    				key={"2000" + this.props.id}
    				placeholder={"Enter qualification #" + this.props.id} 
    				value={this.props.value} 
    				clearInput={this.props.clearInput}
    			/>
    			<h5>Subject: (E.g. Bussiness Studies)</h5>
    			<TextBox
    				id={"subject" + this.props.id}
    				key={"3000" + this.props.id}
    				placeholder={"Enter subject #" + this.props.id }
    				value={this.props.value} 
    				clearInput={this.props.clearInput}
    			/>
    			<h5>Grade Achieved</h5>
    			<TextBox
    				id={"grade" + this.props.id}
    				key={"4000" + this.props.id}
    				placeholder={"Enter grade #" + this.props.id}
    				value={this.props.value} 
    				clearInput={this.props.clearInput} />
    			<h5>Year Achieved</h5>
    			<TextBox
    				id={"year" + this.props.id}
    				key={"5000" + this.props.id}
    				type="date" 
    				value={this.props.value} 
    				clearInput={this.props.clearInput}
    			/>
    		</div>

    	);
    }
}

// const L3Component = ({ name, id,key, onChange,placeholder,value,clearInput, ...props }) => {
	
// };

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
