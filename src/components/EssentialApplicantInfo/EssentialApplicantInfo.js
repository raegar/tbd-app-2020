import React from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import TextBox from '../TextBox/TextBox'
import UCPButton from '../Buttons/UCPButton'
import RadioButton from '../RadioButton/RadioButton'

const EssentialApplicantInfo = () => {
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
        </div>
    );
}

export default EssentialApplicantInfo;