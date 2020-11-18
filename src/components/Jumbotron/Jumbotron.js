import React from 'react';
import './Jumbotron.css';

export const Jumbotron = ({ ...props }) => {
    return (
        <div className="jumbo" data-testid="jumbotron">
            {props.children}
        </div>        
    )
}

export default Jumbotron;