import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./LevelTwoQualifications.css";
import {Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';
const LevelTwoQualifications = (props) => {
  var gsceGrades = [
    { label: "A*", id: "a*", value: "A*" },
    { label: "A", id: "a", value: "A" },
    { label: "B", id: "b", value: "B" },
    { label: "C", id: "c", value: "C" },
    { label: "D", id: "d", value: "D" },
    { label: "E", id: "e", value: "E" },
    { label: "F", id: "f", value: "F" },
    { label: "G", id: "g", value: "G" },
    { label: "N/A", id: "na", value: "N/A" },
  ];

  function UserTypeSelect() {
    if (props.userType === "staff") {
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
            <div id="confirmButton" hidden>
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
            <div id="confirmButton" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Apply Now"
              />
            </div>
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton1" hidden>
              <UCPButton
                primary="True"
                className="mediumbutton"
                buttonText="Request Call Back"
              />
            </div>
          </Col>

          <Col className="centered-buttons">
            <div id="confirmButton2" hidden>
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
  const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
  const className1 = isMobile ? "mobile-form-right" : "form-right";
  const className2 = isMobile ? "mobile-form-container" : "form-container";
  return (
  
    <div className={className2}>
      <div className="form-background">
        <h3 className="form-title">Applicant Qualifications & Experience</h3>
        <AlerDismissible/>
        <div class={className1}>
          <p>GCSE English Language</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} />
          <p>GCSE English Literature</p>
          <DropdownMenu  placeholder="Select Grade" options={gsceGrades}/>
          <p>GCSE English Mathematics</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} />
          <p>GCSE Science / Additional Science</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} />
          <p>L2 Qualifications</p>
          <textarea className = {className} name="l2qualificaitons" placeholder="Enter level 2 qualifications"  rows={6} cols={45}/>
        </div>
      </div>
      <div>{UserTypeSelect()}</div>
    </div>
  );
};

export default LevelTwoQualifications;
