import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminGraphs from '/AdminGraphs';
import { BrowserRouter as Router} from 'react-router-dom';

it("Renders AdminGraphs", () => {
    const {asFragment } = render(<Router><AdminGraphs/></Router>);
    expect(asFragment()).toMatchSnapshot(); 
});
