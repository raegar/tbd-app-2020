import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./LevelTwoQualifications.css";
import {Row, Col, Container } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';




function LevelTwoQualifications (props) {
  

  var gsceGrades = [
    { value: "9", label: "9 - A*" },
    { value: "8", label: "8 - A*" },
    { value: "7", label: "7 - A" },
    { value: "6", label: "6 - B" },
    { value: "5", label: "5 - B" },
    { value: "4", label: "4 - C" },
    { value: "3", label: "3 - D" },
    { value: "2", label: "2 - E" },
    { value: "1", label: "2 - F"  },
    { value: "1", label: "1 -G"  },
    { value: "u", label: "U"  },
    { value: "na", label: "n/a"},
  ];
  

  function SaveSelectedData() {
    var course = document.getElementById("EngLanguage");
    global.ApplicationFormData.GCSEEnglishLanguage = course.options[course.selectedIndex].value;
    course = document.getElementById("EngLiterature");
    global.ApplicationFormData.GCSEEnglishLiterature = course.options[course.selectedIndex].value;
    course = document.getElementById("Maths");
    global.ApplicationFormData.GCSEMaths = course.options[course.selectedIndex].value;
    course = document.getElementById("Science");
    global.ApplicationFormData.GCSEScience = course.options[course.selectedIndex].value;
    course = document.getElementById("l2details");
    global.ApplicationFormData.GCSElevelTwoDetails = course.value;
    console.log(global.ApplicationFormData);
  }



  const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
  const className1 = isMobile ? "l2-mobile-form-right" : "l2-form-right ";
  const className2 = isMobile ? "l2-mobile-form-container" : "l2-form-container";
  return (
  
 <Container>
 <Container className={className2}>
        <h4 className="form-title">Applicant Qualifications</h4>
        <AlerDismissible/>
        <div className={className1}>
          <p>GCSE English Language</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} id="EngLanguage"/>
          <p>GCSE English Literature</p>
          <DropdownMenu  placeholder="Select Grade" options={gsceGrades} id="EngLiterature"/>
          <p>GCSE English Mathematics</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} id="Maths"/>
          <p>GCSE Science / Additional Science</p>
          <DropdownMenu placeholder="Select Grade" options={gsceGrades} id="Science"/>
          <p>L2 Qualifications</p>
          <textarea id="l2details" className = {className} name="l2qualificaitons" placeholder="Enter level 2 qualifications"  rows={6} cols={30}/>
        </div>
    </Container>
    <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton to='/MoreInfo'
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton" onClick={SaveSelectedData}>
              <UCPButton
               to = "/LevelThreeQualifications"
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
              />
            </div>
          </Col>
        </Row>
    </Container>
  );
};

export default LevelTwoQualifications;
