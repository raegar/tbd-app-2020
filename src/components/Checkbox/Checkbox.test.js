import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

//cleans up 
afterEach(cleanup);

it("Renders Checkbox Component", () => {
    const { asFragment } = render(<Checkbox/>);
    expect(asFragment()).toMatchSnapshot();
});