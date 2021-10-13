import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<div className="jumbo" data-testid="jumbotron">
    			{this.props.children}
    		</div>        
    	);
    }
}

export default Jumbotron;