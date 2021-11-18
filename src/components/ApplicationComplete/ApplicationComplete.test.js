import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import JumbotronComponent from '/Jumbotron Component/JumbotronComponent';
import ApplicationComplete from './ApplicationComplete';

//cleans up 
afterEach(cleanup);


it("Renders ApplicationComplete", () => {
    const { asFragment } = render(<ApplicationComplete />);
    expect(asFragment()).toMatchSnapshot();
});