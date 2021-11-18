import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from './Breadcrumb';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Breadcrumb", () => {
    const { asFragment } = render(<Router><Breadcrumb /></Router>);
    expect(asFragment()).toMatchSnapshot();
});