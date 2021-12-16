import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminGraph from './AdminGraph';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up

afterEach(cleanup);

it("Renders AdminGraph", () => {
    const {asFragment } = render(<Router><AdminGraph/></Router>);
    expect(asFragment()).toMatchSnapshot(); 
});
