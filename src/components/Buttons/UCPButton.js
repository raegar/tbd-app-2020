import React from 'react';
import PropTypes from 'prop-types';
import './UCPButton.css';

export const UCPButton = ({ primary, className, buttonText, ...props}) => {
     return (
    <button
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
primary:PropTypes.bool,
/**
   * Class Name Selected
   */
className:PropTypes.string,
/**
   * Optional click handler
   */
onClick:PropTypes.func,
};
UCPButton.defaultProps = {
    primary:false,
    size:'UCPDefault',
    onClick:undefined
};
export default UCPButton

/* Example

<UCPButton primary=true className="Large" buttonText="Click Here"/> */
