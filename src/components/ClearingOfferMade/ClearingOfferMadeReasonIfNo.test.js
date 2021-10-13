import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeThirdPage from './ClearingOfferMadeThirdPage';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeThirdPage", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeThirdPage /></Router>);
    expect(asFragment()).toMatchSnapshot();
});