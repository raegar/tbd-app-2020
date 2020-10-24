import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextBox from './TextBox';

//cleans up 
afterEach(cleanup);

it("Renders TextBox", () => {
    const { asFragment } = render(<TextBox   title="First Name" 
    placeholder="Enter your firstname" 
    minlength="5" 
    maxlength="30" 
    id="input1" 
    type="text" />);
    expect(asFragment()).toMatchSnapshot();
});
