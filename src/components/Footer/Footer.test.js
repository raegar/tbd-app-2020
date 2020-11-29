import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

//cleans up 
afterEach(cleanup);

it("Renders Footer", () => {
    const { asFragment } = render(<Footer/>);
    expect(asFragment()).toMatchSnapshot();
});
