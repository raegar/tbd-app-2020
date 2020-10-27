import React from 'react';
import './TextBox.css'
import PropTypes from 'prop-types';

const TextBox = ({backgroundColor, title, size, id, maxlength, minlength, placeholder, type, ...props}) => {
return (
    <div className="textbox">
        <label for={id}>{title}</label>
        <input
        placeholder={placeholder}
        id= {id}
        maxlength = {maxlength}
        minlength = {minlength}
        type={type}
        />
    </div>
);
};

TextBox.propTypes = {
    backgroundColor: PropTypes.string,
        /** What background colour to use */
    title: PropTypes.string.isRequired,
        /** Input contents */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
        /** How large should the input be? */
    maxlength: PropTypes.number,
    //Maximum input length
    minlength: PropTypes.number,
    //Minimum input length
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number'])
};

TextBox.defaultProps = {
    backgroundColor: null,
    size: 'small',
    maxlength: 30,
    minlength: 0,
    placeholder: '',
    type: "text"
};

/* Example Use

<TextBox 
    title="First Name" 
    placeholder="Enter your firstname" 
    minlength="5" 
    maxlength="30" 
    id="input1" 
    type="text" 
/>

*/

export default TextBox;
