import React from 'react';
import { render, fireEvent, screen, queryAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RadioButton from '../RadioButton/RadioButton'
import AdditionalInfo from './AdditionalInformation';

// test if all radio buttons are present
test('Prior Credit Conditional Rendering', () => {
    render(
        <Router>
            <AdditionalInfo />
        </Router>
    )
    //check whether all radio buttons are present
    expect(screen.getByTestId('UK')).toBeInTheDocument();
    expect(screen.getByTestId('EU')).toBeInTheDocument();
    expect(screen.getByTestId('Other')).toBeInTheDocument();
    expect(screen.getByTestId('crimeYes')).toBeInTheDocument();
    expect(screen.getByTestId('crimeNo')).toBeInTheDocument();
    expect(screen.getByTestId('supportYes')).toBeInTheDocument();
    expect(screen.getByTestId('supportNo')).toBeInTheDocument();
})
// check if radio but is checked on click event
it("should check UK option", () => { 
    var nationalityOptions = [
        { label: "UK National", id: "UK", value: "UK" },
        { label: "EU National", id: "EU", value: "EU" },
        { label: "Other", id: "Other", value: "Other" },
      ];
    const handleChange = jest.fn();
    const { container} = render(<RadioButton name="nationality" options={nationalityOptions} onClick={handleChange} />);
    var ukOption = screen.getByTestId('UK');
    expect(ukOption).not.toBeChecked();
    //Select Uk option
    fireEvent.click(screen.getByTestId('UK'));
    expect(ukOption).toBeChecked();
}); 