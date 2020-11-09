import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import UCPButton from './UCPButton';
import { BrowserRouter as Router} from 'react-router-dom';

//cleans up 
afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Router><UCPButton className="largetealbutton" buttonText="Click Here"/></Router>);
    expect(asFragment()).toMatchSnapshot();
});

it("Button Test Id", () => {
    const { getByTestId } = render(<Router><UCPButton className="largetealbutton" buttonText="Click Here"/></Router>);
    expect(getByTestId('ucpButton'));
});

/*
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Comp from '../Comp'

test('shows proper heading when rendered', () => {
  const { getByText } = render(Comp, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', async () => {
  const { getByText } = render(Comp, { name: 'World' })
  const button = getByText('Button')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(button).toHaveTextContent('Button Clicked')
})
*/