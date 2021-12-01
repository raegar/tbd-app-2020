import React from 'react';
import { render, fireEvent, screen, queryAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import EssentialApplicantInfo from './EssentialApplicantInfo';
import { BrowserRouter as Router } from 'react-router-dom';
import TextBox from '../TextBox/TextBox';
import UCPButton from "../Buttons/UCPButton";
//cleans up 
it("Renders Essential Applicant Info", () => {
    const { asFragment } = render(<Router><EssentialApplicantInfo /></Router>);
    expect(asFragment()).toMatchSnapshot();
});
// check whether all text boxes are present
it("Renders Name TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="Name" placeholder="Enter your name"/> )
    expect(queryByPlaceholderText("Enter your name")).toBeTruthy()   
});
it("Renders Email TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="Email" placeholder="Enter your email"/> )
    expect(queryByPlaceholderText("Enter your email")).toBeTruthy()   
});
it("Renders Phone Number TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="Tel No" placeholder="Enter phone number"/> )
    expect(queryByPlaceholderText("Enter phone number")).toBeTruthy()   
});
it("Renders Date Of Birth TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="D/O/B" placeholder="Enter date of birth"/> )
    expect(queryByPlaceholderText("Enter date of birth")).toBeTruthy()   
});
it("Renders UCAS TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="UCAS ID" placeholder="Enter UCAS ID"/> )
    expect(queryByPlaceholderText("Enter UCAS ID")).toBeTruthy()   
});
// check whether the Apply Now button is present
it("Renders Confirm and Go Button", () => {
    const {queryByTestId, queryByPlaceholderName} = render(<UCPButton to="none" className="mediumbutton" buttonText="Apply Now​"/>)
    expect(queryByTestId("ucpButton")).toBeTruthy()

});
// check whether the Request a Call Back button is present
it("Renders Request a Call Back Button", () => {
    const {queryByTestId, queryByPlaceholderName} = render(<UCPButton to="none" className="mediumbutton" buttonText=" Request a Call Back​"/>)
    expect(queryByTestId("ucpButton")).toBeTruthy();

});
// test whether the onchange function works properply
describe("Input values", () => {
    it("updates name on change", () => {
        const { queryByPlaceholderText } = render(<TextBox placeholder="Enter your name" />)

        const textInput = queryByPlaceholderText('Enter your name')

        fireEvent.change(textInput, { target: { value: "Ernasi" } })

        expect(textInput.value).toBe("Ernasi")
    });

    it("updates email on change", () => {
        const { queryByPlaceholderText } = render(<TextBox placeholder="Enter your email" />)

        const textInput = queryByPlaceholderText('Enter your email')

        fireEvent.change(textInput, { target: { value: "ernasi.pikouli@peterborough.ac.uk" } })

        expect(textInput.value).toBe("ernasi.pikouli@peterborough.ac.uk")
    });
});

