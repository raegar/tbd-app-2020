import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton'
import RadioButton from '../RadioButton/RadioButton'

const EssentialApplicantInfo = () => {

    var options = [
        {label: "UK National", id: "UK", value: "UK"},
        {label: "EU National", id: "EU", value: "EU"},
        {label: "Other", id: "Other", value: "Other"}
    ];

    return (
        <div className="form-background">
            <h3>CLEARING APPLICATION</h3>

            <TextBox 
                title="Name" 
                placeholder="Enter your name" 
                minLength="5" 
                maxLength="60" 
                id="nameinput" 
                type="text" 
            />

            <TextBox 
                title="Email" 
                placeholder="Enter your email" 
                minLength="5" 
                maxLength="60" 
                id="emailinput" 
                type="email" 
            />

            <TextBox 
                title="Phone Number" 
                placeholder="Enter phone number" 
                minLength="5" 
                maxLength="12" 
                id="telinput" 
                type="tel" 
            />

            <TextBox 
                title="Date of Birth" 
                placeholder="Enter date of birth"
                id="dobinput" 
                type="date" 
            />

            <TextBox 
                title="UCAS ID" 
                placeholder="Enter UCAS ID" 
                id="ucasinput" 
                type="text" 
            />

            <RadioButton heading="Nationality" options={options} name="test"/>
        </div>
    );
}

export default EssentialApplicantInfo;