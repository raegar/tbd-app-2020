import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeSecondPage from './ClearingOfferMadeSecondPage';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeSecondPage", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeSecondPage /></Router>);
    expect(asFragment()).toMatchSnapshot();
});