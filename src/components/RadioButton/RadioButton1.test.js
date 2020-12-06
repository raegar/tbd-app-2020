import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton1 from './RadioButton1';

//cleans up 
afterEach(cleanup);

var options = [
    {label: "UK National", id: "UK", value: "UK"},
    {label: "EU National", id: "EU", value: "EU"},
    {label: "Other", id: "Other", value: "Other"}
];

it("Renders Radio Button1", () => {
    const { asFragment } = render(<RadioButton1 heading="Nationality" options={options} name="test"/>);
    expect(asFragment()).toMatchSnapshot();
});
