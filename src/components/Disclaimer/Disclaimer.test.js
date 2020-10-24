import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Disclaimer from './Disclaimer';

//cleans up 
afterEach(cleanup);

it("Renders Disclaimer", () => {
    const { asFragment } = render(<Disclaimer/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<Disclaimer/>);
    expect(getByTestId('ucpDisclaimer'));
});

it("Correct Text Present", () => {
    const { getByText } = render(<Disclaimer/>);
    expect(getByText('PRIVACY STATEMENT:'));
});