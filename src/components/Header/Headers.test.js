import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Headers from './Headers';

//cleans up 
afterEach(cleanup);

it("Renders Header", () => {
    const { asFragment } = render(<Headers/>);
    expect(asFragment()).toMatchSnapshot();
});
