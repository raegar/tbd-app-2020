import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import TextBox from "../TextBox/TextBox";
import RadioButton from "../RadioButton/RadioButton";
import "./EssentialApplicantInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
<<<<<<< HEAD
import Modal from "../Modal/Modal";
=======
import {isMobile} from 'react-device-detect';
>>>>>>> main

const EssentialApplicantInfo = (props) => {
  let textboxClassName;
  if(isMobile)
  {
 
    textboxClassName = "mobiletextbox";
  }
  else{
    
    textboxClassName = "desktoptextbox";
  }

  var nationalityOptions = [
    { label: "UK National", id: "UK", value: "UK" },
    { label: "EU National", id: "EU", value: "EU" },
    { label: "Other", id: "Other", value: "Other" },
  ];

  var criminalOptions = [
    { label: "Yes", id: "crimeYes", value: "yes" },
    { label: "No", id: "crimeNo", value: "no" },
  ];

  var supportOptions = [
    { label: "Yes", id: "supportYes", value: "yes" },
    { label: "No", id: "supportNo", value: "no" },
  ];

  var time = [
      {value: 'morning', label: '09:00am - 12:00pm'},
      {value: 'monday', label: '12:00pm - 15:00pm'},
      {value: 'monday', label: '15:00pm - 17:00pm'}
    ];
  
  var days = [
      {value: 'monday', label: 'Monday'},
      {value: 'tuesday', label: 'Tuesday'},
      {value: 'wednesday', label: 'Wednesday'},
      {value: 'thursday', label: 'Thursday'},
      {value: 'friday', label: 'Friday'}
    ];

  function ReturnModalData() {
    console.log("made it here!");
    return (
    <Modal id="callback" btnText="Submit">
    <div>
        <h2>This is a modal</h2>
        <p>Example modal</p>
    </div>
</Modal>
)
  }

  function UserTypeSelect() {
    if (global.userType === "staff") {
      return (
        <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton">
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
              />
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row id="buttonRow">
          <Col className="centered-buttons">
            <div id="confirmButton">
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Apply Now"
              />
            </div>
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton1" hidden>
              <Modal id="hello" btnText="Request a Call Back">
                <div>
                  <h2>This is a modal</h2>
                  <p>Example modal</p>
                  <DropdownMenu  options={days}/>
                  <DropdownMenu  options={time}/>
                  <UCPButton 
                    to="none"
                    primary="True"
                    className="smallbutton"
                    buttonText="Submit" />
                </div>
              </Modal>
            </div>
          </Col>

          <Col className="centered-buttons">
            <div id="confirmButton2">
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Request Video Call Back"
              />
            </div>
          </Col>
        </Row>
      );
    }
  }
  return (
    <Container className="form-container">
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
            attribute="disabled"
            className=  {textboxClassName}
            
          />

          <TextBox
            title="Email"
            placeholder="Enter your email"
            minLength="5"
            maxLength="60"
            id="emailinput"
            type="email"
            name="email"
            attribute="disabled"
            className=  {textboxClassName}

          />

          <TextBox
            title="Tel No"
            placeholder="Enter phone number"
            minLength="5"
            maxLength="12"
            id="telinput"
            type="tel"
            name="telno"
            attribute="disabled"
            className=  {textboxClassName}

          />

          <TextBox
            title="D/O/B"
            placeholder="Enter date of birth"
            id="dobinput"
            type="date"
            name="dob"
            attribute="disabled"
            className=  {textboxClassName}
           
        
            
          />

          <TextBox
            title="UCAS ID"
            placeholder="Enter UCAS ID"
            id="ucasinput"
            type="text"
            name="ucas"
            attribute="disabled"
            className=  {textboxClassName}

          />
        </span>
        <span class="form-right">
          <RadioButton
            heading="Nationality"
            options={nationalityOptions}
            name="nationality"
            attribute="disabled"
          />

          <RadioButton
            heading="Convictions"
            options={criminalOptions}
            name="criminal"
            subtitle="Do you have any unspent criminal convictions?"
            attribute="disabled"
          />

          <RadioButton
            heading="Learning Support"
            options={supportOptions}
            name="support"
            subtitle="Do you have any additional learning support needs or disabilities?"
            attribute="disabled"
          />
          <h4>Preferred Course</h4>
          <DropdownMenu />
        </span>
      </div>
      <div>{UserTypeSelect()}</div>
    </Container>
  );
};

export default EssentialApplicantInfo;
