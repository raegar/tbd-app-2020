/* eslint-disable indent */
import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import TextBox from "../TextBox/TextBox";
import "./EssentialApplicantInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Modal from "../Modal/Modal";
import {isMobile} from 'react-device-detect';
//import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';
import {Time, Days} from '../../global/Constants';

function EssentialApplicantInfo({disabled, ...props}) {
	const [nameInput, setNameInput] = useState("");
	const [prefixInput, setPrefixInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [telInput, setTelInput] = useState("");
	const [dobInput, setDobInput] = useState("");
	const [ucasInput, setUcasInput] = useState("");
	const [addressLineOne, setAddressLineOne] = useState("");
	const [addressLineTwo, setAddressLineTwo] = useState("");
	const [townCity, setTownCity] = useState("");
	const [region, setRegion] = useState("");
	const [postcode, setPostcode] = useState("");
	const disabledInputs = disabled ? "disabled" : null;
	const textboxClassName = isMobile ? "mobiletextbox" : "desktoptextbox";

	//Saves data collected to do with applicants address
	function saveSelectedData() {
		global.ApplicationFormData.name = nameInput;
		global.ApplicationFormData.addressLineOne = addressLineOne;
    	global.ApplicationFormData.addressLineTwo = addressLineTwo;
    	global.ApplicationFormData.city = townCity;
    	global.ApplicationFormData.region = region;
    	global.ApplicationFormData.postcode = postcode;
		global.ApplicationFormData.email = emailInput;
		global.ApplicationFormData.telephone = telInput;
		global.ApplicationFormData.dob = dobInput;
		global.ApplicationFormData.ucasNumber = ucasInput;

		console.log(global.ApplicationFormData);
	}

	function userTypeSelect() {
		if (global.userType === "staff") {
			return (
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton 
							to="/Login"
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons">
						<div id="confirmButton" onClick={saveSelectedData}>
							<UCPButton 
								to="/NextOfKin"
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Go"
								disabled={disabled}
							/>
						</div>
					</Col>
				</Row>
			);
		} else {
			return (
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<div id="confirmButton1">
							<Modal id="hello" btnText="Request a Call Back">
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
						</div>
					</Col>
					<Col className="centered-buttons">
						<div id="confirmButton" onClick={saveSelectedData}>
							<UCPButton
								to="/NextOfKin"
								primary="True"
								className="mediumbutton"
								buttonText="Apply Now"
								disabled={disabled}
							/>
						</div>
					</Col>
				</Row>
			);
		}
	}

  	return (
		  <div>
  			<Container className="es-form-container">
  			<div className="es-form-background">
  				<h3 className="form-title">CLEARING APPLICATION</h3>
  				<span className="ess-form-left">
  					<TextBox
  						title="Name"
  						placeholder="Enter your name"
  						minLength={5}
  						maxLength={60}
  						id="nameinput"
  						type="text"
  						name="name"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setNameInput(e.target.value)}
  						value={nameInput}
							required
  					/>
					 <TextBox
  						title="Perefered prefix"
  						placeholder="Enter your prefix"
  						minLength={5}
  						maxLength={60}
  						id="prefixinput"
  						type="text"
  						name="prefix"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setPrefixInput(e.target.value)}
  						value={prefixInput}
							required
  					/>
						<TextBox
  						title="UCAS ID"
  						placeholder="Enter UCAS ID"
							minLength={5}
  						maxLength={12}
  						id="ucasinput"
  						type="text"
  						name="ucas"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setUcasInput(e.target.value)}
  						value={ucasInput}
  					/>
  					<TextBox
  						title="Email"
  						placeholder="Enter your email"
  						minLength={5}
  						maxLength={60}
  						id="emailinput"
  						type="email"
  						name="email"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setEmailInput(e.target.value)}
  						value={emailInput}
							required
  					/>
  					<TextBox
  						title="Phone No"
  						placeholder="Enter phone number"
  						minLength={5}
  						maxLength={12}
  						id="telinput"
  						type="tel"
  						name="telno"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setTelInput(e.target.value)}
  						value={telInput}
  					/>
  					<TextBox
  						title="D/O/B"
  						placeholder="Enter date of birth"
  						id="dobinput"
  						type="date"
  						name="dob"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setDobInput(e.target.value)}
  						value={dobInput}
  					/>

  				</span>
  				<span className="ess-form-right">
					<TextBox 
						name="address_line_1"
						title="Address Line 1"
						placeholder="Address Line 1"
						minLength={10}
						maxLength={100}
						size={35}
						id="address-1"
						type="text"
						onChange={(e) => setAddressLineOne(e.target.value)}
					/>
					<TextBox 
						name="address_line_2"
						title="Address Line 2"
						placeholder="Address Line 2"
						minLength={10}
						maxLength={100}
						size={35}
						id="address-2"
						type="text"
						onChange={(e) => setAddressLineTwo(e.target.value)}
					/>
					<TextBox 
						name="town_city"
						title="Town/City"
						placeholder="Town/City"
						minLength={10}
						maxLength={100}
						size={35}
						id="town-city"
						type="text"
						onChange={(e) => setTownCity(e.target.value)}
					/>
					<TextBox 
						name="region"
						title="Region"
						placeholder="Region"
						minLength={3}
						maxLength={30}
						size={25}							
						id="county"
						type="text"
						onChange={(e) => setRegion(e.target.value)}
					/>
					<TextBox 
						name="postcode"
						title="Postcode"
						placeholder="Postcode"							
						minLength={6}
						maxLength={9}
						size={10}
						id="postcode"
						type="text"
						onChange={(e) => setPostcode(e.target.value)}
					/>
  				</span>
  			</div>
  			<div>{userTypeSelect()}</div>
  			</Container>
			<Footer/>
		</div>
  	);
}

export default EssentialApplicantInfo;