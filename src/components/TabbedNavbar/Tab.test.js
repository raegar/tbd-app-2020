import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import Tab from './Tab';
import { BrowserRouter as Router } from 'react-router-dom';

//cleansup
afterEach(cleanup);

it("Renders Tab", () => {
    const { asFragment } = render(<Router><Tab></Tab></Router>);
    expect(asFragment()).toMatchSnapshot();
})

