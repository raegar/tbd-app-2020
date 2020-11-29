import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertDismissible from './AlertDismissible';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders AlertDismissible", () => {
    const { asFragment } = render(<Router><AlertDismissible/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

/*it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<Disclaimer/>);
    expect(getByTestId('ucpDisclaimer'));
});*/
