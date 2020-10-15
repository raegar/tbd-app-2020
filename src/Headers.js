import React from 'react';
import UCPLogo  from './UCPLogo.png'
import './Headers.css';

export default class Headers extends React.Component{
 render(){
     return (
            <header>   
                    <img src={UCPLogo} className="UCPLogoBlue" alt="UCP official logo" />  
            </header>
     )
 }
};



