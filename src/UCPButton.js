import React from 'react';
import PropTypes from 'prop-types';
import './UCPButton.css';
export const UCPButton =
({primary, className, buttonText, ...props}) => {
    return (<button type="button" className={className}{...props}>{buttonText}</button>);

};

UCPButton.propTypes = {
primary:PropTypes.bool,
className:PropTypes.string,
onClick:PropTypes.func,
};

UCPButton.defaultProps = {
    primary:false, size: 'UCPDefault', onClick:undefined
};

export default UCPButton ;