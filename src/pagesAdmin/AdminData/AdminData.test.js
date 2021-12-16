import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminData from './AdminData';
import { BrowserRouter as Router} from 'react-router-dom';


//cleans up 
afterEach(cleanup);

it("Renders AdminData", () => {
	const { asFragment } = render(<Router><AdminData/></Router>);
	expect(asFragment()).toMatchSnapshot();
});