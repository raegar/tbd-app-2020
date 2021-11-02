import React from 'react';
import './AdminNavBar.css';
import UCPButton from '../../components/Buttons/UCPButton';
import {isMobile} from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function AdminLogIn(props){
	const theActive = props.theActive;

	const dashboardClassName = theActive=="Dashboard" ? "admin-navbar-button-active" : "admin-navbar-button";
	const dataClassName = theActive=="Data" ? "admin-navbar-button-active" : "admin-navbar-button";
	const genderClassName = theActive=="Gender" ? "admin-navbar-button-active" : "admin-navbar-button";
	const ageClassName = theActive=="Age" ? "admin-navbar-button-active" : "admin-navbar-button";
	const courseClassName = theActive=="Course" ? "admin-navbar-button-active" : "admin-navbar-button";
	const ethnicityClassName = theActive=="Ethnicity" ? "admin-navbar-button-active" : "admin-navbar-button";
	const locationClassName = theActive=="Location" ? "admin-navbar-button-active" : "admin-navbar-button";
	const incomeClassName = theActive=="Income" ? "admin-navbar-button-active" : "admin-navbar-button";
	const disabilitiesClassName = theActive=="Disabilities" ? "admin-navbar-button-active" : "admin-navbar-button";
	const supportClassName = theActive=="Support" ? "admin-navbar-button-active" : "admin-navbar-button";
	const educationClassName = theActive=="Education" ? "admin-navbar-button-active" : "admin-navbar-button";
	const employmentClassName = theActive=="Employment​" ? "admin-navbar-button-active" : "admin-navbar-button";
	const paymentClassName = theActive=="Payment" ? "admin-navbar-button-active" : "admin-navbar-button";
	const logInClassName = theActive=="LogIn" ? "admin-navbar-button-active" : "admin-navbar-button";

	const dashboardIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Dashboard";
	const dataIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Data";
	const genderIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Gender";
	const ageIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Age";
	const courseIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Course";
	const ethnicityIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Ethnicity";
	const locationIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Location";
	const incomeIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Income";
	const disabilitiesIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Disabilities";
	const supportIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Support";
	const educationIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Education";
	const employmentIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Employment";
	const paymentIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "Payment";
	const logInIcon = isMobile ? <FontAwesomeIcon icon={faCoffee}/> : "LogIn";

	return(
		<div className="navbar-container">
			
			<UCPButton
				to="/AdminDashboard" 
				buttonText={dashboardIcon}
				className={dashboardClassName} /*buttonClassName + " " + */
				href="/AdminDashboard" 
			/>
			<UCPButton
				to="/AdminData" 
				buttonText={dataIcon} 
				className={dataClassName} 
				href="/AdminData" 
			/>

			<UCPButton
				to="/AdminGraph" 
				buttonText={genderIcon}  
				className={genderClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph"
				buttonText={ageIcon}
				className={ageClassName}
				href="/AdminGraph"
			/>
			<UCPButton
				to="/AdminGraph"
				buttonText={courseIcon}
				className={courseClassName}
				href="/AdminGraph"
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={ethnicityIcon}
				className={ethnicityClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={locationIcon} 
				className={locationClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={incomeIcon}
				className={incomeClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={disabilitiesIcon} 
				className={disabilitiesClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={supportIcon}
				className={supportClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={educationIcon}
				className={educationClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={employmentIcon}
				className={employmentClassName} 
				href="/AdminGraph" 
			/>
			<UCPButton
				to="/AdminGraph" 
				buttonText={paymentIcon}
				className={paymentClassName} 
				href="/AdminGraph" 
			/>

			<UCPButton 
				to="/AdminLogIn" 
				buttonText={logInIcon}
				className={logInClassName} 
				href="/AdminLogIn" 
			/>
		</div>
	);
}

export default AdminLogIn;