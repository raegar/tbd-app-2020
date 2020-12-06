import React, { useState } from 'react'
import "./DegreeQualifications.css"; 
import {Row, Col, Container} from "react-bootstrap";
import RadioButton from '../RadioButton/RadioButton';
import TextBox from '../TextBox/TextBox';
import UCPButton from '../Buttons/UCPButton'

const DegreeQualifications = (props) => {
    let nextpage;
    if (global.userType === "staff") {
       nextpage = "/ClearingOfferMade" 
    }
    else
    {
        nextpage = "/" 

    }

    var priorLevelFour = [
        {label: 'Yes', id: 'prior-yes', value: 'yes'},
        {label: 'No', id: 'prior-no', value: 'no'}
    ];

    var elq = [
        {label:'Yes', id:'elq-yes', value:"yes"},
        {label:'No', id:'elq-no', value:"no"}
    ];

    const[levelFour, setLevelFour] = useState(false);

    function handleClick(e) {
        if(e === 'yes') {
            setLevelFour(true);
        } else {
            setLevelFour(false);
        }
    }
    function SaveSelectedData() {

        if (document.getElementById("prior-yes").checked) {
            global.ApplicationFormData.anyLevelFourQualification = document.getElementById("prior-yes").value;
            global.ApplicationFormData.levelFourQualificationDetails = document.getElementById("nameGrade").value;
          }
          if (document.getElementById("prior-no").checked) {
            global.ApplicationFormData.AnyLevelFourQualification = document.getElementById("prior-no").value;
          }    
        global.ApplicationFormData.mostRecentSchool = document.getElementById("schoolDetail").value;

        if (document.getElementById("elq-yes").checked) {
            global.ApplicationFormData.elqQualification = document.getElementById("elq-yes").value;
        }
        if (document.getElementById("elq-no").checked) {
            global.ApplicationFormData.elqQualification = document.getElementById("elq-no").value;
        }

    
        console.log(global.ApplicationFormData);
      }

    return (
        <>
        <Container className="degree-form d-flex justify-content-center">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"></link>
            <div className="form-background">
                <h3 className="form-title">Level 4 or Above Experience</h3>
                <Row>
                    <Col>
                        <RadioButton
                            subtitle="Do you have any level 4 or above qualifications?"
                            name="level-four"
                            options={priorLevelFour}
                            oc={handleClick}
                            data-testid="level-4-radio"
                        />
                        {
                            (levelFour)
                            ? <TextBox id="nameGrade" title="Enter qualification name and grade" name="l-4-qual" size={30} />
                            : <span></span>
                        }

                    </Col>
                    <Col>
                        <TextBox 
                            id="schoolDetail"
                            name="recent-school" 
                            title="What is the name of the most recent school/college attended?" 
                            size={25} 
                            type="text" 
                        />
                        <RadioButton 
                            subtitle="ELQ - is the applicant applying to study a qualification that is equivalent or lower to one they already hold?"
                            options={elq}
                            name="elq"
                        />
                    </Col>
                </Row>
            </div>
        </Container>
        <Container>
            <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton to='/LevelThreeQualifications'
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons" onClick={SaveSelectedData}>
            <div id="confirmButton">

              <UCPButton
              
               to = {nextpage}
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
          
              />
            </div>
          </Col>
        </Row>
        </Container>
        </>
    );
    
}

export default DegreeQualifications;