import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

//cleans up 
afterEach(cleanup);

it("Renders Header", () => {
    const { asFragment } = render(<Header/>);
    expect(asFragment()).toMatchSnapshot();
});
