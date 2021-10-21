import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './AdminLogIn.css';
import TextBox from '../../components/TextBox/TextBox';
import UCPButton from '../../components/Buttons/UCPButton';
import AdminNavBar from '../../adminComponents/AdminNavBar/AdminNavBar';

function AdminLogIn() {
	const [errorMessage, setErrorMessage] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [setPasswordInput] = useState("");

	function loginButtonPressed(e) {
		let validated = false;
		setErrorMessage(emailInput);

		if (!validated) {
			e.preventDefault();
		}
	}

	return (
		<Container fluid>{/*LogIn*/}
			<AdminNavBar/>
			<Row>
				<Col md={3}>
					<UCPButton
						to="/"
						buttonText="Log In"
						className="mediumbutton"
						onClick={loginButtonPressed}
					/>
				</Col>
				<Col md={9}>
					<Row>
						<p>{errorMessage}</p>
					</Row>
					<Row>
						<TextBox title="Email" placeholder="Email" onChange={(e) => setEmailInput(e.target.value)}/>
					</Row>
					<Row>
						<TextBox 
							title="Password" 
							placeholder="Password" 
							onChange={(e) => setPasswordInput(e.target.value)}
							type="password"
						/>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default AdminLogIn;