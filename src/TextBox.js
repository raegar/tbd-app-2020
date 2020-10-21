import React from 'react';
import PropTypes from 'prop-types';

export const TextBox = ({backgroundColor, title, size, id, maxlength, minlength, ...props}) => {
return (
    <div>
        <label for={id}>{title}</label>
        <input
        type="text"
        id= {id}
        maxlength = {maxlength}
        minlength = {minlength}
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
    minlength: PropTypes.number
    //Minimum input length
};

TextBox.defaultProps = {
    backgroundColor: null,
    size: 'small',
    maxlength: 30,
    minlength: 0
};