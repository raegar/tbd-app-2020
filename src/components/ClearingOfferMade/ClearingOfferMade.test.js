import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMade from './ClearingOfferMade';
import { BrowserRouter as Router} from 'react-router-dom';
import '../../global/GlobalVariables.js';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMade", () => {
    global.ApplicationFormData.email = "Test@email.com";
    const { asFragment } = render(<Router><ClearingOfferMade /></Router>);
    expect(asFragment()).toMatchSnapshot();
});