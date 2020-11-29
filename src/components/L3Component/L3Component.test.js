import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import L3Component from './L3Component';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders L3Component", () => {
    const { asFragment } = render(<Router><L3Component/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

/*it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<Disclaimer/>);
    expect(getByTestId('ucpDisclaimer'));
});*/
