import React, {useState} from "react";
import TextBox from "../TextBox/TextBox";
import "./NextOfKin.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
//import Modal from "../Modal/Modal";
import {isMobile} from 'react-device-detect';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProgressBar from "../ProgressBar/ProgressBar";


function NextOfKin({ ...props}) {
	const [kinNameInput, setKinNameInput] = useState("");
	const [kinEmailInput, setKinEmailInput] = useState("");
	const [kinTelInput, setKinTelInput] = useState("");
	const [kinAddressLineOne, setKinAddressLineOne] = useState("");
	const [kinAddressLineTwo, setKinAddressLineTwo] = useState("");
	const [kinTownCity, setKinTownCity] = useState("");
	const [kinRegion, setKinRegion] = useState("");
	const [kinPostcode, setKinPostcode] = useState("");
	const [kinInput, setKinInput]= useState("");
	
	const textboxClassName = isMobile ? "mobiletextbox" : "desktoptextbox";
	//progress bar
	const completionRate = [
		{bgcolor: "#005C6E", completed:30 },
	];
	
	//Saves data collected to do with applicants address
	function saveSelectedData() {
		global.ApplicationFormData.name = kinNameInput;
		global.ApplicationFormData.addressLineOne = kinAddressLineOne;
    	global.ApplicationFormData.addressLineTwo = kinAddressLineTwo;
    	global.ApplicationFormData.city = kinTownCity;
    	global.ApplicationFormData.region = kinRegion;
    	global.ApplicationFormData.postcode = kinPostcode;
		global.ApplicationFormData.email = kinEmailInput;
		global.ApplicationFormData.telephone = kinTelInput;

	
		console.log(global.ApplicationFormData);
	}
	
  	return (
		  <div>
			  <Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}

  			<Container className="es-form-container">
  			<div className="es-form-background">
  				<h3 className="form-title">Next of kin</h3>
  				<span className="ess-form-left">
  					<TextBox
  						title="Name"
  						placeholder="Enter your name"
  						minLength={5}
  						maxLength={60}
  						id="nameinput"
  						type="text"
  						name="name"
  						className={textboxClassName}
  						onChange={(e) => setKinNameInput(e.target.value)}
  						value={kinNameInput}
							required
  					/>
					  
  					<TextBox
  						title="Email"
  						placeholder="Enter your email"
  						minLength={5}
  						maxLength={60}
  						id="kinEmailinput"
  						type="email"
  						name="kinEmail"
  						className={textboxClassName}
  						onChange={(e) => setKinEmailInput(e.target.value)}
  						value={kinEmailInput}
							required
  					/>
  					<TextBox
  						title="Phone No"
  						placeholder="Enter phone number"
  						minLength={5}
  						maxLength={12}
  						id="kinTelinput"
  						type="tel"
  						name="kTelno"
  						className={textboxClassName}
  						onChange={(e) => setKinTelInput(e.target.value)}
  						value={kinTelInput}
  					/>
					  <TextBox
  						title="Net of kin relationship"
  						placeholder="Enter your next of kins relationship"
  						minLength={5}
  						maxLength={60}
  						id="kinRelationship"
  						type="text"
  						name="kinRelationship"
  						className={textboxClassName}
  						onChange={(e) => setKinInput(e.target.value)}
  						value={kinInput}
							required
  					/>
  				</span>
  				<span className="ess-form-right">
				  <TextBox 
							name="kin_address_line_1"
							title="Kin Address Line 1"
							placeholder="Kin Address Line 1"
							minLength={10}
							maxLength={100}
							size={35}
							id="kin-address-1"
							type="text"
							onChange={(e) => setKinAddressLineOne(e.target.value)}
						/>
						<TextBox 
							name="kin_address_line_2"
							title="Kin Address Line 2"
							placeholder="Kin Address Line 2"
							minLength={10}
							maxLength={100}
							size={35}
							id="kin-address-2"
							type="text"
							onChange={(e) => setKinAddressLineTwo(e.target.value)}
						/>
						<TextBox 
							name="kin_town_city"
							title="Kin Town/City"
							placeholder="Kin Town/City"
							minLength={10}
							maxLength={100}
							size={35}
							id="kin-town-city"
							type="text"
							onChange={(e) => setKinTownCity(e.target.value)}
						/>
						<TextBox 
							name="kin_region"
							title="Kin Region"
							placeholder="Kin Region"
							minLength={3}
							maxLength={30}
							size={25}							
							id="kin-region"
							type="text"
							onChange={(e) => setKinRegion(e.target.value)}
						/>
						<TextBox 
							name="kin_postcode"
							title="Kin Postcode"
							placeholder="Kin Postcode"							
							minLength={6}
							maxLength={9}
							size={10}
							id="kin-postcode"
							type="text"
							onChange={(e) => setKinPostcode(e.target.value)}
						/>
  				</span>
  			</div>
  		</Container>
		  <Container>
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton to='/EssentialApplicantInfo'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons" onClick={saveSelectedData}>
						<div id="confirmButton">
							<UCPButton
								to= '/AdditionalInformation'
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Go"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer/>
		  </div>
  	);
}

export default NextOfKin;