import React from 'react';
import './Jumbotron.css';

function Jumbotron({children, ...props}) {
	return (
		<div className="jumbo" data-testid="jumbotron">
			{children}
		</div>        
	);
}

export default Jumbotron;