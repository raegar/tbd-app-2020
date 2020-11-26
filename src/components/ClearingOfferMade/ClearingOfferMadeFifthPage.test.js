import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeFifthPage from './ClearingOfferMadeFifthPage';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeFifthPage", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeFifthPage /></Router>);
    expect(asFragment()).toMatchSnapshot();
});