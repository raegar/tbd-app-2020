import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectRole from './SelectRole';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Render SelectRole", () => {
    const { asFragment } = render(<Router><SelectRole/></Router>);
    expect(asFragment()).toMatchSnapshot();  
});