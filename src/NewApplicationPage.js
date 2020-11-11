import React from 'react';
import './NewApplicationPage.css';
import EssentialApplicantInfo from './components/EssentialApplicantInfo/EssentialApplicantInfo';
import Disclaimer from './components/Disclaimer/Disclaimer';
import {Container} from 'react-bootstrap';
import StaffApp from './components/StaffApplicationPage/StaffApplicationPage'
                                                
function NewApplicationPage(props) {
  if(props === "true")
  {
    return (
      <Container >       
         <Disclaimer staff={props.staff}/>
         <StaffApp className="EssentialApplicantInfo"/>
         </Container>
       );
  }
  else{
    return (
      <Container >
         <Disclaimer staff={props.staff}/>
         <EssentialApplicantInfo className="EssentialApplicantInfo"/>
         </Container>
       );
  }
 
}
export default NewApplicationPage;