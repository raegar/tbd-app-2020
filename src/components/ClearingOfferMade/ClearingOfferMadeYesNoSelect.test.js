import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClearingOfferMadeYesNoSelect from './ClearingOfferMadeYesNoSelect';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders ClearingOfferMadeYesNoSelect", () => {
    const { asFragment } = render(<Router><ClearingOfferMadeYesNoSelect /></Router>);
    expect(asFragment()).toMatchSnapshot();
});