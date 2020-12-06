import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeStudentEnd from './ClearingOfferMadeStudentEnd';
import { BrowserRouter as Router} from 'react-router-dom';
import '../../global/GlobalVariables.js';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeStudentEnd", () => {
    global.ApplicationFormData.email = "Test@email.com";
    const { asFragment } = render(<Router><ClearingOfferMadeStudentEnd /></Router>);
    expect(asFragment()).toMatchSnapshot();
});