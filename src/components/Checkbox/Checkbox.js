import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';


export const Checkbox = ({className, checkboxText, ...props}) => {    
    return(
        <div class="labelposition">
            <input className={className} type="checkbox" />
            <div class="checkboxposition">
                <label class="container">{checkboxText}</label>
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
