import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import UCPButton from '../Buttons/UCPButton';
import './SelectRole.css';
import {isMobile} from 'react-device-detect';

//Must Set HREF attribute to use

const SelectRole = () => {
    
    let buttonClassName;
    if(isMobile)
    {
   
        buttonClassName = "largebutton";
    }
    else{
      
        buttonClassName = "extralargebutton";
    }
    return(
        <Container className="mt-5 px-3 py-3 select-role-container">
            <Row className="text-center">
                <Col className="mt-3 mb-3">
                    <UCPButton to="/NewApplicationPage" buttonText="Perspective Student" className={buttonClassName} href="/NewApplicationPage" />
                    <UCPButton to="/login" buttonText="Staff Portal" className={buttonClassName} href="/login" />

                </Col>
                 
            </Row>
        </Container>
    );
}

export default SelectRole;