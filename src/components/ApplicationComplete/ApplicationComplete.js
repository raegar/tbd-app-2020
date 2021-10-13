import React from 'react';
import JumbotronComponent from '../../components/Jumbotron Component/JumbotronComponent';
import './ApplicationComplete.css';

class ApplicationComplete {
    render = () => {
    	return (
    		<div className="application-complete-container">
    			<JumbotronComponent 
    				className='JumbotronComponent' 
    				jumbotronText= "Your Application has been sent, someone will be in touch shortly"
    			/>
    		</div>
    	);
    }
}

export default ApplicationComplete;