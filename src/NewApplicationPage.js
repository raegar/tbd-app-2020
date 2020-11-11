import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container, Row, Col} from 'react-bootstrap';
import UCPButton from './components/Buttons/UCPButton';
                                                
function NewApplicationPage(props) {
  if(props.staff === "true")
  {
    
  }
  return (
 <Container >
    
    <Disclaimer staff={props.staff}/>
    
    <EssentialApplicantInfo className="EssentialApplicantInfo"/>
    
    <Row id="buttonRow">
      <Col>
      <UCPButton primary="True" className="smallbutton" buttonText="New"/>
      </Col>
      <Col>
      <UCPButton primary="True" className="smallbutton" buttonText="Send"/>
      </Col>
    </Row>
    
    </Container>
  );
}
export default NewApplicationPage;