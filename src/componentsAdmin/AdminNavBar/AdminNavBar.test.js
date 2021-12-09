import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminNavBar from './AdminNavBar';
import { BrowserRouter as Router} from 'react-router-dom';

it("Renders AdminNavBar", () => {
    const { asFragment } = render(<Router><AdminNavBar /></Router>);
    expect(asFragment()).toMatchSnapshot();
});