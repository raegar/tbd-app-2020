import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import EssentialApplicantInfo from './EssentialApplicantInfo';

//cleans up 
afterEach(cleanup);

it("Renders Essential Applicant Info", () => {
    const { asFragment } = render(<EssentialApplicantInfo />);
    expect(asFragment()).toMatchSnapshot();
});
