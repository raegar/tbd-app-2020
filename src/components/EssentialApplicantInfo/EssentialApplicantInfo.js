import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import RadioButton from '../RadioButton/RadioButton'
import './EssentialApplicantInfo.css'

const EssentialApplicantInfo = () => {

    var nationalityOptions = [
        {label: "UK National", id: "UK", value: "UK"},
        {label: "EU National", id: "EU", value: "EU"},
        {label: "Other", id: "Other", value: "Other"}
    ];

    var criminalOptions = [
        {label: "Yes", id: "crimeYes", value: "yes"},
        {label: "No", id: "crimeNo", value: "no"}
    ];

    var supportOptions = [
        {label: "Yes", id: "supportYes", value: "yes"},
        {label: "No", id: "supportNo", value: "no"}
    ]

    return (
        <div className="form-container">
        <div className="form-background">
            <h3 className="form-title">CLEARING APPLICATION</h3>

            <TextBox 
                title="Name" 
                placeholder="Enter your name" 
                minLength="5" 
                maxLength="60" 
                id="nameinput" 
                type="text"
                name="name"
            />

            <TextBox 
                title="Email" 
                placeholder="Enter your email" 
                minLength="5" 
                maxLength="60" 
                id="emailinput" 
                type="email"
                name="email"
            />

            <TextBox 
                title="Tel No" 
                placeholder="Enter phone number" 
                minLength="5" 
                maxLength="12" 
                id="telinput" 
                type="tel"
                name="telno"
            />

            <TextBox 
                title="Date of Birth" 
                placeholder="Enter date of birth"
                id="dobinput" 
                type="date"
                name="dob"
            />

            <TextBox 
                title="UCAS ID" 
                placeholder="Enter UCAS ID" 
                id="ucasinput" 
                type="text"
                name="ucas" 
            />

            <RadioButton heading="Nationality" options={nationalityOptions} name="nationality"/>

            <RadioButton heading="Convictions" options={criminalOptions} name="criminal" subtitle="Do you have any unspent criminal convictions?" />

            <RadioButton heading="Learning Support" options={supportOptions} name="support" subtitle="Do you have any additional learning support needs or disabilities?" />

            <h4>Course</h4>
            <DropdownMenu />
        </div>
        </div>
    );
}

export default EssentialApplicantInfo;