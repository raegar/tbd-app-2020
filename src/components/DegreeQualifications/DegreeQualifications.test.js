import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DegreeQualifications from './DegreeQualifications';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Degree Qual", () => {
    const { asFragment } = render(<Router><DegreeQualifications /></Router>);
    expect(asFragment()).toMatchSnapshot();
});

test("Level 4 Qualification Conditional rendering", () => {
    const lookingFor = 'Enter qualification name and grade:'
    render(
        <Router>
            <DegreeQualifications />
        </Router>
    )

    expect(screen.getByTestId('prior-yes')).toBeInTheDocument()
    expect(screen.queryByText(lookingFor)).toBeNull()

    fireEvent.click(screen.getByTestId('prior-yes'))

    expect(screen.queryByText(lookingFor)).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('prior-no'))

    expect(screen.queryByText(lookingFor)).toBeNull()
})