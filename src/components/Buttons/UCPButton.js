import React from 'react';
import PropTypes from 'prop-types';
import './UCPButton.css';

export const UCPButton = ({ className, buttonText, ...props}) => {
     return (
    <button data-testid="ucpButton"
     type="button"
     className={className}
          {...props}
     >{buttonText}​
    </button>
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

<UCPButton primary=true className="Large" buttonText="Click Here"/> */
