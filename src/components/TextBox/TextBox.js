import React, {useState} from 'react';
import './TextBox.css'
import PropTypes from 'prop-types';
import {isMobile} from 'react-device-detect';

const TextBox = ({backgroundColor,value, name,key,clearInput, title, size, id, maxLength, minLength, placeholder, type, onChange, min, max, wrapID, attribute,  ...props}) => {
    const className = isMobile ? "mobiletextbox" : "textbox";
    const[emptyInput, setEmptyInput] = useState(clearInput)
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        if (emptyInput) {setEmptyInput(false)}
        setInput(e.currentTarget.value);
        console.log(input);  
    };
    const clearInputField = (e) => {
        setEmptyInput(!clearInput)
    };
return (
    <div className={`${className ? "mobiletextbox" : "textbox"}`} id={wrapID}>
        <label htmlFor={id}>{title}</label>
        <input
        name={name}
        placeholder={placeholder}
        id= {id}
        key = {key}
        maxLength = {maxLength}
        minLength = {minLength}
        size={size}
        type={type}
        min={min}
        max={max}
        value ={emptyInput ? '': input}
        disabled={attribute}
        onChange = {handleChange}
        clearInput = {clearInputField}
        />
    </div>
);
};

TextBox.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date']),
    min: PropTypes.number,
    max: PropTypes.number,
    wrapID: PropTypes.string,
    attribute: PropTypes.string
};

TextBox.defaultProps = {
    backgroundColor: null,
    size: 20,
    maxLength: 30,
    minLength: 0,
    placeholder: '',
    type: "text",
    attribute: ''
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
