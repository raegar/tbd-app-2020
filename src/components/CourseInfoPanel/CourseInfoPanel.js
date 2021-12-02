import React from 'react';
import "./CourseInfoPanel.css";
import { Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { SubjectInfo } from '../../global/Constants';


function CourseInfoPanel({courseSelected, className, ...props}) {

	return (
		<Container className={"courseInfoBox " + className}>
			<Row className="courseTitleRow">
				{/* Title */}
				<span className="courseInfoTitle"><FontAwesomeIcon className="icon" icon={faCommentDots}/>  Course Info</span>
			</Row>
			<Row className="uniPageLinkRow">
				{/* Uni page link */}
				<iframe className="iframeLink" src="https://www.ucp.ac.uk/a-z-courses/" title="Courses at UCP"/>
				<a href="https://www.ucp.ac.uk/a-z-courses/">Link to Course information page on UCP website</a>
			</Row>
			{courseSelected ? <Row className="courseInfoRow">
				<span><b>Course Overview:</b></span>
				{SubjectInfo[courseSelected]}
			</Row> : null}
		</Container>
	);
}

CourseInfoPanel.propTypes = {
	courseSelected: PropTypes.string,
	className: PropTypes.any
};

export default CourseInfoPanel;