import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';


class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return(
    		<div className="labelposition">
    			<input className={this.props.className} type="checkbox" />
    			<div className="checkboxposition">
    				<label className="container">{this.props.checkboxText}</label>
    			</div>           
    		</div>
    	);
    }
}
  
  
Checkbox.propTypes = {
	className:PropTypes.string,
	checkboxText:PropTypes.string
};

Checkbox.defaultProps = {

};


export default Checkbox;
