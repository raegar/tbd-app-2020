import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import UCPButton from '../Buttons/UCPButton';
import './SelectRole.css';
import {isMobile} from 'react-device-detect';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../global/GlobalVariables.js';

//Must Set HREF attribute to use

function SelectRole() {
	const buttonClassName = isMobile ? "largebutton" : "extralargebutton";

	return (
		<div>
			<Header/>
			<Container fluid>
				<Row>
					<Col>
						<Container className="mt-5 px-3 py-3 select-role-container">
							<Row className="text-center">
								<Col className="mt-3 mb-3">
									<UCPButton 
										to="/NewApplicationPage" 
										buttonText="Prospective Student" 
										className={buttonClassName} 
										href="/NewApplicationPage" 
									/>
									<UCPButton 
										to="/login" 
										buttonText="Staff Portal" 
										className={buttonClassName} 
										href="/login" 
										data-testid="staff-portal" 
									/>
									<UCPButton 
										to="/AdminLogIn" 
										buttonText="Admin" 
										className={buttonClassName} 
										href="/AdminLogIn" 
									/>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>	
	);
}

export default SelectRole;