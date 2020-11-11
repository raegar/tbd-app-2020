import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Disclaimer from './Disclaimer';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Disclaimer", () => {
    const { asFragment } = render(<Router><Disclaimer/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

/*it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<Disclaimer/>);
    expect(getByTestId('ucpDisclaimer'));
});*/
