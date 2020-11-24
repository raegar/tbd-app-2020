import React, { useState } from 'react'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./DegreeQualifications.css"; 
import {Row, Col} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';


const DegreeQualifications = (props) => {
    
    var degreeGrades = [
        {label: "1st", id: "1st", value: "1st"},
        {label: "2:1", id: "2:1", value: "2:1"},
        {label: "2:2", id: "2:2", value: "2:2"},
        {label: "3rd", id: "3rd", value: "3rd"}
    ];

    const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
    const className1 = isMobile ? "mobile-form-right" : "form-right";
    const className2 = isMobile ? "mobile-form-container" : "form-container";
    

    var priorLevelFour = [
        {label: 'Yes', id: 'prior-yes', value: 'yes'},
        {label: 'No', id: 'prior-no', value: 'no'}
    ];

    var elq = [
        {label:'Yes', id:'elq-yes', value="yes"},
        {label:'No', id:'elq-no', value="no"}
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
        <div className={className2}>
            <div className="form-background">
                <h3 className="form-title">Level 4 or Above Experience</h3>
                <AlerDismissible/>
                <div className={className1}>
                    <RadioButton
                        subtitle="Do you have any level 4 or above qualifications?"
                        name="level-four"
                        options={priorLevelFour}
                        oc={handleClick}
                    />
                    {
                        (levelFour)
                        ? <div>
                            <TextBox name="recent-school" title="School/College (most recent)" size="25" type="text" />
                            <RadioButton 
                                subtitle="ELQ - is the applicant applying to study a qualification that is equivalent or lower to one they already hold?"
                                options={elq}
                                name="elq"
                            />
                          </div>
                        
                    }
                </div>
            </div>
        </div>
    );
    
}

export default DegreeQualifications;