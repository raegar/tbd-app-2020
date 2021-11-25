import React from 'react';
import './Calendar.css';
import UCPButton from '../Buttons/UCPButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron';
import { TimeOptions } from '../../global/Constants';

function Calendar() {
  	return (
  		<Container >
  			<Row className="WeeksButton">
  				<Col><UCPButton className="largebutton" buttonText="Week Commencing 26/10/2020"/></Col>
  				<Col><UCPButton className="largebutton" buttonText="Week Commencing 2/11/2020"/></Col>
  				<Col><UCPButton className="largebutton" buttonText="Week Commencing 9/11/2020"/></Col>
  				<Col><UCPButton className="largebutton" buttonText="Week Commencing 16/11/2020"/></Col>
  			</Row> 
			<br/><br/>
  			<Row className="DaysButton">
  				<Col><UCPButton className="mediumbutton" buttonText="Monday"/></Col>
  				<Col><UCPButton className="mediumbutton" buttonText="Tuesday"/></Col>
  				<Col><UCPButton className="mediumbutton" buttonText="Wednesday"/></Col>
  				<Col><UCPButton className="mediumbutton" buttonText="Thursday"/></Col>
  				<Col><UCPButton className="mediumbutton" buttonText="Friday"/></Col>
  			</Row>
  			<br/><br/>
  			<Row>
  				<Col>
  					<DropdownMenu className="Dropdown" options={TimeOptions}/>
  				</Col>
  				<Col>
  					<Jumbotron/>
  				</Col>
  			</Row>
  			<Row className="DaysButton">
  				<br/>
  				<Col><UCPButton className="mediumbutton" buttonText="Refresh"/></Col>
  				<Col><UCPButton className="mediumbutton" buttonText="Confirm"/></Col>
  			</Row >
  		</Container>
  	);
}

export default Calendar;