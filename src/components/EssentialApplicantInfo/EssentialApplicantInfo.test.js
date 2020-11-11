import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import EssentialApplicantInfo from './EssentialApplicantInfo';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Essential Applicant Info", () => {
    const { asFragment } = render(<Router><EssentialApplicantInfo /></Router>);
    expect(asFragment()).toMatchSnapshot();
});
