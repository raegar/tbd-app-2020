import React, { useState } from 'react'
import TextBox from '../TextBox/TextBox'
import RadioButton from '../RadioButton/RadioButton'
import { Container, Row, Col } from "react-bootstrap";
import './FormOne.css'
import UCPButton from '../Buttons/UCPButton'

const FormOne = () => {

    const[showPrior, setShowPrior] = useState(false);

    function handlePriorClick(v) {
        if (v === 'yes') {
            setShowPrior(true);
        } else {
            setShowPrior(false);
        }
    }

    const[whenStudy, setWhenStudy] = useState(false);

    function handleWhenClick(v) {
        if (v === 'yes') {
            setWhenStudy(true);
        } else {
            setWhenStudy(false);
        }
    }

    function SaveSelectedData() {
        global.ApplicationFormData.addressLineOne = document.getElementById("address-1").value;
        global.ApplicationFormData.addressLineTwo = document.getElementById("address-2").value;
        global.ApplicationFormData.city = document.getElementById("town-city").value;
        global.ApplicationFormData.region = document.getElementById("region").value;
        global.ApplicationFormData.postcode = document.getElementById("postcode").value;
 
         // get course length selection from radio button
        if (document.getElementById("full").checked) {
            global.ApplicationFormData.courseLength = document.getElementById("full").value;
        }
        if (document.getElementById("part").checked) {
            global.ApplicationFormData.courseLength = document.getElementById("pull").value;
        }

        if (document.getElementById("prior-yes").checked) {
            global.ApplicationFormData.priorCredit = document.getElementById("prior-yes").value;
            global.ApplicationFormData.priorCreditValue = document.getElementById("priorCred").value;
        }
        if (document.getElementById("prior-no").checked) {
            global.ApplicationFormData.priorCredit = document.getElementById("prior-no").value;
        }

        if (document.getElementById("year-1").checked) {
            global.ApplicationFormData.startYear = document.getElementById("year-1").value;
        }
        if (document.getElementById("year-2").checked) {
            global.ApplicationFormData.startYear = document.getElementById("year-2").value;
        }
        if (document.getElementById("year-3").checked) {
            global.ApplicationFormData.startYear = document.getElementById("year-3").value;
        }

        if (document.getElementById("study-yes").checked) {
            global.ApplicationFormData.priorStudy = document.getElementById("study-yes").value;
            global.ApplicationFormData.priorStudyDate = document.getElementById("priorStudyDate").value;
        }
        if (document.getElementById("study-no").checked) {
            global.ApplicationFormData.priorStudy = document.getElementById("study-no").value;
        }
        console.log(global.ApplicationFormData);
      }



    var fullPartOptions = [
        {label: "Full Time", id: "full", value:"full"},
        {label: "Part Time", id: "part", value: "part"}
    ];

    var priorCreditOptions = [
        {label: "Yes", id: "prior-yes", value:"yes"},
        {label: "No", id: "prior-no", value: "no"}
    ];

    var yearOptions = [
        {label: "Year 1", id: "year-1", value:"1"},
        {label: "Year 2", id: "year-2", value: "2"},
        {label: "Year 3", id: "year-3", value: "3"}
    ];

    var priorStudyOptions = [
        {label: "Yes", id: "study-yes", value:"yes"},
        {label: "No", id: "study-no", value: "no"}
    ];

    return(
        <div>
        <Container className="form-container d-flex justify-content-center">
        <Row className="form-background">
        <Col>

            <h4>Address</h4>

            <TextBox 
                name="address_line_1"
                title="Address Line 1"
                placeholder="Address Line 1"
                minLength={10}
                maxLength={100}
                size={35}
                id="address-1"
                type="text"
            />

            <TextBox 
                name="address_line_2"
                title="Address Line 2"
                placeholder="Address Line 2"
                minLength={10}
                maxLength={100}
                size={35}
                id="address-2"
                type="text"
            />
            
            <TextBox 
                name="town_city"
                title="Town/City"
                placeholder="Town/City"
                minLength={10}
                maxLength={100}
                size={35}
                id="town-city"
                type="text"
            />

            <TextBox 
                name="region"
                title="Region"
                placeholder="Region"
                minLength={3}
                maxLength={30}
                size={25}
                id="region"
                type="text"
            />

            <TextBox 
                name="postcode"
                title="Postcode"
                placeholder="Postcode"
                minLength={6}
                maxLength={9}
                size={10}
                id="postcode"
                type="text"
            />

            <br />

            <RadioButton
                heading="Full/Part Time"
                options={fullPartOptions}
                name="full-part"
                subtitle="Will the student study the course full-time or part-time?"
            />

        </Col>
        <Col>

            <div>
            <RadioButton
                heading="Prior Credit"
                options={priorCreditOptions}
                name="prior-credit"
                subtitle="Does the student wish to enrol with prior credit?"
                oc={handlePriorClick}
            />
            </div>

            {
                (showPrior)
                ? <div><TextBox id="priorCred" data-testid="prior-credit-text" name="prior-credits" title="How Many Credits?" size={5} type="number" minLength={1} maxLength={4} min={0} max={360} /><br /></div>
                : <span></span>
            }

            <RadioButton
                heading="Year of Entry"
                options={yearOptions}
                name="year-of-entry"
                subtitle="In what year does the student want to begin their study?"
            />

            <RadioButton
                heading="Prior Study"
                options={priorStudyOptions}
                name="prior-study"
                subtitle="Has the student studied at UCP/ARU before?"
                oc={handleWhenClick}
            />

            {
                (whenStudy)
                ? <TextBox id="priorStudyDate" name="when-study" title="When did they last study at UCP/ARU?" size={20} type="text" minLength={2} maxLength={20} />
                : <span></span>
            }
            
        </Col>


        </Row>
        </Container>
        <Container>
            <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton to='/NewApplicationPage'
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton" onClick={SaveSelectedData}>
              <UCPButton
               to = "/LevelTwoQualifications"
                primary="True"
                className="mediumbutton"
                buttonText="Next"
              />
            </div>
          </Col>
        </Row>
        </Container>
        </div>
    )
}

export default FormOne;