import React from 'react';
<<<<<<< HEAD:src/components/Header/Headers.js
import UCPLogo  from '../../images/UCPLogo.png'
=======
import UCPLogo  from './UCPLogo.png';
>>>>>>> main:src/Headers.js
import './Headers.css';

export default class Headers extends React.Component{
    render(){
        return (
            <header>   
<<<<<<< HEAD:src/components/Header/Headers.js
                    <img data-testid="ucpLogoHeader" src={UCPLogo} className="UCPLogoBlue" alt="UCP official logo" />  
=======
                <img src={UCPLogo} className="UCPLogoBlue" alt="UCP official logo" />  
>>>>>>> main:src/Headers.js
            </header>
        )
    }
};



