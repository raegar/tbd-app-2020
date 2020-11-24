import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LevelTwoQualifications from './LevelTwoQualifications';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders LevelTwoQualifications", () => {
    const { asFragment } = render(<Router><LevelTwoQualifications /></Router>);
    expect(asFragment()).toMatchSnapshot();
});
