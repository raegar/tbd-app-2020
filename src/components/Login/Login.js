import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import TextBox from '../TextBox/LoginTextBox';
import UCPButton from '../Buttons/UCPButton';
import './Login.css';
import {isMobile} from 'react-device-detect';
import {Redirect} from 'react-router';

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

	//I'm doing this because I really don't feel like going through and converting each of these functions to setStates
	//TODO: if we go with function for methods, change these to function
	const setUsername = username => {
		setState({
			...state,
			username: username
		});
	};

	const setPassword = password => {
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

	const setPasswordError = passwordError => {
		setState({
			...state,
			passwordError: passwordError
		});
	};

	const setLocation = location => {
		setState({
			...state,
			location: location
		});
	};

	const setRedirect = redirect => {
		setState({
			...state,
			redirect: redirect
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

	function clearForm() {
    	setState({
			...InitialState,
			redirect: state.redirect
		});
	};

	if (state.redirect) {
		return <Redirect push to="/NewApplicationPage" />;
	}

	return(
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
	);
}

export default LoginForm;