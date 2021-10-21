import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TextBox from '../TextBox/LoginTextBox';
import UCPButton from '../Buttons/UCPButton';
import './Login.css';
import {isMobile} from 'react-device-detect';
import {Redirect} from 'react-router';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

const InitialState = {
	username: "",
	password: "",
	usernameError: "",
	passwordError: "",
	location: "",
};

function LoginForm() {
	const [state, setState] = useState({
		username: "",
		password: "",
		usernameError: "",
		passwordError: "",
		location: "",
		redirect: false,
	});

	const className = isMobile ? "MobileContainerStyle" : "ContainerStyle";

	function setPassword(password) {
		setState({
			...state,
			password: password
		});
	};

	const setUsernameError = usernameError => {
		setState({
			...state,
			usernameError: usernameError
		});
	};

	function handleChangeUsername(event) {
    	setState({
			...state,
			username: event.target.value
		});
	}

	function handleChangePassword(event) {
    	setPassword(event.target.value);
	}

	function validate() {
    	let usernameError = "";
    	let passwordError = "";

    	if (!validateEmail(state.username)) {
    		usernameError = "Invalid username!";
    	}

    	//TODO: make this more secure by only disclosing one or the other is wrong
    	if (!state.password) {
    		passwordError = "Invalid password!";   
    	}

    	if (usernameError || passwordError) {
    		setState({usernameError, passwordError});
    		return false;
    	}

    	if (state.password === "Password") {
    		global.staffFirstName = state.username.substring(0, state.username.indexOf('.'));
    		global.staffLastName = 
                state.username.substring(state.username.indexOf('.') + 1, state.username.indexOf('@'));
    		global.userType = "staff";
    		return true;
    	}

    	return false;
	};
    
	function handleSubmit(event) {
    	event.preventDefault();
    	const isValid = validate();

    	if (isValid) {
			//refresh state to all black except redirect
			setState({
				...InitialState,
				redirect: true,
			});
    	}
	}

	function validateEmail(email) {
    	const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/;
    	const result = pattern.test(email);

    	if (result) {
    		setState({
    			usernameError: false,
    			username: email,
    		});
    	} else {
    		setUsernameError(true);
    	}

		return result;
	}

	if (state.redirect) {
		return <Redirect push to="/NewApplicationPage" />;
	}

	return(
		<div>
			<Headers/>
			<Container className={className}>
				<form>
					<Row>
						<Col>
							<div className="UserInfo">
								<h2>Login</h2>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="UserInfo">
								<TextBox
									type="text" 
									title="Username" 
									value={state.username} 
									onChange={handleChangeUsername}
									placeholder="Enter Your Username"
								/> 
							</div>
							<div className="InvalidInput">
								<span>{state.usernameError}</span>
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className="UserInfo">
								<TextBox 
									title="Password" 
									type="password" 
									value={state.password} 
									onChange={handleChangePassword} 
									placeholder="Enter Your Password"
								/> 
							</div>
							<div className="InvalidInput">
								<span>{state.passwordError}</span>
							</div>
						</Col>
					</Row>
					<div className="UserInfo">
						<UCPButton onClick={handleSubmit} to="none" className="smallbutton" buttonText="Submit"/>                   
					</div>
				</form>
			</Container>
			<Footer/>
		</div>
	);
}

export default LoginForm;