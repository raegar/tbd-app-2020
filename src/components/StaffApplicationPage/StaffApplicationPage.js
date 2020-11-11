import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import RadioButton from '../RadioButton/RadioButton'
import {Container, Row, Col} from 'react-bootstrap'
import UCPButton from '../Buttons/UCPButton'

const EssentialApplicantInfo = () => {

    var options = [
        {label: "UK National", id: "UK", value: "UK"},
        {label: "EU National", id: "EU", value: "EU"},
        {label: "Other", id: "Other", value: "Other"}
    ];

    return (
        <Container>
        <div className="form-container">
        <div className="form-background">
            <h3 className="form-title">CLEARING APPLICATION</h3>
            <span class="form-left">
            <TextBox 
                title="Name" 
                placeholder="Enter your name" 
                minLength="5" 
                maxLength="60" 
                id="nameinput" 
                type="text"
                name="name"
            />

            <TextBox 
                title="Email" 
                placeholder="Enter your email" 
                minLength="5" 
                maxLength="60" 
                id="emailinput" 
                type="email"
                name="email"
            />

            <TextBox 
                title="Tel No" 
                placeholder="Enter phone number" 
                minLength="5" 
                maxLength="12" 
                id="telinput" 
                type="tel"
                name="telno"
            />

            <TextBox 
                title="Date of Birth" 
                placeholder="Enter date of birth"
                id="dobinput" 
                type="date"
                name="dob"
            />

            <TextBox 
                title="UCAS ID" 
                placeholder="Enter UCAS ID" 
                id="ucasinput" 
                type="text"
                name="ucas" 
            />
        </span>
        <span class="form-right">
            <RadioButton heading="Nationality" options={options} name="test"/>

            <h4>Course</h4>
            <DropdownMenu />
        </span>
          </div>
        </div>
        <Row id="buttonRow">
        <Col>
         <UCPButton primary="True" className="mediumbutton" buttonText="Apply Now"/>
         </Col>
         <Col>
         <UCPButton primary="True" className="mediumbutton" buttonText="Request Call Back"/>
         </Col>
         <Col>
         <UCPButton primary="True" className="mediumbutton" buttonText="Request Video Call Back"/>
         </Col>
       </Row>
       </Container>  
    );
}

export default EssentialApplicantInfo;