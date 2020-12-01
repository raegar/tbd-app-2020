import React from 'react';
import {Container} from 'react-bootstrap';
import JumbotronComponent from '../../components/Jumbotron Component/JumbotronComponent';
import './ApplicationComplete.css';

export const  ApplicationComplete = ({...props }) => {
        return (
            <div className="application-complete-container">
                <JumbotronComponent className='JumbotronComponent' jumbotronText= "Your Application has been sent, someone will be intouch shortly"/>
            </div>
    )
}

export default ApplicationComplete;