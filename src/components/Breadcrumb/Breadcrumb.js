import React from 'react';
import {Container} from 'react-bootstrap';
import './Breadcrumb.css';

function BreadcrumbComp() {
	return (
		<Container>
			<ul class="breadcrumb">
				<li><a href="www.google.co.uk">Personal Information</a></li>
				<li><a href="www.google.co.uk">Qualifications</a></li>
				<li><a href="www.google.co.uk">About you</a></li>
			</ul>
		</Container>
	);
};

export default BreadcrumbComp;