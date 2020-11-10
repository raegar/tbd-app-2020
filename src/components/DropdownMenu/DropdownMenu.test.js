import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders DropdownMenu", () => {
    const { asFragment } = render(<Router><DropdownMenu/></Router>);
    expect(asFragment()).toMatchSnapshot();
});
