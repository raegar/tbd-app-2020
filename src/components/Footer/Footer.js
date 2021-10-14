import React from 'react';
import './Footer.css';
import {isMobile} from 'react-device-detect';


function Footers() {
	const className = isMobile ? "MobileFooter" : "ucpFooter";
	return (
		<footer className={className}/>   
	);
};

export default Footers;