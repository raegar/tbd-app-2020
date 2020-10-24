import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';

//cleans up 
afterEach(cleanup);

it("renders disclaimer", () => {
    const { asFragment } = render(<DropdownMenu/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<DropdownMenu/>);
    expect(getByTestId('ucpDropdownMenu'));
});

it("Disclaimer Test Id", () => {
    const { getByText } = render(<DropdownMenu/>);
    expect(getByText('PRIVACY STATEMENT:'));
});