import React from 'react';
import './Footer.css';
import {isMobile} from 'react-device-detect';
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Modal from "../Modal/Modal";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {Time, Days} from '../../global/Constants';

function Footer() {
	const className = isMobile ? "MobileFooter" : "ucpFooter";

					
	return (	
		<div>
			<footer className={className}>
					<Modal id="hello" btnText="Request a Call Back" className = "CallbackFooter">
						<div>
							<h2>Callback Request</h2>
							<p>Please select a day and time you would be available.</p>
							<Row id="dropdownRow">
								<Col className="dropdownOptions1">
									<DropdownMenu placeholder="Please select a day..." options={Days}/>
								</Col>
								<Col className="dropdownOptions2">
									<DropdownMenu placeholder="Please select a time..." options={Time}/>
								</Col>
							</Row>
							<br/>
							<UCPButton 
								to="none"
								primary="True"
								className="smallbutton"
								buttonText="Submit" 
							/>
						</div>
					</Modal>
			</footer>
		</div>

	);
	
};

export default Footer;