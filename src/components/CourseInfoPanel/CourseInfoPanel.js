import React, {useState} from 'react';
import "./CourseInfoPanel.css";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { SubjectInfo } from '../../global/Constants';
import UCPButton from '../Buttons/UCPButton';
import '../../global/GlobalVariables.js';
import UcasCalculator from '../UcasCalculator/UcasCalculator';


function CourseInfoPanel({className, ...props}) {
	const [showEmbed, setShowEmbed] = useState(true);
	const [ucasCalcAtTop, setUcasCalcPos] = useState(false);

	function genUcasCalculator() {
		return (<Row className="ucasCalculatorRow">
			<p><b>UCAS Calculator:</b></p>
			<div className="ucasCalculator">
				<UcasCalculator/>
			</div>
		</Row>);
	}

	return (
		<div className={"courseInfoBox " + className}>
			<Row className="courseTitleRow">
				{/* Title */}
				<h1 className="courseInfoTitle"><FontAwesomeIcon className="icon" icon={faCommentDots}/>  Course Info</h1>
			</Row>
			<Row>
				<UCPButton
					to="none"
					onClick={() => setUcasCalcPos(!ucasCalcAtTop)}
					buttonText={"Move UCAS Calculator to " + (!ucasCalcAtTop ? "Here" : "Bottom")}
					className="mediumbutton"
				/>
				{ucasCalcAtTop ? genUcasCalculator() : null}
			</Row>
			<Row className="uniPageLinkRow">
				{/* Uni page link */}
				<UCPButton 
					to="none" 
					onClick={() => setShowEmbed(!showEmbed)} 
					buttonText={(showEmbed ? "Close" : "Open") + " Embed"}
					className="smallbutton"
				/>
				{showEmbed ? <div className="iframeContainer">
					<iframe className="iframeLink" src="https://www.ucp.ac.uk/a-z-courses/" title="Courses at UCP"/>
				</div> : null}
			</Row>
			<Row className="uniPageLinkRow">
				<a href="https://www.ucp.ac.uk/a-z-courses/">Link to Course information page on UCP website</a>
			</Row>
			{global.SelectedCourse ? <Row className="courseInfoRow">
				<span><b>Course Overview: </b>{SubjectInfo[global.SelectedCourse]}</span>
			</Row> : null}
			{ucasCalcAtTop ? null : genUcasCalculator()}
		</div>
	);
}

CourseInfoPanel.propTypes = {
	courseSelected: PropTypes.string,
	className: PropTypes.any
};

export default CourseInfoPanel;