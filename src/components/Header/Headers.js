import React from 'react';
import UCPLogo  from '../../images/UCPLogo.png';
import './Headers.css';
import {isMobile} from 'react-device-detect';

class Headers extends React.Component {
    render = () => {
    	const className = isMobile ? "MobileUCPLogoBlue" : "UCPLogoBlue";

    	return (
    		<header>   
    			<a href="/tbd-app-2020"><img 
    				data-testid="ucpLogoHeader" 
    				src={UCPLogo} 
    				className={className} 
    				alt="UCP official logo" 
    			/></a>  
    		</header>
    	);
    }
}

export default Headers;



