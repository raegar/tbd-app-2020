import React, { useState } from 'react'
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./DegreeQualifications.css"; 
import {Row, Col} from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import AlerDismissible from '../AlertDismissible/AlertDismissible';
import {isMobile} from 'react-device-detect';


const DegreeQualifications = () => {
    
    const className = isMobile ? "MobileTextArea" : "DesktopTextArea";  
    const className1 = isMobile ? "mobile-form-right" : "form-right";
    const className2 = isMobile ? "mobile-form-container" : "form-container";
    

    var priorLevelFour = [
        {label: 'Yes', id: 'prior-yes', value: 'yes'},
        {label: 'No', id: 'prior-no', value: 'no'}
    ]

    return (
        <div className={className2}>
            <div className="form-background">
                <h3 className="form-title">Level 4 or Above Experience</h3>
                <AlerDismissible/>
                <div className={className1}></div>
            </div>
        </div>
    );
    
}

export default DegreeQualifications;