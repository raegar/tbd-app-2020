import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeFourthPage from './ClearingOfferMadeFourthPage';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeFourthPage", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeFourthPage /></Router>);
    expect(asFragment()).toMatchSnapshot();
});