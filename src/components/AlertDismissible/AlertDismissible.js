import {Alert , Button} from 'react-bootstrap';
import React from 'react';
import './AlertDismissible.css';

class AlertDismissible extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.state = {
			show: true
		};
	}

  setShow = (show) => {
  	this.setState({show: show});
  }

  render = () => {
  	if (this.state.show) {
  		return (
  			<Alert className="Alert" onClose={() => this.setShow(false)} dismissible>
  				<Alert.Heading>Please request GCSE grades</Alert.Heading>
  			</Alert>
  		);
  	}
  	return this.state.show ? <Button onClick={() => this.setShow(true)}>Show Alert</Button> : <span></span>;
  }
}
export default AlertDismissible;