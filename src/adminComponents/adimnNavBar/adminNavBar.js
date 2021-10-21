import React from 'react';
import {Container} from 'react-bootstrap';
import './AdminNavBar.css';
import UCPButton from '../../components/Buttons/UCPButton';
import {isMobile} from 'react-device-detect';

function AdminLogIn(){
	const buttonClassName = isMobile ? "largebutton" : "extralargebutton";

	return(
		<Container>
			<UCPButton 
				to="/AdminLogIn" 
				buttonText="Admin" 
				className={buttonClassName} 
				href="/AdminLogIn" 
			/>
			<UCPButton 
				to="/AdminDashboard" 
				buttonText="AdminDashboard" 
				className={buttonClassName} 
				href="/AdminDashboard" 
			/>
			<UCPButton 
				to="/AdminData" 
				buttonText="AdminData" 
				className={buttonClassName} 
				href="/AdminData" 
			/>
			<UCPButton 
				to="/AdminGraph" 
				buttonText="AdminGraph" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
		</Container>
	);
}

export default AdminLogIn;