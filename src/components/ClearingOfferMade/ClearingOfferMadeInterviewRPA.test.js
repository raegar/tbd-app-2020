import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeInterviewRPA from './ClearingOfferMadeInterviewRPA';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeInterviewRPA", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeInterviewRPA /></Router>);
    expect(asFragment()).toMatchSnapshot();
});