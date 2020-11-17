import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from '../EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from '../Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
                                                
function NewApplicationPage(props) {
  if(props.staff === "true")
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