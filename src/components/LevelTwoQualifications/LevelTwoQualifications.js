import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./LevelTwoQualifications.css";
import {Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';
const LevelTwoQualifications = (props) => {
  var gsceGrades = [
    { label: "9 - A*", id: "9", value: "9" },
    { label: "8 - A*", id: "8", value: "8" },
    { label: "7 - A", id: "7", value: "7" },
    { label: "6 - B", id: "6", value: "6" },
    { label: "5 - B", id: "5", value: "5" },
    { label: "4 - C", id: "4", value: "4" },
    { label: "3 - D", id: "3", value: "3" },
    { label: "2 - E", id: "2", value: "2" },
    { label: "2 - F", id: "2f", value: "1" },
    { label: "1 -G", id: "1", value: "1" },
    { label: "U", id: "u", value: "u" },
    { label: "n/a", id: "na", value: "na" },
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
  const className1 = isMobile ? "l2-mobile-form-right" : "l2-form-right ";
  const className2 = isMobile ? "l2-mobile-form-container" : "l2-form-container";
  return (
  
    <div className={className2}>
      <div className="l2-form-background">
        <h4 className="form-title">Applicant Qualifications</h4>
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
