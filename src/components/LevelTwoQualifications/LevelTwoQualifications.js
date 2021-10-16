import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./LevelTwoQualifications.css";
import {Row, Col, Container } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';


const gsceGrades = [
	{ value: "9", label: "9 - A*" },
	{ value: "8", label: "8 - A*" },
	{ value: "7", label: "7 - A" },
	{ value: "6", label: "6 - B" },
	{ value: "5", label: "5 - B" },
	{ value: "4", label: "4 - C" },
	{ value: "3", label: "3 - D" },
	{ value: "2", label: "2 - E" },
	{ value: "1", label: "2 - F"  },
	{ value: "1", label: "1 -G"  },
	{ value: "u", label: "U"  },
	{ value: "na", label: "n/a"},
];

function LevelTwoQualifications() {
	const [engLangGrade, setEngLangGrade] = useState("");
	const [engLitGrade, setEngLitGrade] = useState("");
	const [mathGrade, setMathGrade] = useState("");
	const [scienceGrade, setScienceGrade] = useState("");
	const [l2Details, setL2Details] = useState("");

	function onEngLangChange(e) {
		setEngLangGrade(e.target.value);
	}

	function onEngLitChange(e) {
		setEngLitGrade(e.target.value);
	}

	function onMathChange(e) {
		setMathGrade(e.target.value);
	}

	function onScienceChange(e) {
		setScienceGrade(e.target.value);
	}

	function onL2DetailsChange(e) {
		setL2Details(e.target.value);
	}

	function saveSelectedData() {
		global.ApplicationFormData.GCSEEnglishLanguage = engLangGrade;
		global.ApplicationFormData.GCSEEnglishLiterature = engLitGrade;
		global.ApplicationFormData.GCSEMaths = mathGrade;
		global.ApplicationFormData.GCSEScience = scienceGrade;
		global.ApplicationFormData.GCSElevelTwoDetails = l2Details;
		console.log(global.ApplicationFormData);
	}

  	const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
  	const className1 = isMobile ? "l2-mobile-form-right" : "l2-form-right ";
  	const className2 = isMobile ? "l2-mobile-form-container" : "l2-form-container";

  	return (
  		<Container>
  			<Container className={className2}>
  				<h4 className="form-title">Applicant Qualifications</h4>
  				<AlerDismissible/>
  				<div className={className1}>
  					<p>GCSE English Language</p>
  					<DropdownMenu 
					  placeholder="Select Grade" 
					  options={gsceGrades} 
					  id="EngLanguage" 
					  onSelect={onEngLangChange}
					/>
  					<p>GCSE English Literature</p>
  					<DropdownMenu 
					  placeholder="Select Grade" 
					  options={gsceGrades} 
					  id="EngLiterature" 
					  onSelect={onEngLitChange}
					/>
  					<p>GCSE English Mathematics</p>
  					<DropdownMenu 
					  placeholder="Select Grade" 
					  options={gsceGrades} 
					  id="Maths" 
					  onSelect={onMathChange}
					/>
  					<p>GCSE Science / Additional Science</p>
  					<DropdownMenu 
					  placeholder="Select Grade" 
					  options={gsceGrades} 
					  id="Science" 
					  onSelect={onScienceChange}
					/>
  					<p>L2 Qualifications</p>
  					<textarea 
  						id="l2details" 
  						className={className} 
  						name="l2qualificaitons" 
  						placeholder="Enter level 2 qualifications" 
  						rows={6} 
  						cols={30}
						onChange={onL2DetailsChange}
  					/>
  				</div>
  			</Container>
  			<Row id="buttonRow">
  				<Col className="centered-buttons">
  					<UCPButton to='/MoreInfo'
  						primary="True"
  						className="mediumbutton"
  						buttonText="Go Back"
  					/>
  				</Col>
  				<Col className="centered-buttons">
  					<div id="confirmButton" onClick={saveSelectedData}>
  						<UCPButton
  							to = "/LevelThreeQualifications"
  							primary="True"
  							className="mediumbutton"
  							buttonText="Confirm and Go"
  						/>
  					</div>
  				</Col>
  			</Row>
  		</Container>
  	);
}

export default LevelTwoQualifications;
