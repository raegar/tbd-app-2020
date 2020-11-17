import React from 'react';
import Header from '../../stories/Header';
import {Container} from 'react-bootstrap';
import Button from '../Buttons/UCPButton'
import JumbotronComponent from '../../components/Jumbotron Component/JumbotronComponent';
import './ApplicationComplete.css'
function ApplicationComplete(){
    return(
        <Container  className="mt-5 px-3 py-3 application-complete-container">
        
<JumbotronComponent className='JumbotronComponent' jumbotronText="Application Complete You're details have been emailed
to you.">
</JumbotronComponent>
        </Container>
    )
}

export default ApplicationComplete;