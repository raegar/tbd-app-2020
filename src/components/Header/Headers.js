import React from 'react';
import UCPLogo  from '../../images/UCPLogo.png';
import './Headers.css';

export default class Headers extends React.Component{
    render(){
        return (
            <header>   
                    <img data-testid="ucpLogoHeader" src={UCPLogo} className="UCPLogoBlue" alt="UCP official logo" />  
            </header>
        )
    }
};



