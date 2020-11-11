import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
import UCPButton from './components/Buttons/UCPButton';
                                                
function NewApplicationPage(props) {
  if(props.staff === "true")
  {
    
  }
  return (
 <Container >
    
    <Disclaimer staff={props.staff}/>
    
    <EssentialApplicantInfo className="EssentialApplicantInfo"/>
    
    <div id="buttonRow">
      
    </div>
    
    </Container>
  );
}
export default NewApplicationPage;