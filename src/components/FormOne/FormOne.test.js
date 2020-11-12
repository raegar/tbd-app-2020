import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormOne from './FormOne';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Form One", () => {
    const { asFragment } = render(<Router><FormOne /></Router>);
    expect(asFragment()).toMatchSnapshot();
});