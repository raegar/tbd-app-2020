import React, { useState } from "react";
import "./LevelThreeQualifications.css";
import RadioButton1 from '../RadioButton/RadioButton1';
import L3Component from '../L3Component/L3Component';
import { isMobile } from 'react-device-detect';
import {Row, Col, Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import UCPButton from '../Buttons/UCPButton'
var l3QualificationsOptions = [
  { label: "Yes", id: "qualificationYes", value: "yes" },
];
const LevelThreeQualifications = () => {
  const className2 = isMobile ? "l3-mobile-form-container" : "l3-form-container";
  const [value, setValue] = useState("");
  const [emptyInput, setClearInput] = useState(false);
  const [counter, setCounter] = useState(1);
  const handleChange = event => {
    console.log(event.target.value);
    if (event.target.value === 'no') {
      setCounter(6);
      setValue(event.target.value);
      
    }
    else {
      setClearInput(true);
      setCounter(counter + 1);
      SaveSelectedData();
    }
  }

  function SaveSelectedData() {

    global.ApplicationFormData.levelThreeQualifications.qual[counter-1] = document.getElementById("qualification"+counter).value;
    global.ApplicationFormData.levelThreeQualifications.subject[counter-1] = document.getElementById("subject"+counter).value;
    global.ApplicationFormData.levelThreeQualifications.grade[counter-1] = document.getElementById("grade"+counter).value;
    global.ApplicationFormData.levelThreeQualifications.date[counter-1] = document.getElementById("year"+counter).value;
    console.log(global.ApplicationFormData);
  }

  const className1 = isMobile ? "l3-mobile-form-right" : "l3-form-right";
  return (
  <Container>
<div className={className2}>
      <div className="form-background">
        
        {counter < 6 ?
          <div className={className1}>
            <h3 className="form-title">Level 3 Qualifications</h3>
            <L3Component id={counter} clearInput= {emptyInput}  />
            <br/>
              <h5>Other L3 Qualifications</h5>
              <RadioButton1
                options={l3QualificationsOptions}
                name="l3qualifications"
                value={value}
                onChange={handleChange}
              />
          </div>
          : <Redirect  to={{ pathname: "/DegreeQualifications" }} />}
      </div>
      <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton to='/LevelTwoQualifications'
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton" onClick={SaveSelectedData}>
              <UCPButton
               to = "/DegreeQualifications"
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
          
              />
            </div>
          </Col>
        </Row>
    </div>
  </Container>
  );

};

export default LevelThreeQualifications;
