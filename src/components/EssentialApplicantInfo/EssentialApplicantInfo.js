import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import RadioButton from '../RadioButton/RadioButton'
import './EssentialApplicantInfo.css'
import {  Row, Col, Container } from 'react-bootstrap'

const EssentialApplicantInfo = () => {

    var options = [
        {label: "UK National", id: "UK", value: "UK"},
        {label: "EU National", id: "EU", value: "EU"},
        {label: "Other", id: "Other", value: "Other"}
    ];

    return (
        
      <div className="form-container">
        <div className="form-background">
   
        <Container>
      <h3 className="form-title">CLEARING APPLICATION</h3>
            
   
  <Row>
     <Col>
            <TextBox 
                title="Name" 
                placeholder="Enter your name" 
                minLength="5" 
                maxLength="60" 
                id="nameinput" 
                type="text"
                name="name"
            />
     </Col>
      <Col>
            <RadioButton heading="Nationality" options={options} name="test"/>
            </Col>
    </Row>
    <Row>
        <Col >
            <TextBox 
                title="Email" 
                placeholder="Enter your email" 
                minLength="5" 
                maxLength="60" 
                id="emailinput" 
                type="email"
                name="email"
            />
       </Col>
    </Row>
    <Row>
        <Col>
    
            <TextBox 
                title="Tel No" 
                placeholder="Enter phone number" 
                minLength="5" 
                maxLength="12" 
                id="telinput" 
                type="tel"
                name="telno"
            />
</Col>
</Row>
<Row>
        <Col>
            <TextBox 
                title="Date of Birth" 
                placeholder="Enter date of birth"
                id="dobinput" 
                type="date"
                name="dob"
            />
            </Col>
</Row>

    <Row>
        <Col>
            <TextBox 
                title="UCAS ID" 
                placeholder="Enter UCAS ID" 
                id="ucasinput" 
                type="text"
                name="ucas" 
            />
    
     </Col>


    <Col>
           
           
            <h4>Course</h4>
            
          
            <DropdownMenu />
    </Col>
        </Row>

</Container>
      </div>
   </div> 
       
    );
}

export default EssentialApplicantInfo;