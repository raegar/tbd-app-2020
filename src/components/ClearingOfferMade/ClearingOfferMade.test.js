import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMade from './ClearingOfferMade';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMade", () => {
    const { asFragment } = render(<Router><ClearingOfferMade /></Router>);
    expect(asFragment()).toMatchSnapshot();
});