import React, {useState} from "react";
import "./LevelThreeQualifications.css";
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
import {Row, Col } from "react-bootstrap";
import UCPButton from '../Buttons/UCPButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseInfoPanel from "../CourseInfoPanel/CourseInfoPanel";

function LevelThreeQualifications() {
	const [qualificationsInfo, setQualificationsInfo] = useState([{}]);

	const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";

	function saveSelectedData(counter) {
		let count = counter - 1;

		if (qualificationsInfo[count]) {
			global.ApplicationFormData.levelThreeQualifications[count] = {
				qual: qualificationsInfo[count]["qualification"],
				subject: qualificationsInfo[count]["subject"],
				grade: qualificationsInfo[count]["grade"],
				date: qualificationsInfo[count]["year"]
			};
		}

		console.log(global.ApplicationFormData);
	}

	function saveAllSelectedData() {
		for (let i = 1; i <= qualificationsInfo.length; i++) {
			if (qualificationsInfo[i - 1]) {
				saveSelectedData(i);
			}
		}
	}
	const completionRate = [
		{bgcolor: "#005C6E", completed:75 },
	];

  	return (
		  <div>
			<Header/>
			{completionRate.map((item, idx)=>(
				<ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
			))}
  			<div>
				<Row>
					<Col md={4}>
						<CourseInfoPanel/>
					</Col>
					<Col>
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
									<div id="confirmButton" onClick={saveAllSelectedData}>
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
					</Col>
				</Row>
  			</div>
			<Footer/>
		</div>
  	);
}

export default LevelThreeQualifications;
