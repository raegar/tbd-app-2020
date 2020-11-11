import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function NewApplicationPage(props) {
  if(props.staff === "true")
  {
    return (
      <Container >       
         <Disclaimer staff={props.staff}/>
         <EssentialApplicantInfo userType="student" />
         </Container>
       );
  }
  else{
    return (
      <Container >
         <Disclaimer staff={props.staff}/>
         <EssentialApplicantInfo userType="staff"/>
         </Container>
       );
  }
 
}
export default NewApplicationPage;