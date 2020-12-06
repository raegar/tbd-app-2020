import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginTextBox from './LoginTextBox';

//cleans up 
afterEach(cleanup);

it("Renders LoginTextBox", () => {
    const { asFragment } = render(<LoginTextBox   title="First Name" 
    placeholder="Enter your firstname" 
    minLength={5} 
    maxLength={30} 
    id="input1" 
    type="text" />);
    expect(asFragment()).toMatchSnapshot();
});
