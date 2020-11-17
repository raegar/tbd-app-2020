import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import JumbotronComponent from './JumbotronComponent';

//cleans up 
afterEach(cleanup);

it("Renders JumbotronComponent", () => {
    const { asFragment } = render(<JumbotronComponent className="jumbotron"/>);
    expect(asFragment()).toMatchSnapshot();
});