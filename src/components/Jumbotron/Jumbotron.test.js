import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Jumbotron from './Jumbotron';

//cleans up 
afterEach(cleanup);

it("Renders Jumbotron", () => {
    const { asFragment } = render(<Jumbotron className="jumbo"/>);
    expect(asFragment()).toMatchSnapshot();
});