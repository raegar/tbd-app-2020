import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminLogin from './AdminLogIn';
import { BrowserRouter as Router} from 'react-router-dom';
import AdminLogIn from './AdminLogIn';

it("Renders AdminLogIn", () => {
    const { asFragment } = render(<Router><AdminLogIn /></Router>);
    expect(asFragment()).toMatchSnapshot();
});