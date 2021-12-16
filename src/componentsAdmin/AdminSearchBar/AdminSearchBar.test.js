/* eslint-disable indent */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminSearchBar from './AdminSearchBar';

it("Renders AdminSearchBar", () => {
	const {asFragment} = render(<AdminSearchBar/>);
	expect(asFragment()).toMatchSnapshot();
});

test("Proper progress number shows", () => {
    const lookingFor = 'Search:';
	expect(screen.queryByText(lookingFor)).toBeNull();
});