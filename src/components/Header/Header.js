import React from 'react';
import UCPLogo  from '../../images/Logo_White.png';
import './Header.css';
import {isMobile} from 'react-device-detect';

function Header() {
	const className = isMobile ? "MobileUCPLogoBlue" : "UCPLogoBlue";

	return (
		<div>
		<header className="Header">   
			<a href="/tbd-app-2020"><img 
				data-testid="ucpLogoHeader" 
				src={UCPLogo} 
				className={className} 
				alt="UCP official logo" 
			/></a>  
		</header>
		<div className="Line">

		</div>
		</div>
	);
}

export default Header;



