import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function NewApplicationPage() {
  return (
 <Container >
    
    <Disclaimer/>
    
    <EssentialApplicantInfo className="EssentialApplicantInfo"/>
  
    
    </Container>
  );
}
export default NewApplicationPage;