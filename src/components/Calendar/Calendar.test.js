import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("renders", () => {

    const { asFragment } = render(<Router><Calendar/></Router>);
    expect(asFragment()).toMatchSnapshot();
    
});
