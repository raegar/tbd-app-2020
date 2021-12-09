import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDashboard from '/AdminDashboard';
import { BrowserRouter as Router} from 'react-router-dom';

it("Renders AdminDashboard", () => {
    const {asFragment } = render(<Router><AdminDashboard/></Router>);
    expect(asFragment()).toMatchSnapshot(); 
});
