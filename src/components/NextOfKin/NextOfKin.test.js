import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import NextOfKin from './NextOfKin';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders LevelThreeQualifications", () => {
    const { asFragment } = render(<Router><NextOfKin/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

/*it("Disclaimer Test Id", () => {
    const { getByTestId } = render(<Disclaimer/>);
    expect(getByTestId('ucpDisclaimer'));
});*/
