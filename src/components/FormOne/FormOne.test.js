import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormOne from './FormOne';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("Renders Form One", () => {
    const { asFragment } = render(<Router><FormOne /></Router>);
    expect(asFragment()).toMatchSnapshot();
});

test('Prior Credit Conditional Rendering', () => {
    render (
        <Router>
            <FormOne />
        </Router>
    )
    //The prior credit radio button should be in the document
    expect(screen.getByTestId('prior-yes')).toBeInTheDocument()

    //The conditional textbox + caption should not be
    expect(screen.queryByText("How Many Credits?")).toBe(null)
    expect(screen.queryByTestId('prior-credit-text')).toBe(null)

    //Click the yes button
    fireEvent.click(screen.getByTestId('prior-yes'))

    //The caption + text box should now be present
    expect(screen.getByText("How Many Credits?")).toBeInTheDocument()

    //Click the no button
    fireEvent.click(screen.getByTestId('prior-no'))

    //The caption + textbox should disappear again
    expect(screen.queryByText("How many credits?")).toBe(null)
})

test('Prior Study Conditional Rendering', () => {
    render(
        <Router>
            <FormOne />
        </Router>
    )

    expect(screen.getByTestId('study-yes')).toBeInTheDocument()
    expect(screen.queryByText('When did they last study at UCP/ARU?')).toBe(null)

    fireEvent.click(screen.getByTestId('study-yes'))

    expect(screen.queryByText('When did they last study at UCP/ARU?')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('study-no'))
    expect(screen.queryByText('When did they last study at UCP/ARU?')).toBe(null)
})