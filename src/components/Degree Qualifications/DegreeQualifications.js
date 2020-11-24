import React, { useState } from 'react'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./DegreeQualifications.css"; 
import {Row, Col} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';
import RadioButton from '../RadioButton/RadioButton';
import TextBox from '../TextBox/TextBox';

const DegreeQualifications = (props) => {
    
    

    const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
    const className1 = isMobile ? "mobile-form-right" : "form-right";
    const className2 = isMobile ? "mobile-form-container" : "form-container";
    

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

    return (
        <div className="form-container">
            <div className="form-background">
                <h3 className="form-title">Level 4 or Above Experience</h3>
                <AlerDismissible/>
                <span className="form-left">
                    <RadioButton
                        subtitle="Do you have any level 4 or above qualifications?"
                        name="level-four"
                        options={priorLevelFour}
                        oc={handleClick}
                    />
                    {
                        (levelFour)
                        ? <TextBox title="Enter qualification name and grade" name="l-4-qual" size="30" />
                        : <span></span>
                    }

                </span>
                <span className="form-right">
                    <TextBox name="recent-school" title="What is the name of the most recent school/college attended?" size="25" type="text" />
                    <RadioButton 
                        subtitle="ELQ - is the applicant applying to study a qualification that is equivalent or lower to one they already hold?"
                        options={elq}
                        name="elq"
                    />
                </span>
                </div>
            </div>
    );
    
}

export default DegreeQualifications;