import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeFifthPage from './ClearingOfferMadeFifthPage';
import { BrowserRouter as Router} from 'react-router-dom';
import '../../global/GlobalVariables.js';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeFifthPage", () => {
    global.ApplicationFormData.email = "Test@email.com";
    const { asFragment } = render(<Router><ClearingOfferMadeFifthPage /></Router>);
    expect(asFragment()).toMatchSnapshot();
});