import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';

//cleans up 
afterEach(cleanup);

it("Renders DropdownMenu", () => {
    const { asFragment } = render(<DropdownMenu/>);
    expect(asFragment()).toMatchSnapshot();
});
