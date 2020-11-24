import React from 'react';
import { render, cleanup, fireEvent, queryAllByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom';
import UCPButton from '../Buttons/UCPButton';
import Login from './Login';
import TextBox from '../TextBox/TextBox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Login", () => {
    const { asFragment } = render(<Login/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Renders Submit Button", () => {
    const {queryByTestId, queryByPlaceholderName} = render(<UCPButton to="none" className="smallbutton" buttonText="Submit"/>)
    expect(queryByTestId("ucpButton")).toBeTruthy()

});

it("Renders Username TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox
                                            type="text" title="Username" placeholder="Enter Your Username"/> )
    expect(queryByPlaceholderText("Enter Your Username")).toBeTruthy()   
});
it("Renders Password TextBox and Placeholder", () => {
    const {queryByPlaceholderText} = render(<TextBox title="Password" type="password"  placeholder="Enter Your Password"/>  )
    expect(queryByPlaceholderText("Enter Your Password")).toBeTruthy()   
});

describe("Input values", () => {
    it("updates username on change", () => {
        const {queryByPlaceholderText} = render(<TextBox placeholder="Enter Your Username"/>)

        const textInput = queryByPlaceholderText('Enter Your Username')

        fireEvent.change(textInput, {target : {value: "fName.lName@student.peterborough.ac.uk"}})
        
        expect(textInput.value).toBe("fName.lName@student.peterborough.ac.uk")
    });

    it("updates password on change", () => {
        const {queryByPlaceholderText} = render(<TextBox placeholder="Enter Your Password"/>)

        const textInput = queryByPlaceholderText('Enter Your Password')

        fireEvent.change(textInput, {target : {value: "Password"}})
        
        expect(textInput.value).toBe("Password")
    });
});

describe("User details", () => {
    describe("with no data inside query", () => {
        it("does not trigger handleSubmit function", () => {
            const handleSubmit = jest.fn();

            const {queryByTestId} = render(<Router><Login/></Router>)
            fireEvent.click(queryByTestId('ucpButton'))
            
            expect(handleSubmit).not.toHaveBeenCalled();
        })
    });

    describe("with data inside query", () => {
        it("triggers handleSubmit function", () => {
            const submitData = jest.fn();

            const {queryByTestId, queryByPlaceholderText} = render(<Router><Login/></Router>)

            const userInput = queryByPlaceholderText('Enter Your Username')
            const passInput = queryByPlaceholderText('Enter Your Password')

            fireEvent.change(userInput, {target : {value: "fName.lName@ucp.ac.uk"}})
            fireEvent.change(passInput, {target : {value: "Password"}})
            submitData[0] = userInput;
            submitData[1] = passInput;

            fireEvent.click(queryByTestId('ucpButton'))
            
            expect(submitData[0].value).toBe("fName.lName@ucp.ac.uk");
            expect(submitData[1].value).toBe("Password");
        })
    })
})