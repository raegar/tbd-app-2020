import React from 'react';
import './Calendar.css';
import UCPButton from '../Buttons/UCPButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Col, Container, Row} from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron';

const options = [
    { value: '0', label: '9:00' },
    { value: '1', label: '10:00'},
    { value: '2', label: '11:00'},
    { value: '3', label: '12:00'},
    { value: '4', label: '13:00' },
    { value: '5', label: '14:00'},
    { value: '6', label: '15:00'},
    { value: '7', label: '16:00'},
  ]

 


export default function Calendar (){
 
 
     return (

      <Container >
           <Row className="WeeksButton">
        <Col><UCPButton className="largebutton" buttonText="Week Commencing 26/10/2020"/></Col>
        <Col><UCPButton className="largebutton" buttonText="Week Commencing 2/11/2020"/></Col>
        <Col><UCPButton className="largebutton" buttonText="Week Commencing 9/11/2020"/></Col>
        <Col><UCPButton className="largebutton" buttonText="Week Commencing 16/11/2020"/></Col>
        </Row> 

      <br></br>
      <br></br>
     
      <Row className="DaysButton">
     
        <Col><UCPButton className="mediumbutton" buttonText="Monday"/></Col>
        <Col><UCPButton className="mediumbutton" buttonText="Tuesday"/></Col>
        <Col><UCPButton className="mediumbutton" buttonText="Wednesday"/></Col>
        <Col><UCPButton className="mediumbutton" buttonText="Thursday"/></Col>
        <Col><UCPButton className="mediumbutton" buttonText="Friday"/></Col>
      
      </Row >
      <br></br>
      <br></br>
      
      <Row>
        <Col>
      <DropdownMenu className="Dropdown" options = {options}/>
      </Col>
      <Col>
      <Jumbotron/>
      </Col>
      </Row>

     
        <Row className="DaysButton">

        

    
<br></br>

      
     
        <Col><UCPButton className="mediumbutton" buttonText="Refresh"/></Col>
        <Col><UCPButton className="mediumbutton" buttonText="Confirm"/></Col>
        
      
      
      </Row >
      
    </Container>
     )
 
};