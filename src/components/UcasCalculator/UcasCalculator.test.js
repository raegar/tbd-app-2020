import React from 'react';
import { render, screen, cleanup, wrapper } from '@testing-library/react';
import '@testing-library/jest-dom';
import UcasCalculator from './UcasCalculator';

afterEach(cleanup);

it("Renders the calculator", () => {
    const { asFragment } = render(<UcasCalculator/>);
    expect(asFragment()).toMatchSnapshot();
});

test("Points 0 is displayed by default", () => {
    render(
        <UcasCalculator/>
    );

    expect(screen.getByTestId("qualPoints")).not.toBeNull();
    expect(screen.getByTestId("qualPoints")).toHaveTextContent("Points: 0");
});

test("Total points 0 is displayed by default", () => {
    render(
        <UcasCalculator/>
    );

    expect(screen.getByTestId("totalPoints")).not.toBeNull();
    expect(screen.getByTestId("totalPoints")).toHaveTextContent("0");//.toBe(0);
})

//TODO: add test for selecting a course and grade.