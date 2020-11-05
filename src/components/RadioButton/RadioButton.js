import React from 'react'
import './RadioButton.css'

const RadioButton = ({name, options, heading, ...props}) => {

    var items = options.map((item) =>
        <div className="radio-group">
            <input name={name} type="radio" id={item.id} value={item.value} />
            <label htmlFor={item.id}>{item.label}</label>
        </div>
    );

    return(
        <div className="radio-buttons">
            <h4>{heading}</h4>
            {items}
        </div>
    );
}

export default RadioButton;