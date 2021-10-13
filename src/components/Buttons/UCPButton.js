import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './UCPButton.css';

class UCPButton extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

  render = () => {
  	if (this.props.to === undefined) {
  		this.props.to = "/emptyLink";
  	} else if (this.props.to === "none") {
  		return(
  			<button data-testid="ucpButton"
  				type="button"
  				className={this.props.className}
  				{...this.props}>
  				{this.props.buttonText}​
  			</button>
  		);
  	}  
  	return (
  		<Link to={this.props.to}>
  			<button data-testid="ucpButton"
  				type="button"
  				className={this.props.className}
  				{...this.props}>
  				{this.props.buttonText}​
  			</button>
  		</Link>
  	);
  }
}

UCPButton.propTypes = {
	/**
   * Is this the principal call to action on the page?
   */
	className:PropTypes.string,
	/**
   * Optional click handler
   */
	onClick:PropTypes.func,
};

UCPButton.defaultProps = {
	size:'UCPDefault',
	onClick:undefined
};

export default UCPButton;

/* Example

<UCPButton to="NAMEOFPAGE" primary=true className="Large" buttonText="Click Here"/> 

*/


