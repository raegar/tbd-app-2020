import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import UCPButton from '../Buttons/UCPButton';
import './SelectRole.css'
import ApplicationComplete from '../ApplicationComplete/ApplicationComplete'
//Must Set HREF attribute to use

const SelectRole = () => {
    return(
        <Container className="mt-5 px-3 py-3 select-role-container">
            
            <Row className="text-center">
                <Col className="mt-3 mb-3">
                    <UCPButton to="/login" buttonText="Staff Portal" className="extralargebutton" href="/login" />
                </Col>
                 <Col className="mt-3 mb-3">
                    <UCPButton to="/NewApplicationPage" href="#" buttonText="Prospective Student" className="extralargebutton" props="student" />
                </Col>
            </Row>
        </Container>
    );
}

export default SelectRole;