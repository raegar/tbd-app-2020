import React, {useState} from "react";
import "./LevelThreeQualifications.css";
import RadioButton1 from '../RadioButton/RadioButton1';
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
import {Row, Col, Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import UCPButton from '../Buttons/UCPButton';

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

function LevelThreeQualifications() {
	const [qualificationsInfo, setQualificationsInfo] = useState([{}]);

	const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";

	function saveSelectedData(counter) {
		let count = counter - 1;

		if (qualificationsInfo[count]) {
			global.ApplicationFormData.levelThreeQualifications.qual[count] = qualificationsInfo[count]["qualification"];
			global.ApplicationFormData.levelThreeQualifications.subject[count] = qualificationsInfo[count]["subject"];
			global.ApplicationFormData.levelThreeQualifications.grade[count] = qualificationsInfo[count]["grade"];
			global.ApplicationFormData.levelThreeQualifications.date[count] = qualificationsInfo[count]["year"];
		}

		console.log(global.ApplicationFormData);
	}

  	return (
		  <div>
			<Headers/>
  			<Container>
  				<div className={className2}>
  					<div className="form-background">
						<L3Component 
							setQualificationsInfo={setQualificationsInfo} 
							qualificationsInfo={qualificationsInfo} 
							saveSelectedData={saveSelectedData}
						/>
  						
  					</div>
  					<Row id="buttonRow">
  						<Col className="centered-buttons">
  							<UCPButton 
							  	to='/LevelTwoQualifications'
  								primary="True"
  								className="mediumbutton"
  								buttonText="Go Back"
  							/>
  						</Col>
  						<Col className="centered-buttons">
  							<div id="confirmButton" onClick={saveSelectedData}>
  								<UCPButton
  									to="/DegreeQualifications"
  									primary="True"
  									className="mediumbutton"
  									buttonText="Confirm and Go"
  								/>
  							</div>
  						</Col>
  					</Row>
  				</div>
  			</Container>
			<Footer/>
		</div>
  	);
}

export default LevelThreeQualifications;
