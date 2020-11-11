import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom';

import './UCPButton.css';

export const UCPButton = ({ to, className, buttonText, ...props}) => {
  if(to === undefined)
  {
    to = "/emptyLink"
  } 
  else if(to === "none")
  {
    return(
    <button data-testid="ucpButton"
            type="button"
            className={className}
            {...props}>
            {buttonText}​
          </button>
    )
  }  
  return (
       <Link to={to}>
          <button data-testid="ucpButton"
            type="button"
            className={className}
            {...props}>
            {buttonText}​
          </button>
      </Link>
  );
};
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
export default UCPButton

/* Example

<UCPButton to="NAMEOFPAGE" primary=true className="Large" buttonText="Click Here"/> 

*/


