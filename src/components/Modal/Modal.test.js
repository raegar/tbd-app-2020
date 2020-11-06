import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Modal", () => {
    const { asFragment } = render(<Router><Modal id="hello" btnText="This is a modal button"/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

