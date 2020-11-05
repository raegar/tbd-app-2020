import React from 'react';
import './TextBox.css'
import PropTypes from 'prop-types';

const TextBox = ({backgroundColor, name, title, size, id, maxLength, minLength, placeholder, type, onChange, ...props}) => {
return (
    <div className="textbox">
        <label htmlFor={id}>{title}</label>
        <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        id= {id}
        maxLength = {maxLength}
        minLength = {minLength}
        type={type}
        />
    </div>
);
};

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

export default TextBox;
