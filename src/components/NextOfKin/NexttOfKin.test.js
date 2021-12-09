import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NextOfKin from './NextOfKin';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up

afterEach(cleanup);

it("Renders NextOfKin", () =>{
    const { asFragment } = render(<Router><NextOfKin/></Router>);
    expect(asFragment()).toMatchSnapshot();
});