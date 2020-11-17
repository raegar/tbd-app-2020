import React from 'react';
import Header from '../../stories/Header';
import {Container} from 'react-bootstrap';
import JumbotronComponent from '../JumbotronComponent/JumbotronComponent';
import {isMobile} from 'react-device-detect';
function ApplicationComplete(){
    return(
        <Container>
        
<JumbotronComponent className='JumbotronComponent'/>

        </Container>
    )
}

export default ApplicationComplete;