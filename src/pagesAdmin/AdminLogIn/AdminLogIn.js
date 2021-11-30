import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import './AdminLogIn.css';
import TextBox from '../../components/TextBox/TextBox';
import AdminNavBar from '../../componentsAdmin/AdminNavBar/AdminNavBar';

function AdminLogIn() {
	//const [errorMessage, setErrorMessage] = useState("");
	//const [emailInput, setEmailInput] = useState("");
	//const [passwordInput, setPasswordInput] = useState(null);
	/*
	function loginButtonPressed(e) {
		//for now we just check to see if there is a password
		let validated = !!passwordInput;
		setErrorMessage(emailInput);

		if (!validated) {
			e.preventDefault();
		}
	}*/

	return (
		<div className="admin-login-container">{/*LogIn*/}
			<Col md={2.5} className="first-col">
				<AdminNavBar theActive="LogIn"/>
				{/*<UCPButton
						to="/"
						buttonText="Log In"
						className="mediumbutton"
						onClick={loginButtonPressed}
					/>*/}
			</Col>
			<Col className="second-col">
				<Row>
					<p>{errorMessage}</p>
				</Row>
				<Row>
					<TextBox 
						title="Email" 
						placeholder="Email" 
						//onChange={(e) => setEmailInput(e.target.value)}
					/>
				</Row>
				<Row>
					<TextBox 
						title="Password" 
						placeholder="Password" 
						//onChange={(e) => setPasswordInput(e.target.value)}
						type="password"
					/>
				</Row>
			</Col>
		</div>
	);
}

export default AdminLogIn;