import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectRole from './SelectRole';

//cleans up 
afterEach(cleanup);

it("Render SelectRole", () => {
    const { asFragment } = render(<SelectRole  />);
    expect(asFragment()).toMatchSnapshot();  
});