import React from 'react';
import { render, screen, cleanup, wrapper } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseInfoPanel from './CourseInfoPanel';

afterEach(cleanup);

it("Renders the calculator", () => {
    const { asFragment } = render(<CourseInfoPanel/>);
    expect(asFragment()).toMatchSnapshot();
});