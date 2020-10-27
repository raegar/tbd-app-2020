import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TextBox from './TextBox';
import UCPButton from './UCPButton';
import './Login.css';
export default class Login extends React.Component{
    render(){
        return (     
            <Container className="ContainerStyle">
                <Row>
                    <div className="UserInfo">
                        <h2>Login</h2>
                    </div>
                </Row>
                <Row> 
                    <Col>
                        <div className="UserInfo">
                            <p>Username: </p>
                            <TextBox placeholder="Enter Username"/> 
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="UserInfo">
                            <p style={{paddingRight: "4px"}}>Password: </p>
                            <TextBox placeholder="Enter Password" type="password"/> 
                        </div>  
                    </Col>
                </Row>
                <Row>
                    <div className="UserInfo">
                        <UCPButton buttonText="Login" className="smallbutton"/>
                    </div>
                </Row>
            </Container>
            )
        }
    };