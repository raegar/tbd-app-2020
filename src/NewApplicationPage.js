import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function NewApplicationPage(props) {
  if(global.userType === "staff")
  {
    return (
      <Container >       
         <Disclaimer staff={props.staff}/>
         <EssentialApplicantInfo userType="staff" />
         </Container>
       );
  }
  else{
    return (
      <Container >
         <Disclaimer staff={props.staff}/>
         <EssentialApplicantInfo userType="student"/>
         </Container>
       );
  }
 
}
export default NewApplicationPage;