import React from 'react';
import "./CourseInfoPanel.css";
import {Row, Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';


function CourseInfoPanel({courseSelected, ...props}) {

	return (
		<Container className="courseInfoBox">
			<Row className="courseTitleRow">
				{/* Title */}
				<FontAwesomeIcon icon={faCommentDots}/>
			</Row>
			<Row className="uniPageLinkRow">
				{/* Uni page link */}
			</Row>
		</Container>
	);
}

export default CourseInfoPanel;