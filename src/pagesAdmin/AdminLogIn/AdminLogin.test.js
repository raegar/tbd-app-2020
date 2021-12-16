import React from 'react';
import { render, } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import AdminLogIn from './AdminLogIn';

it("Renders AdminLogIn", () => {
	const { asFragment } = render(<Router><AdminLogIn /></Router>);
	expect(asFragment()).toMatchSnapshot();
});
test ("AdminLogin Conditional rendering"), ()=> {
	const lookingFor ='Email:'
	render(
		<Router>
			<AdminLogIn />
		</Router>
	);
});