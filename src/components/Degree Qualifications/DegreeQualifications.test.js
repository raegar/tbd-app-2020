import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import DegreeQualifications from './DegreeQualifications';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Degree Qual", () => {
    const { asFragment } = render(<Router><DegreeQualifications /></Router>);
    expect(asFragment()).toMatchSnapshot();
});