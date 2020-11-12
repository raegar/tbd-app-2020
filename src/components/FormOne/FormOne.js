import React, { useState } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import RadioButton from '../RadioButton/RadioButton'
import { Container, Row, Col } from "react-bootstrap";
import './FormOne.css'

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
        <Container className="form-container">
        <div className="form-background">
            <h3 className="form-title">CLEARING FORM</h3>
        <span className="form-left">

            <h4>Address</h4>

            <TextBox 
                name="address_line_1"
                title="Address Line 1"
                placeholder="Address Line 1"
                minLength="10"
                maxLength="100"
                size="35"
                id="address-1"
                type="text"
            />

            <TextBox 
                name="address_line_2"
                title="Address Line 2"
                placeholder="Address Line 2"
                minLength="10"
                maxLength="100"
                size="35"
                id="address-2"
                type="text"
            />
            
            <TextBox 
                name="town_city"
                title="Town/City"
                placeholder="Town/City"
                minLength="10"
                maxLength="100"
                size="35"
                id="town-city"
                type="text"
            />

            <TextBox 
                name="region"
                title="Region"
                placeholder="Region"
                minLength="3"
                maxLength="30"
                size="25"
                id="region"
                type="text"
            />

            <TextBox 
                name="postcode"
                title="Postcode"
                placeholder="Postcode"
                minLength="6"
                maxLength="9"
                size="10"
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

        </span>
        <span className="form-right">

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
                ? <TextBox name="prior-credits" title="How Many Credits?" size="5" type="number" minLength="1" maxLength="4" min="0" max="360" />
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
                ? <TextBox name="when-study" title="When did they last study at UCP/ARU?" size="20" type="text" minLength="2" maxLength="20" />
                : <span></span>
            }
            
        </span>


        </div>
        </Container>
    )

}

export default FormOne;