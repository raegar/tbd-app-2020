import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';


export const Checkbox = ({className, checkboxText, ...props}) => {    
    return(
        <div className="labelposition">
            <input className={className} type="checkbox" />
            <div className="checkboxposition">
                <label className="container">{checkboxText}</label>
            </div>           
        </div>
    )
}
  
  
Checkbox.propTypes = {
    className:PropTypes.string,
    checkboxText:PropTypes.string
}

  Checkbox.defaultProps = {

  };


  export default Checkbox
