import React from 'react';
import {Container} from 'react-bootstrap';
import './AdminNavBar.css';
import UCPButton from '../../components/Buttons/UCPButton';
import {isMobile} from 'react-device-detect';

function AdminLogIn(){
	const buttonClassName = isMobile ? "largebutton" : "admin-navbar-button";

	return(
		<div className="navbar-container">
			<UCPButton
				to="/AdminDashboard" 
				buttonText="Dashboard" 
				className={buttonClassName} 
				href="/AdminDashboard" 
			/>
			<UCPButton
				to="/AdminData" 
				buttonText="Data" 
				className={buttonClassName} 
				href="/AdminData" 
			/>

			<UCPButton
				to="/AdminGraph" 
				buttonText="Gender" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Age" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Course" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Ethnicity" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Location" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Income" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Disabilities" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Support" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Education" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Employment" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText="Payment" 
				className={buttonClassName} 
				href="/AdminGraph" 
			/>

			<UCPButton 
				to="/AdminLogIn" 
				buttonText="LogOff" 
				className={buttonClassName} 
				href="/AdminLogIn" 
			/>
		</div>
	);
}

export default AdminLogIn;