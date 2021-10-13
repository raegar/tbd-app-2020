import React from 'react';
import PropTypes from 'prop-types';
import UCPButton from '../Buttons/UCPButton';
import './Modal.css';

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
		this.state = {
			show: false
		};
	}

    setShow = (show) => {
    	this.setState({show: show});
    }

    render = () => {
    	if (!this.state.show) {
    		return(
    			<UCPButton 
    				to="none" 
    				id={this.props.btnId} 
    				className={this.props.btnClass} 
    				buttonText={this.props.btnText}
    				onClick={()=>this.setShow(true)}
    			/>
    		);
    	} else {
    		return (
    			<>
    				<UCPButton 
    					to="none" 
    					id={this.props.btnId} 
    					className={this.props.btnClass} 
    					buttonText={this.props.btnText}
    					onClick={()=>this.setShow(true)}
    				/>
    				<div 
    					className="main-modal" 
    					id={this.props.id}>
    					<span className="close" onClick={() => this.setShow(false)}>&times;</span>
    					<div className="main-modal-content">
    						{this.props.children}
    					</div>
    				</div>
    				<div className="modal-overlay" onClick={() => this.setShow(false)}></div>
    			</>
    		);   
    	}
    }
}

Modal.propTypes = {
	id: PropTypes.string,
	btnText: PropTypes.string,
	btnClass: PropTypes.string,
	btnId: PropTypes.string
};

Modal.defaultProps = {
	id: null,
	btnText: '',
	btnClass: 'mediumbutton',
	btnId: null
};

/* EXAMPLE USE 

<Modal id="hello" btnText="This is a modal button">
    <div>
        <h2>This is a modal</h2>
        <p>Example modal</p>
    </div>
</Modal>

*/

export default Modal;