import React from 'react';
import { render, fireEvent, screen, queryAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ProgressBar from './ProgressBar';

it("Renders ProgressBar", () => {
    const {asFragment} = render(<ProgressBar bgcolor="#000000" completed={42}/>)
})

test("Proper progress number shows", () => {
    const percent = 64;

    render(
        <Router>
            <ProgressBar bgcolor="#FFFFFF" completed={percent}/>
        </Router>
    );

    expect(screen.getByText(percent + "%"));
})