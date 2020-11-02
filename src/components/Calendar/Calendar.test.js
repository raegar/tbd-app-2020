import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

//cleans up 
afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Calendar/>);
    expect(asFragment()).toMatchSnapshot();
});
