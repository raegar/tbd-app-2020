import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeReasonIfNo from './ClearingOfferMadeReasonIfNo';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeReasonIfNo", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeReasonIfNo /></Router>);
    expect(asFragment()).toMatchSnapshot();
});