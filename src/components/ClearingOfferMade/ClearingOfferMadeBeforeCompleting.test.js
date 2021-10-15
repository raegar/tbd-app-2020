import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeBeforeCompleting from './ClearingOfferMadeBeforeCompleting';
import { BrowserRouter as Router} from 'react-router-dom';
import '../../global/GlobalVariables.js';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeBeforeCompleting", () => {
    global.ApplicationFormData.email = "Test@email.com";
    const { asFragment } = render(<Router><ClearingOfferMadeBeforeCompleting /></Router>);
    expect(asFragment()).toMatchSnapshot();
});