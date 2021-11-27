import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./LevelTwoQualifications.css";
import {Row, Col, Container } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';
import {GCSEGrades} from '../../global/Constants';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

function LevelTwoQualifications() {
	const [engLangGrade, setEngLangGrade] = useState("");
	const [engLitGrade, setEngLitGrade] = useState("");
	const [mathGrade, setMathGrade] = useState("");
	const [scienceGrade, setScienceGrade] = useState("");
	const [l2Details, setL2Details] = useState("");

	const textAreaClassName = isMobile ? "MobileTextArea" : "DesktopTextArea";  
  	const l2FormRightClassName = isMobile ? "l2-mobile-form-right" : "l2-form-right ";
  	const l2FormContainerClassName = isMobile ? "l2-mobile-form-container" : "l2-form-container";

	function saveSelectedData() {
		global.ApplicationFormData.GCSEEnglishLanguage = engLangGrade;
		global.ApplicationFormData.GCSEEnglishLiterature = engLitGrade;
		global.ApplicationFormData.GCSEMaths = mathGrade;
		global.ApplicationFormData.GCSEScience = scienceGrade;
		global.ApplicationFormData.GCSElevelTwoDetails = l2Details;
		console.log(global.ApplicationFormData);
	}

  	return (
		<div>
			<Headers/>
  			<Container>
  				<Container className={l2FormContainerClassName}>
  					<h4 className="form-title">Applicant Qualifications</h4>
  					<AlerDismissible/>
  					<div className={l2FormRightClassName}>
  						<p>GCSE English Language</p>
  						<DropdownMenu 
						  	placeholder="Select Grade" 
						  	options={GCSEGrades} 
						  	id="EngLanguage" 
						  	onSelect={(e) => setEngLangGrade(e.target.value)}
						/>
  						<p>GCSE English Literature</p>
  						<DropdownMenu 
							placeholder="Select Grade" 
							options={GCSEGrades} 
							id="EngLiterature" 
							onSelect={(e) => setEngLitGrade(e.target.value)}
						/>
  						<p>GCSE English Mathematics</p>
  						<DropdownMenu 
							placeholder="Select Grade" 
							options={GCSEGrades} 
							id="Maths" 
							onSelect={(e) => setMathGrade(e.target.value)}
						/>
  						<p>GCSE Science / Additional Science</p>
  						<DropdownMenu 
							placeholder="Select Grade" 
							options={GCSEGrades} 
							id="Science" 
							onSelect={(e) => setScienceGrade(e.target.value)}
						/>
						<p id = "TextBoxBreak"></p> 
  						<p>Additional Qualifications</p>
  						<textarea 
  							id="l2details" 
  							className={textAreaClassName} 
  							name="l2qualificaitons" 
  							placeholder="Enter Additional Qualifications" 
							onChange={(e) => setL2Details(e.target.value)}
  						/>
  					</div>
  				</Container>
  				<Row id="buttonRow">
  					<Col className="centered-buttons">
  						<UCPButton 
						  	to='/MoreInfo'
  							primary="True"
  							className="mediumbutton"
  							buttonText="Go Back"
  						/>
  					</Col>
  					<Col className="centered-buttons">
  						<div id="confirmButton" onClick={saveSelectedData}>
  							<UCPButton
  								to="/LevelThreeQualifications"
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

export default LevelTwoQualifications;